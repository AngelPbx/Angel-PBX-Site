/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { generalGetFunction, generalPostFunction } from "@/components/GlobalFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import CircularLoader from "@/components/CircularLoader";

function AccountDetails() {
  const dispatch = useDispatch()
  const router = useRouter();
  const routerData = router.query;
  const [timeZone,setTimeZone]=useState()
  const [packages,setPackages]=useState()
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    if(router.isReady){
    if (routerData.id === null || routerData.id === undefined ) {
      router.back();
    }else{
      async function getData (){
        const apitData = await generalGetFunction("timezones")
        const packageData = await generalGetFunction(`free/package/details/${routerData.id}`)
        if(packageData.status){
          setPackages(packageData.data)
        }
        if(apitData.status){
          console.log("This is apiData",apitData);
          setTimeZone(apitData.data)
        }else{
        }
      }
      getData()
    }
  }
    
  }, [router, routerData]);
  console.log("This is package",packages);

  const [activeState, setActiveState] = useState("account");
  const [formData, setFormData] = useState({
    companyName: "",
    adminName: "",
    email: "",
    confirmEmail: "",
    contactNumber: "",
    altNumber: "",
    timeZone: "",
    unit: "",
    building: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    street:"",
  });

  const [errorFormData, setErrorFormData] = useState({
    companyName: false,
    adminName: false,
    email: false,
    confirmEmail: false,
    contactNumber: false,
    altNumber: false,
    timeZone: false,
    unit: false,
    building: false,
    city: false,
    zipCode: false,
    state: false,
    country: false,
    street:"",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrorFormData((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  }

  async function handleSubmit() {
    Object.keys(formData).forEach((key) => {
      if (key === "email") {
        if (formData.email.includes("@") && formData.email.includes(".")) {
          setErrorFormData((prevState) => ({
            ...prevState,
            [key]: false,
          }));
        } else {
          setErrorFormData((prevState) => ({
            ...prevState,
            [key]: true,
          }));
        }
      }else if (formData[key] === "") {
        setErrorFormData((prevState) => ({
          ...prevState,
          [key]: true,
        }));
      }else {
        setErrorFormData((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
    if (formData.email !== formData.confirmEmail) {
      setErrorFormData((prevData) => ({
        ...prevData,
        confirmEmail: true,
      }));
    } else {
      setErrorFormData((prevData) => ({
        ...prevData,
        confirmEmail: false,
      }));
    }

    if(formData.contactNumber.length>15 || formData.altNumber.length>15){
      toast.error("Please enter a valid phone number")
    }
    const isAnyEmpty = Object.values(formData).some((value) => value === "");
    if (
      isAnyEmpty ||
      !formData.email.includes("@") ||
      !formData.email.includes(".") ||
      formData.email !== formData.confirmEmail ||
      formData.contactNumber.length>15 || formData.altNumber.length>15
    ) {
      console.log("Please fill in all fields before submitting.");
    } else {
      setLoading(true)
      const parsedData = {
        company_name: formData.companyName,
        admin_name: formData.adminName,
        timezone_id: "2",
        email: formData.email,
        contact_no: formData.contactNumber,
        alternate_contact_no: formData.altNumber,
        unit: formData.unit,
        street: formData.street, 
        city: formData.city,
        zip: formData.zipCode,
        country: formData.country,
        package_id: routerData.id,
        building: formData.building,
        status:"inactive",
        state:formData.state
      };
      const apiData = await generalPostFunction("account-store",parsedData)
      if(apiData.status){
        setLoading(false)
        dispatch({
          type:"SET_THANKYOUMESSAGE",
          thankYouMessage:"Your Response is recorder, you will get a mail for document Upload "
        })
        router.push({pathname:"/thank-you"})
        setFormData(prevData=>({
          ...prevData,
          companyName: "",
          adminName: "",
          email: "",
          confirmEmail: "",
          contactNumber: "",
          altNumber: "",
          timeZone: "",
          unit: "",
          building: "",
          city: "",
          zipCode: "",
          state: "",
          country: "",
        }))
      }else{
        setLoading(false)
        toast.error(apiData.message)
      }
    }
  }

  return (
    <div className="main">
      <section className="account_detailssection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeState === "account" ? "active" : ""
                    }`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => setActiveState("account")}
                  >
                    Account{" "}
                  </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeState === "payment" ? "active" : ""
                    }`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => setActiveState("payment")}
                  >
                    Payment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeState === "review" ? "active" : ""
                    }`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => setActiveState("review")}
                  >
                    Review
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="col-xl-8 col-md-8 col-12">
              <div className="tabs_box">
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${
                      activeState === "account" ? "show active" : ""
                    }`}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="account_box">
                      <form action="#">
                        <div className="row">
                          <h5> Account Details </h5>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Company Name</label>
                            {errorFormData.companyName ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="companyName"
                              type="text"
                              placeholder="Enter Company Name"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Admin Name</label>
                            {errorFormData.adminName ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="adminName"
                              type="text"
                              placeholder="Enter Admin Name"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Email</label>
                            {errorFormData.email ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="email"
                              type="email"
                              placeholder="Enter Admin Email"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Confirm Email</label>
                            {errorFormData.confirmEmail ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Email not matched
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="confirmEmail"
                              type="email"
                              placeholder="Enter Email Again"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Contact Number</label>
                            {errorFormData.contactNumber ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="contactNumber"
                              type="number"
                              placeholder="Enter Your Number"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Alternate Contact Number</label>
                            {errorFormData.altNumber ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              type="number"
                              onChange={handleChange}
                              name="altNumber"
                              placeholder="Enter Alternate Number"
                            />
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Timezone</label>
                            {errorFormData.timeZone ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <select onChange={handleChange} name="timeZone">
                              <option value="">Select Timezone</option>
                             {timeZone && timeZone.map((item,key)=>{
                              return(
                                <option key={key} value={item.id}>{item.name}</option>
                              )
                             })}
                            </select>
                          </div>
                          <div className="col-xl-6 col-md-6 col-12">
                            <label htmlFor="#">Block/Unit/Place</label>
                            {errorFormData.unit ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="unit"
                              type="text"
                              placeholder="Enter place name"
                            />
                          </div>
                          <div className="col-xl-3 col-md-6 col-12">
                            <label htmlFor="#">Building</label>
                            {errorFormData.building ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="building"
                              type="text"
                              placeholder="Enter Building"
                            />
                          </div>

                          <div className="col-xl-3 col-md-6 col-12">
                            <label htmlFor="#">Street</label>
                            {errorFormData.street ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="street"
                              type="text"
                              placeholder="Enter Street"
                            />
                          </div>

                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#">City</label>
                            {errorFormData.city ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="city"
                              type="text"
                              placeholder="Enter Your City"
                            />
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#">Zip Code</label>
                            {errorFormData.zipCode ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="zipCode"
                              type="number"
                              placeholder="Enter Zip Code"
                            />
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#">State</label>
                            {errorFormData.state ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="state"
                              placeholder="Enter State"
                            />
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#">Country</label>
                            {errorFormData.country ? (
                              <label className="text-warning float-end mt-1">
                                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                                Field Missing
                              </label>
                            ) : (
                              ""
                            )}
                            <input
                              onChange={handleChange}
                              name="country"
                              type="text"
                              placeholder="Enter Country"
                            />
                          </div>
                          <div className="col-6 mt-auto">
                            <a
                              // setActiveState("payment");
                              onClick={() => {
                                window.scrollTo(0, 0);
                                handleSubmit();
                              }}
                              className="serviceBtn ms-auto mb-2"
                            >
                              Continue to payment&nbsp;&nbsp;
                              <i className="fa-solid fa-location-arrow" />{" "}
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeState === "payment" ? "show active" : ""
                    }`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="account_box">
                      <form action="#">
                        <div className="row">
                          <h5>Payment information </h5>
                          <div className="col-xl-12 col-md-12 col-12">
                            <label htmlFor="#"> Card Holder Name </label>
                            <input
                              type="text"
                              placeholder="Enter Card Holder Name"
                            />
                          </div>
                          <div className="col-xl-4 col-md-6 col-12">
                            <label htmlFor="#"> Card Number </label>
                            <input
                              type="number"
                              placeholder="Enter Card Number"
                            />
                          </div>
                          <div className="d-flex flex-wrap col-xl-4">
                            <div className="col-12">
                              <label htmlFor="#"> Expiration Date </label>
                            </div>
                            <div className="col-6 pe-2">
                              <select>
                                <option value="">- Select -</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                              </select>
                            </div>
                            <div className="col-6 ps-2">
                              <select>
                                <option value="">- Select -</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-12">
                            <label htmlFor="#"> CVV </label>
                            <input
                              type="text"
                              placeholder="Enter Card Number"
                            />
                          </div>
                          <div className="col-xl-12 col-md-12 col-12">
                            <label htmlFor="#"> Address </label>
                            <input
                              type="text"
                              placeholder="Enter Your Address"
                            />
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#"> City </label>
                            <input type="text" placeholder="Enter Your City" />
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#"> State </label>
                            <select>
                              <option value="">- Select One -</option>
                              <option value="Alabama">Alabama</option>
                              <option value="Alaska">Alaska</option>
                            </select>
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#"> Country </label>
                            <select>
                              <option value="">- Select One -</option>
                              <option value="AFG">Afghanistan</option>
                              <option value="ALA">Åland Islands</option>
                              <option value="ALB">Albania</option>
                            </select>
                          </div>
                          <div className="col-xl-3 col-md-3 col-12">
                            <label htmlFor="#"> Zip Code </label>
                            <input
                              type="number"
                              placeholder="Enter Your Zip Code"
                            />
                          </div>
                          <div className="col-12">
                            <div className="content_wraper">
                              <p>
                                You authorize Angel PBX, pursuant to the Terms
                                of Service, to automatically charge the above
                                credit card each month for the plan fee and any
                                applicable taxes, fees and charges. Your billing
                                period starts today. Services and billing will
                                continue until canceled.
                              </p>
                              <div className="payment_flexbox">
                                <input type="checkbox" id="showDataCheckbox" />
                                <label htmlFor="vehicle1">
                                  {" "}
                                  By checking this box, you agree that you are
                                  entering into a 1-year contract for which
                                  Angel PBX Business will charge you $43.04 per
                                  month, plus taxes, fees and usage charges. If
                                  you cancel before the end of your contract
                                  period on May 9, 2025, you will be responsible
                                  for an early termination fee.
                                </label>
                              </div>
                              <div className="payment_flexbox">
                                <input type="checkbox" id="showDataCheckbox" />
                                <label htmlFor="vehicle1">
                                  I have read and accept the Emergency Services
                                  Policy and Acknowledgement.{" "}
                                  <b> Please scroll above before accepting.</b>
                                </label>
                              </div>
                              <div className="payment_flexbox">
                                <input type="checkbox" id="showDataCheckbox" />
                                <label htmlFor="vehicle1">
                                  I have read and accept the{" "}
                                  <Link href="/"> Terms of Service.</Link>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 ms-auto">
                            <a
                              onClick={() => {
                                setActiveState("review");
                                window.scrollTo(0, 0);
                              }}
                              className="serviceBtn ms-auto me-0"
                            >
                              Confirm&nbsp;&nbsp;
                              <i className="fa-solid fa-location-arrow" />{" "}
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeState === "review" ? "show active" : ""
                    }`}
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="account_box">
                      <div className="contactDetails">
                        <div>
                          <h5>Billing details</h5>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <label>First Name:</label>
                            <label className="fw-semibold">Zechariah</label>
                          </div>
                          <div className="col-6">
                            <label>Last Name:</label>
                            <label className="fw-semibold">Bins</label>
                          </div>
                          <div className="col-6">
                            <label>Email :</label>
                            <label className="fw-semibold">
                              zechariah.bins@mail.com
                            </label>
                          </div>
                          <div className="col-6">
                            <label>Phone Number:</label>
                            <label className="fw-semibold">
                              {" "}
                              (408) 245-8030
                            </label>
                          </div>
                          <div className="col-12">
                            <label>
                              Address:{" "}
                              <span className="fw-semibold">
                                877 W Fremont Ave #1, Sunnyvale, California,
                                94087
                              </span>
                            </label>
                          </div>
                          <div className="col-3">
                            <label>State:</label>
                            <label className="fw-semibold">California</label>
                          </div>
                          <div className="col-3">
                            <label>City:</label>
                            <label className="fw-semibold">Sunnyvale</label>
                          </div>
                          <div className="col-3">
                            <label>Zip Code:</label>
                            <label className="fw-semibold">94087</label>
                          </div>
                          <div className="col-3">
                            <label>Country:</label>
                            <label className="fw-semibold">USA</label>
                          </div>
                        </div>
                      </div>
                      <div className="adressDetails">
                        <div>
                          <h5>Account Details</h5>
                        </div>
                        <div className="row">
                          <div className="col-9">
                            <label>Company Name:</label>
                            <label className="fw-semibold">
                              Webvio Technologies Private Limited
                            </label>
                          </div>
                          <div className="col-3">
                            <label>Unit:</label>
                            <label className="fw-semibold">1-9</label>
                          </div>
                          <div className="col-6">
                            <label>Admin Name:</label>
                            <label className="fw-semibold">Testadmin</label>
                          </div>
                          <div className="col-6">
                            <label>Admin Email:</label>
                            <label className="fw-semibold">
                              testadmin@email.com
                            </label>
                          </div>
                          <div className="col-6">
                            <label>Contact Number:</label>
                            <label className="fw-semibold">
                              {" "}
                              (408) 245-8030
                            </label>
                          </div>
                          <div className="col-6">
                            <label>Timezone:</label>
                            <label className="fw-semibold">
                              Pacific Standard Time
                            </label>
                          </div>
                          <div className="col-3">
                            <label>State:</label>
                            <label className="fw-semibold">California</label>
                          </div>
                          <div className="col-3">
                            <label>City:</label>
                            <label className="fw-semibold">Sunnyvale</label>
                          </div>
                          <div className="col-3">
                            <label>Zip Code:</label>
                            <label className="fw-semibold">94087</label>
                          </div>
                          <div className="col-3">
                            <label>Country:</label>
                            <label className="fw-semibold">USA</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-12">
              <div className="priceBreakup">
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
                        <td>{((packages?.regular_price-packages?.offer_price)*100/packages?.regular_price).toFixed(2)}% Off</td>
                        <td>-${packages?.regular_price-packages?.offer_price}</td>
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
                  <p>
                  **{packages?.description}
                  </p>
                </div>
                <div id="checkout" style={{ display: "none" }}>
                  <Link href="/thankyou" className="serviceBtn w-100 py-3">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading?<CircularLoader />:""}
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

export default AccountDetails;
