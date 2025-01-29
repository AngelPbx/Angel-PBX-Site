/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  generalGetFunction,
  generalPostFunction,
} from "@/components/GlobalFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import CircularLoader from "@/components/CircularLoader";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function AccountDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const routerData = router.query;
  const [timeZone, setTimeZone] = useState();
  const [packages, setPackages] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      if (routerData.id === null || routerData.id === undefined) {
        router.back();
      } else {
        async function getData() {
          const apitData = await generalGetFunction("timezones");
          const packageData = await generalGetFunction(
            `free/package/details/${routerData.id}`
          );
          if (packageData.status) {
            setPackages(packageData.data);
          }
          if (apitData.status) {
            setTimeZone(apitData.data);
          } else {
          }
        }
        getData();
      }
    }
  }, [router, routerData]);
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
    street: "",
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
    street: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const regex = /^[a-zA-Z0-9- ]*$/;
    const emailRegex = /^[a-zA-Z0-9@.-]*$/;

    if (name === "email" || name === "confirmEmail") {
      if (emailRegex.test(value) && value !== " ") {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));

        setErrorFormData((prevState) => ({
          ...prevState,
          [name]: false,
        }));
      }
    } else if (name === "zipCode") {
      // Check if the new value is shorter or longer
      if (value.length <= 8) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value, // directly assign value
        }));

        setErrorFormData((prevState) => ({
          ...prevState,
          [name]: false, // handle any form validation here
        }));
      }
    }
    else {
      if (regex.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));

        setErrorFormData((prevState) => ({
          ...prevState,
          [name]: false,
        }));
      }
    }
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
      } else if (formData[key] === "") {
        setErrorFormData((prevState) => ({
          ...prevState,
          [key]: true,
        }));
      } else {
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

    if (
      formData.contactNumber.length > 15 ||
      formData.contactNumber.length < 8
    ) {
      setErrorFormData((prevData) => ({
        ...prevData,
        contactNumber: true,
      }));
    }
    if (formData.altNumber.length > 15 || formData.altNumber.length < 8) {
      setErrorFormData((prevData) => ({
        ...prevData,
        altNumber: true,
      }));
    }
    const isAnyEmpty = Object.values(formData).some((value) => value === "");
    if (
      isAnyEmpty ||
      !formData.email.includes("@") ||
      !formData.email.includes(".") ||
      formData.email !== formData.confirmEmail ||
      formData.contactNumber.length > 15 ||
      formData.contactNumber.length < 8 ||
      formData.altNumber.length > 15 ||
      formData.altNumber.length < 8
    ) {
      console.log("Please fill in all fields before submitting.");
    } else {
      setLoading(true);
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
        status: "inactive",
        state: formData.state,
      };
      const apiData = await generalPostFunction("lead-store", parsedData);
      if (apiData.status) {
        setLoading(false);
        dispatch({
          type: "SET_THANKYOUMESSAGE",
          thankYouMessage:
            "Your Response is recorder, you will get a mail for document Upload ",
        });
        router.push({
          pathname: `/payment`,
          query: { id: routerData.id, leadId: apiData.data.id },
        });
        setFormData((prevData) => ({
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
        }));
      } else {
        setLoading(false);
        const errorMessage = Object.keys(apiData.errors);
        toast.error(apiData.errors[errorMessage[0]][0]);
      }
    }
  }

  useEffect(() => {
    console.log("This is contact length", formData.contactNumber);
  }, [formData.contactNumber]);

  return (
    <div className="main">
      <section className="account_detailssection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeState === "account" ? "active" : ""
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
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeState === "verification" ? "active" : ""
                      }`}
                    id="otp-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#otp"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => setActiveState("verification")}
                  >
                    Verification{" "}
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-xl-8 col-md-8 col-12">
              <div className="tabs_box">
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${activeState === "account" ? "show active" : ""
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
                              value={formData.companyName}
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
                              value={formData.adminName}
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
                              value={formData.email}
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
                              value={formData.confirmEmail}
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
                            <PhoneInput
                              defaultCountry="US"
                              maxLength={17}
                              placeholder="Enter Your Number"
                              name="contactNumber"
                              value={formData.contactNumber}
                              onChange={(value) => {
                                setFormData((prevState) => ({
                                  ...prevState,
                                  contactNumber: String(value),
                                }));
                                setErrorFormData((prevState) => ({
                                  ...prevState,
                                  contactNumber: false,
                                }))
                              }}
                            />
                            {/* <input
                              value={formData.contactNumber}
                              onChange={handleChange}
                              name="contactNumber"
                              max="999999"
                              type="number"
                              placeholder="Enter Your Number"
                            /> */}
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
                            <PhoneInput
                              defaultCountry="US"
                              maxLength={17}
                              placeholder="Enter Your Number"
                              name="contactNumber"
                              value={formData.altNumber}
                              onChange={(value) => {
                                setFormData((prevState) => ({
                                  ...prevState,
                                  altNumber: String(value),
                                }));
                                setErrorFormData((prevState) => ({
                                  ...prevState,
                                  altNumber: false,
                                }))
                              }}
                            />
                            {/* <input
                              value={formData.altNumber}
                              type="number"
                              onChange={handleChange}
                              name="altNumber"
                              placeholder="Enter Alternate Number"
                            /> */}
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
                              {timeZone &&
                                timeZone.map((item, key) => {
                                  return (
                                    <option key={key} value={item.id}>
                                      {item.name}
                                    </option>
                                  );
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
                              value={formData.unit}
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
                              value={formData.building}
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
                              value={formData.street}
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
                              value={formData.city}
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
                              value={formData.zipCode}
                              onChange={handleChange}
                              name="zipCode"
                              type="number"
                              placeholder="Enter Zip Code"
                              maxLength={6}
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
                              value={formData.state}
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
                              value={formData.country}
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
                    className={`tab-pane fade ${activeState === "verification" ? "show active" : ""
                      }`}
                    id="otp"
                    role="tabpanel"
                    aria-labelledby="otp-tab"
                  >
                    <section className="otp-wrapper">
                      <div className="otp-box">
                        <svg width="250" height="200" viewBox="0 0 292 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_45)">
                            <path d="M152.106 208C201.536 208 241.606 167.93 241.606 118.5C241.606 69.0706 201.536 29 152.106 29C102.676 29 62.6058 69.0706 62.6058 118.5C62.6058 167.93 102.676 208 152.106 208Z" fill="#C5FFFF" />
                            <path d="M117.144 64.4241C113.81 64.4241 111.108 67.1261 111.108 70.46V167.057C111.108 170.391 113.81 173.093 117.144 173.093H186.572C189.906 173.093 192.608 170.391 192.608 167.057V92.382L163.507 64.4241H117.144Z" fill="#91E4FF" />
                            <path d="M192.608 92.382H169.544C166.21 92.382 163.508 89.68 163.508 86.3461V64.4241L192.608 92.382Z" fill="#0CB4EA" />
                            <path d="M162.304 131.646C162.304 135.494 159.185 138.613 155.339 138.613H104.483C100.635 138.613 97.5186 135.494 97.5186 131.646V110.363C97.5186 106.515 100.635 103.397 104.483 103.397H155.339C159.185 103.397 162.304 106.515 162.304 110.363V131.646Z" fill="#0CB4EA" />
                            <path d="M117.094 114.409C118.563 114.409 119.825 114.707 120.876 115.302C121.93 115.897 122.728 116.745 123.267 117.843C123.807 118.941 124.079 120.23 124.079 121.712C124.079 122.808 123.932 123.803 123.635 124.697C123.338 125.592 122.894 126.369 122.302 127.025C121.71 127.681 120.981 128.184 120.119 128.532C119.257 128.879 118.266 129.053 117.153 129.053C116.044 129.053 115.054 128.875 114.178 128.518C113.302 128.16 112.571 127.657 111.985 127.005C111.398 126.354 110.956 125.572 110.656 124.658C110.358 123.744 110.208 122.755 110.208 121.692C110.208 120.604 110.364 119.604 110.676 118.697C110.99 117.788 111.442 117.017 112.034 116.378C112.627 115.739 113.349 115.253 114.198 114.914C115.047 114.574 116.012 114.409 117.094 114.409ZM121.17 121.692C121.17 120.655 121.003 119.756 120.669 118.997C120.334 118.238 119.856 117.663 119.233 117.273C118.612 116.883 117.899 116.688 117.093 116.688C116.521 116.688 115.991 116.795 115.504 117.012C115.017 117.228 114.599 117.542 114.247 117.954C113.897 118.367 113.621 118.893 113.416 119.534C113.214 120.176 113.113 120.895 113.113 121.694C113.113 122.499 113.214 123.226 113.416 123.877C113.621 124.527 113.907 125.067 114.277 125.495C114.647 125.923 115.073 126.244 115.552 126.456C116.031 126.668 116.558 126.775 117.131 126.775C117.866 126.775 118.54 126.592 119.154 126.224C119.77 125.857 120.259 125.29 120.623 124.524C120.988 123.757 121.17 122.813 121.17 121.692Z" fill="white" />
                            <path d="M134.976 117.018H131.846V127.306C131.846 127.898 131.713 128.338 131.45 128.625C131.187 128.912 130.844 129.054 130.425 129.054C130 129.054 129.654 128.909 129.388 128.619C129.121 128.33 128.987 127.892 128.987 127.305V117.017H125.856C125.366 117.017 125.003 116.909 124.765 116.693C124.528 116.477 124.408 116.192 124.408 115.838C124.408 115.47 124.532 115.181 124.779 114.969C125.028 114.757 125.387 114.649 125.858 114.649H134.977C135.473 114.649 135.842 114.76 136.082 114.977C136.326 115.196 136.446 115.483 136.446 115.836C136.446 116.189 136.323 116.475 136.078 116.691C135.834 116.907 135.466 117.018 134.976 117.018Z" fill="white" />
                            <path d="M143.642 123.297H141.015V127.306C141.015 127.879 140.879 128.313 140.609 128.61C140.339 128.907 139.997 129.054 139.584 129.054C139.152 129.054 138.804 128.907 138.542 128.614C138.279 128.322 138.146 127.891 138.146 127.324V116.409C138.146 115.777 138.291 115.326 138.581 115.056C138.871 114.786 139.331 114.65 139.963 114.65H143.643C144.733 114.65 145.568 114.734 146.154 114.902C146.734 115.063 147.235 115.33 147.657 115.703C148.079 116.077 148.399 116.534 148.619 117.076C148.84 117.617 148.947 118.224 148.947 118.901C148.947 120.344 148.503 121.437 147.615 122.182C146.726 122.926 145.4 123.297 143.642 123.297ZM142.945 116.804H141.014V121.133H142.945C143.622 121.133 144.188 121.062 144.64 120.921C145.095 120.78 145.44 120.548 145.678 120.226C145.917 119.904 146.036 119.483 146.036 118.959C146.036 118.335 145.853 117.826 145.485 117.433C145.074 117.013 144.228 116.804 142.945 116.804Z" fill="white" />
                            <rect x="233.582" y="79" width="10" height="10" rx="1" transform="rotate(27.2727 233.582 79)" fill="#91A3FF" />
                            <circle cx="74" cy="139" r="5" fill="#FF91B9" />
                            <circle cx="79" cy="43" r="5" fill="#91E5FF" />
                            <circle cx="188" cy="203" r="5" fill="#FF9191" />
                          </g>
                          <circle cx="220" cy="15" r="5" fill="#FFC691" />
                          <circle cx="119.606" cy="5" r="5" fill="#91FFAF" />
                          <rect x="250.606" y="163" width="10" height="10" rx="1" fill="#E991FF" />
                          <rect x="274" y="47.0925" width="10" height="10" rx="1" transform="rotate(-24.1576 274 47.0925)" fill="#FF9191" />
                          <rect y="68.5666" width="10" height="10" rx="1" transform="rotate(-27.1716 0 68.5666)" fill="#91A3FF" />
                          <path d="M33.0121 175.265L40.7499 180.821L32.0689 184.744L33.0121 175.265Z" fill="#FF9191" />
                          <path d="M15.077 128.971L16.567 138.38L7.67356 134.966L15.077 128.971Z" fill="#FD91FF" />
                          <path d="M286.447 120.204L287.505 129.672L278.777 125.854L286.447 120.204Z" fill="#FF91BF" />
                          <defs>
                            <clipPath id="clip0_1_45">
                              <rect width="179" height="179" fill="white" transform="translate(62.6058 29)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div class="title">Verification Code</div>
                        <p>We have sent a verification code
                          to your mobile number - (XXX) XXX XX91</p>
                        <div id='inputs'>
                          <input type='text' />
                        </div>
                        <button>Submit</button>
                      </div>
                    </section>
                  </div>
                  <div
                    className={`tab-pane fade ${activeState === "payment" ? "show active" : ""
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
                    className={`tab-pane fade ${activeState === "review" ? "show active" : ""
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
                  <Link href="/thankyou" className="serviceBtn w-100 py-3">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default AccountDetails;
