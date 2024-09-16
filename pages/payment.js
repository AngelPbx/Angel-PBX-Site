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
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const routerData = router.query;
  const [packages, setPackages] = useState();
  const [loading, setLoading] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [billing, setBilling] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const [errorBilling, setErrorBilling] = useState({
    name: false,
    phone: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    country: false,
  });

  function billingChnage(e) {
    const name = e.target.name;
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9 ]*$/;
    const emailRegex = /^[a-zA-Z0-9@.-]*$/;
    if (name === "email") {
      if (emailRegex.test(value)) {
        setBilling((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrorBilling((prevData) => ({
          ...prevData,
          [name]: false,
        }));
      }
    } else {
      if (regex.test(value)) {
        setBilling((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrorBilling((prevData) => ({
          ...prevData,
          [name]: false,
        }));
      }
    }
  }

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
      const regex = /^[a-zA-Z0-9 ]*$/;
      const emailRegex = /^[a-zA-Z0-9@.-]*$/;

      if (name === "email") {
        if (emailRegex.test(value)) {
          setCardDetails((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
      } else {
        if (regex.test(value)) {
          setCardDetails((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
      }
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
    Object.keys(billing).map((item) => {
      if (billing[item] === "") {
        setErrorBilling((prevData) => ({
          ...prevData,
          [item]: true,
        }));
      } else if (item === "phone") {
        // console.log(billing[item].length,"This is loop",item);
        if (billing[item].length > 15 || billing[item].length < 8) {
          setErrorBilling((prevData) => ({
            ...prevData,
            phone: true,
          }));
        }
      } else if (item === "email") {
        if (
          !billing["email"].includes("@") &&
          !billing["email"].includes(".")
        ) {
          setErrorBilling((prevData) => ({
            ...prevData,
            email: true,
          }));
        }
      }
    });
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
    console.log(
      Object.keys(billing)
        .map((item) => {
          if (billing[item] === "") {
            return true;
          } else if (item === "phone") {
            if (billing[item].length > 15 || billing[item].length < 8) {
              return true;
            }
          } else if (item === "email") {
            if (!(billing[item].includes("@") || billing[item].includes("."))) {
              return true;
            }
          }
        })
        .includes(true)
    );
    if (
      !(cardDetails.cardName === "") &&
      !(cardDetails.expiryDate === "") &&
      !(cardDetails.cvv.length < 3 || cardDetails.cvv.length > 6) &&
      cardValidator.number(cardDetails.cardNumber).isValid &&
      !Object.keys(billing)
        .map((item) => {
          if (billing[item] === "") {
            return true;
          } else if (item === "phone") {
            if (billing[item].length > 15 || billing[item].length < 8) {
              return true;
            }
          } else if (item === "email") {
            if (!(billing[item].includes("@") || billing[item].includes("."))) {
              return true;
            }
          }
        })
        .includes(true)
    ) {
      setLoading(true);
      const year = new Date().getFullYear();
      const parsedData = {
        account_id: routerData.account_id,
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
        lead_id: routerData.leadId,
        fullname: billing.name,
        contact_no: billing.phone,
        email: billing.email,
        address: billing.address,
        zip: billing.zip,
        city: billing.city,
        state: billing.state,
        country: billing.country,
        save_card: saveCard,
      };
      const apidata = await generalPostFunction("pay", parsedData);
      if (apidata.status) {
        setLoading(false);
        dispatch({
          type: "SET_INVOICE",
          invoiceLink: apidata.data.invoice_url,
        });
        dispatch({
          type: "SET_THANKYOUMESSAGE",
          thankYouMessage: `Your Payment is successfull with transaction id ${apidata.data.transaction_id} you will get an email soon. You can download invoice now.`,
        });
        router.push({
          pathname: "/thank-you",
        });
      } else {
        setLoading(false);
        if(apidata.error){
          toast.error(apidata.error);
        }else{
          const errorMessage = Object.keys(apidata.errors);
          toast.error(apidata.errors[errorMessage[0]][0]);
        }
        
      }
    }
  }

  return (
    <div className="main">
      <div className="container py-4">
        <div className="flight_confirmdetails_wrapper row">
          <div className="col-xl-4">
            <div className="cardDetailsWrapper">
              <div className="col-12 border-start border-4 border-success mb-3 px-3">
                <h5>Billing Address</h5>
              </div>
              <div className="row">
                <div className="form-group mb-1">
                  <label className="review-label">
                    Full Name
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="Name"
                    value={billing.name}
                    name="name"
                    className={`form-control travellerdetails ${
                      errorBilling.name ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    type="text"
                  />
                </div>
                <div className="form-group mb-1">
                  <label className="review-label">
                    Phone
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="US"
                    maxLength={17}
                    placeholder="Enter Your Number"
                    name="contactNumber"
                    className={`form-control travellerdetails ${
                      errorBilling.phone ? "error-border" : ""
                    }`}
                    value={billing.phone}
                    onChange={(value) => {
                      setBilling((prevState) => ({
                        ...prevState,
                        phone: String(value),
                      }));
                      setErrorBilling((prevState) => ({
                        ...prevState,
                        phone: false,
                      }));
                    }}
                  />
                  {/* <input
                    placeholder="Phone number"
                    name="phone"
                    className={`form-control travellerdetails ${
                      errorBilling.phone ? "error-border" : ""
                    }`}
                    onChange={(e)=>billingChnage(e)}
                    value={billing.phone}
                    type="number"
                  /> */}
                </div>
                <div className="form-group mb-1">
                  <label className="review-label">
                    Email
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="Email Address"
                    name="email"
                    className={`form-control travellerdetails ${
                      errorBilling.email ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.email}
                    type="email"
                  />
                </div>
                <div className="form-group mb-1">
                  <label className="review-label">
                    Address
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="Full address"
                    name="address"
                    className={`form-control travellerdetails ${
                      errorBilling.address ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.address}
                    type="text"
                  />
                </div>
                <div className="form-group col-xl-6 mb-1">
                  <label className="review-label">
                    City
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="City"
                    name="city"
                    className={`form-control travellerdetails ${
                      errorBilling.city ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.city}
                    type="text"
                  />
                </div>
                <div className="form-group col-xl-6 mb-1">
                  <label className="review-label">
                    State
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="State"
                    name="state"
                    className={`form-control travellerdetails ${
                      errorBilling.state ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.state}
                    type="text"
                  />
                </div>
                <div className="form-group mb-1">
                  <label className="review-label">
                    Zip Code
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="Zip Code"
                    name="zip"
                    className={`form-control travellerdetails ${
                      errorBilling.zip ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.zip}
                    type="text"
                  />
                </div>
                <div className="form-group mb-1">
                  <label className="review-label">
                    Country
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    placeholder="Country"
                    name="country"
                    className={`form-control travellerdetails ${
                      errorBilling.country ? "error-border" : ""
                    }`}
                    onChange={(e) => billingChnage(e)}
                    value={billing.country}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 row gx-3">
            <div className="col-xl-7">
              <div className="cardDetailsWrapper">
                <div className="col-12 border-start border-4 border-success mb-3 px-3">
                  <h5>Credit Card Information</h5>
                </div>
                <div className="mb-4">
                  <Cards
                    number={cardDetails.cardNumber}
                    expiry={cardDetails.expiryDate}
                    cvc={cardDetails.cvv}
                    name={cardDetails.cardName}
                    focused={cardDetails.focused}
                  />
                </div>
                <div className="card-details position-relative">
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
                            value={cardDetails.cardName}
                            onFocus={() =>
                              setCardDetails((prevData) => ({
                                ...prevData,
                                focused: "",
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 mt-1 mb-3">
                        <div className="form-group">
                          <label className="review-label">
                            Card Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div className="tvlrFormField make_relative card-reader position-relative">
                            <span
                              id="CreditCardImg"
                              className="CreditCardImg"
                            />
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
                      <div className="col-xl-6 mt-1 mb-3">
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
                      <div className="col-xl-6 mt-1 mb-3">
                        <div className="form-group">
                          <label className="review-label">
                            CVV Code
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              placeholder="cvv"
                              className={`form-control travellerdetails payment_exp_date ${
                                errorCard.cvv ? "error-border" : ""
                              }`}
                              name="cvv"
                              type="number"
                              onChange={(e) => {
                                handleChange(e);
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
                            ></small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="checkbox"
                          checked={saveCard}
                          onChange={(e) => setSaveCard(e.target.checked)}
                        />
                        <label class="formLabel ms-2">
                          Save this card for future use
                        </label>
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
            <div className="col-xl-5 account_detailssection py-0">
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
