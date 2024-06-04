/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import Cards from "react-credit-cards-2";
import * as cardValidator from "card-validator";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useRouter } from "next/router";
import {
  generalGetFunction,
  generalPostFunction,
} from "@/components/GlobalFunction";
import Link from "next/link";
import CircularLoader from "@/components/CircularLoader";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const routerData = router.query;
  const [packages, setPackages] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      if (routerData.id === null || routerData.id === undefined) {
        router.back();
      } else {
        async function getData() {
          const packageData = await generalGetFunction(
            `free/package/details/${routerData.id}`
          );
          if (packageData.status) {
            setPackages(packageData.data);
          }
        }
        getData();
      }
    }
  }, [router, routerData]);
  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    focused: "",
  });
  const [errorCard, setErrorCard] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
    cardName: false,
    focused: false,
  });

  //   Handle change for getting values from form
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "expiryDate") {
      setCardDetails((prevState) => ({
        ...prevState,
        [name]: value.trim().replace(/\s+/g, ""),
      }));
    } else {
      setCardDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    setErrorCard((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  }

  // Validate card number
  useEffect(() => {
    if (cardDetails.cardNumber.length > 0) {
      if (cardValidator.number(cardDetails.cardNumber).isValid) {
        setErrorCard((prevData) => ({
          ...prevData,
          cardNumber: false,
        }));
      } else {
        setErrorCard((prevData) => ({
          ...prevData,
          cardNumber: true,
        }));
      }
    }
  }, [cardDetails.cardNumber]);

  async function handleSubmit() {
    cardValidator.number(cardNumber).isValid;
    if (!cardValidator.number(cardDetails.cardNumber).isValid) {
      setErrorCard((prevData) => ({
        ...prevData,
        cardNumber: true,
      }));
    }
    if (cardDetails.cvv.length < 3 || cardDetails.cvv.length > 6) {
      setErrorCard((prevData) => ({
        ...prevData,
        cvv: true,
      }));
    }
    if (cardDetails.expiryDate === "") {
      setErrorCard((prevData) => ({
        ...prevData,
        expiryDate: true,
      }));
    }
    if (cardDetails.cardName === "") {
      setErrorCard((prevData) => ({
        ...prevData,
        cardName: true,
      }));
    }
    console.log("Tghis is card validator");
    if (
      !(cardDetails.cardName === "") &&
      !(cardDetails.expiryDate === "") &&
      !(cardDetails.cvv.length < 3 || cardDetails.cvv.length > 6) &&
      cardValidator.number(cardDetails.cardNumber).isValid
    ) {
      setLoading(true);
      const year = new Date().getFullYear();
      const parsedData = {
        account_id: routerData.account_id,
        package_id: routerData.id,
        amount: packages.offer_price,
        type: "card",
        card_number: Number(cardDetails.cardNumber.split(" ").join("")),
        exp_month: cardDetails.expiryDate.split("/")[0],
        exp_year: Number(
          String(year).slice(0, 2) +
            String(cardDetails.expiryDate.split("/")[1])
        ),
        cvc: cardDetails.cvv,
        name: cardDetails.cardName,
        transaction_type: "new package",
        subscription_type: packages.subscription_type,
        lead_id:routerData.leadId


        
      };
      const apidata = await generalPostFunction("pay", parsedData);
      if (apidata.status) {
        dispatch({
          type: "SET_INVOICE",
          invoiceLink: apidata.invoice_url,
        });
        dispatch({
          type: "SET_THANKYOUMESSAGE",
          thankYouMessage: `Your Payment is successfull with transaction id ${apidata.data.transaction_id} you will get an email soon. You can download invoice from my profile menue.`,
        });
        router.push({
          pathname: "/thank-you",
        });
      } else {
        setLoading(false);
        toast.error(apidata.message);
      }
    }
  }
  return (
    <div className="main">
      <div className="container py-4">
        <div className="flight_confirmdetails_wrapper row gx-5">
          <div className="col-12 border-start border-4 border-success mb-3 mx-3 px-3">
            <h5>Credit Card Information</h5>
          </div>

          <div className="col-xl-8">
            <div className="cardDetailsWrapper row">
              <div className="col-xl-5 my-auto">
                <Cards
                  number={cardDetails.cardNumber}
                  expiry={cardDetails.expiryDate}
                  cvc={cardDetails.cvv}
                  name={cardDetails.cardName}
                  focused={cardDetails.focused}
                />
              </div>
              <div className="card-details col-xl-6 position-relative">
                <div className="card1 card-body1">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group">
                        <label className="review-label">
                          Card Holder's Name
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          placeholder="Card Holder's Name"
                          className={`form-control travellerdetails ${
                            errorCard.cardName ? "error-border" : ""
                          }`}
                          name="cardName"
                          id="traveller_name_on_card"
                          type="text"
                          autoComplete="off"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          onFocus={() =>
                            setCardDetails((prevData) => ({
                              ...prevData,
                              focused: "",
                            }))
                          }
                        />
                        <small className="text-muted p-1">
                          (As it appears on your credit card)
                        </small>
                      </div>
                    </div>
                    <div className="col-xl-12 mt-1 mb-4">
                      <div className="form-group">
                        <label className="review-label">
                          Card Number
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="tvlrFormField make_relative card-reader position-relative">
                          <span id="CreditCardImg" className="CreditCardImg" />
                          <svg
                            className="cardImage position-absolute"
                            style={{
                              width: 35,
                              height: 35,
                              top: "-2px",
                              right: 2,
                            }}
                            {...getCardImageProps({ images })}
                          />
                          <input
                            placeholder="Card Number"
                            maxLength={16}
                            className={`form-control travellerdetails ${
                              errorCard.cardNumber ? "error-border" : ""
                            }`}
                            name="cardNumber"
                            id="traveller_card_number"
                            type="text"
                            // value={cardNumber}

                            {...getCardNumberProps({
                              onChange: (e) => {
                                handleChange(e);
                              },
                            })}
                            onFocus={() =>
                              setCardDetails((prevData) => ({
                                ...prevData,
                                focused: "",
                              }))
                            }
                          />
                          <small className="error">
                            {errorCard.cardNumber
                              ? "Enter valid card number"
                              : ""}
                          </small>
                          <div style={{ clear: "both" }} />
                          <p className="status">
                            <span className="status_icon" />
                            <span className="status_message" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mt-1 mb-4">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="review-label text-nowrap">
                              Expiry Date
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              placeholder="YEAR"
                              className={`form-control travellerdetails payment_exp_date ${
                                errorCard.expiryDate ? "error-border" : ""
                              }`}
                              name="traveller_card_cvv"
                              type="number"
                              {...getExpiryDateProps({
                                onChange: (e) => {
                                  handleChange(e);
                                  // setExpiryDate(
                                  //   e.target.value
                                  //     .trim()
                                  //     .replace(/\s+/g, "")
                                  // );
                                  // setErrorExpiryDate(false);
                                },
                              })}
                              onFocus={() =>
                                setCardDetails((prevData) => ({
                                  ...prevData,
                                  focused: "",
                                }))
                              }
                            />
                            <small className="error">
                              {erroredInputs.expiryDate
                                ? "Enter correct Expiry Date"
                                : ""}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mt-1 mb-4">
                      <div className="form-group">
                        <label className="review-label">
                          CVV Code
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        {/* <input type="text" className="form-control"  placeholder="0000"> */}
                        <div className="position-relative">
                          <input
                            placeholder="cvv"
                            className={`form-control travellerdetails payment_exp_date ${
                              errorCard.cvv ? "error-border" : ""
                            }`}
                            name="cvv"
                            // id="traveller_card_cvv"
                            type="number"
                            onChange={(e) => {
                              handleChange(e);
                              // if (
                              //   cvv.length === 2 ||
                              //   cvv.length === 3
                              // ) {
                              //   setErrorCvv(false);
                              // } else {
                              //   setErrorCvv(true);
                              // }
                            }}
                            onFocus={() =>
                              setCardDetails((prevData) => ({
                                ...prevData,
                                focused: "cvc",
                              }))
                            }
                          />
                          <small className="error">
                            {errorCard.cvv ? "Enter correct CVV" : ""}
                          </small>
                          <small
                            className="text-muted p-1"
                            style={{
                              position: "absolute",
                              right: 2,
                              top: 2,
                            }}
                          >
                            {/* 3 digit number from your card &nbsp;{" "} */}
                            {/* <img
                                                width={"44"}
                                                height={"28"}
                                                src={require("./card.gif")}
                                                alt="card"
                                            /> */}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button onClick={handleSubmit} className="payNow">
                        {" "}
                        Pay Now <i class="mx-2 fa-duotone fa-credit-card"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 account_detailssection py-0">
            <div className="priceBreakup mt-0 h-100">
              <div className="heading">
                <h3>Your Cart Details</h3>
              </div>
              <div className="grossTotal">
                <h5>PACKAGE COST</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>Actual Price</td>
                      <td>${packages?.regular_price}</td>
                    </tr>
                    {/* <tr>
                        <td>Included Local Company Number</td>
                        <td>$0.00</td>
                      </tr> */}
                    <tr>
                      <td>Taxes</td>
                      <td>Calculated at Checkout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="discounts">
                <h5>Discounts</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {(
                          ((packages?.regular_price - packages?.offer_price) *
                            100) /
                          packages?.regular_price
                        ).toFixed(2)}
                        % Off
                      </td>
                      <td>
                        -${packages?.regular_price - packages?.offer_price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="netTotal">
                <table>
                  <tbody>
                    <tr>
                      <td>Offer Price</td>
                      <td>${packages?.offer_price}</td>
                    </tr>
                    {/* <tr>
                        <td>First bill</td>
                        <td>$13.99</td>
                      </tr>
                      <tr>
                        <td>Monthly Bill</td>
                        <td>$13.99/mo</td>
                      </tr> */}
                  </tbody>
                </table>
              </div>
              <div className="terms">
                <p>**{packages?.description}</p>
              </div>
              <div id="checkout" style={{ display: "none" }}>
                <Link href="/" className="serviceBtn w-100 py-3">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? <CircularLoader /> : ""}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Payment;
