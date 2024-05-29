/* eslint-disable @next/next/no-img-element */
import CircularLoader from "@/components/CircularLoader";
import { authGetFunction } from "@/components/GlobalFunction";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const token = useSelector((state) => state.token);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupNumber, setPopupNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [accountDetails, setAccountDetails] = useState();
  useEffect(() => {
    if (token === "") {
      const lclData = localStorage.getItem("token");
      if (lclData) {
        async function getData() {
          const apiData = await authGetFunction("auth/account", lclData);
          if (apiData.status) {
            setLoading(false);
            setAccountDetails(apiData.data);
          } else {
            setLoading(false);
          }
        }
        getData();
      } else {
        router.back();
      }
    } else {
      async function getData() {
        const apiData = await authGetFunction("auth/account", token);
        if (apiData.status) {
          setLoading(false);
          setAccountDetails(apiData.data);
        } else {
          setLoading(false);
          console.log("This is inside false", apiData);
        }
      }
      getData();
    }

    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router, token]);
  const downloadImage = async (imageUrl, fileName) => {
    if (imageUrl) {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading the image:", error);
      }
    }
  };
  return (
    <>
      <style>
        {`
            .formItem{
              border: none;
              color: #000;
              font-weight: 500;
              padding: 0;
          }
          .qLinkContent .imgWrapper{
            width: 50px;
            height: 50px;
            border: 1px solid #bbb;
            overflow: hidden;
            border-radius: 50%;
          }
          .qLinkContent .imgWrapper img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .qLinkContent h5{
            padding-bottom: 0;
          }
          .clearButton{
            color: #fff;
          }
          .clearButton a{
            color: #fff;
            text-decoration: none;
          }
          .profileView .wrapper{
            padding: 10px 15px 0 ;
          }
          .profileView .wrapper ul{
            padding: 0;
            list-style: none;
          }
    
          .profileView .wrapper ul li{
            margin-bottom: 7px;
          }
    
          .wrapper ul label{
            font-size: 14px;
            color: #5e5e5e;
            font-weight: 500;
            font-family: Roboto;
          }
    
          .wrapper ul .details{
            float: inline-end;
            color: #000;
            font-size: 14px;
            font-weight: 600;
            font-family: Roboto;
          }
    
          .approvalButton{
            position:absolute;
            top: 0;
            right: 0;
          }
          .approvalButton button {
            border-radius: 0;
            border-bottom-left-radius: 7px;
            border-top-right-radius: 7px;
          }

          .qLinkContent .iconWrapper{
            height: 35px;
            width: 35px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
            cursor: pointer;
          }
    
          .qLinkContent .iconWrapper:hover{
            background-color: #dbdbdb;
          }
    
          .qLinkContent .iconWrapper i{
            font-size: 20px;
          }
    
          .buttonPopup{
            width: 120px;
            border-radius: 10px;
            background-color: #303030;
            padding: 10px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            position: absolute;
            right: 10px;
            bottom: -45px;
          }
          .pricing_section .pricing_box{
            padding: 10px;
            background-color: #fff;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
          .headerTop{
            border-left: 4px solid var(--ui-accent);
            margin-left: -10px;
            padding: 5px 10px;
            font-weight: 500;
          }
        `}
      </style>

      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="profileView mt-3">
                <div className="profileDetailsHolder">
                  <div className="baseDetails row">
                    <div className="accountProgress">
                      <div
                        className="progressbar"
                        style={{
                          width: `${
                            accountDetails?.payment_url === null
                              ? "100%"
                              : accountDetails?.company_status === "new"
                              ? "25%"
                              : accountDetails?.company_status === "applied"
                              ? "50%"
                              : accountDetails?.company_status === "approved"
                              ? "100%"
                              : "0%"
                          }`,
                        }}
                      />
                      <div className="step success">
                        <i className="fa-solid fa-thumbs-up"></i>
                        <label>Accounts</label>
                      </div>
                      <div
                        className={`step ${
                          accountDetails?.company_status === "applied" ||
                          accountDetails?.company_status === "approved"
                            ? "success"
                            : ""
                        }`}
                      >
                        <i className="fa-sharp fa-solid fa-file"></i>
                        <label>Documents</label>
                      </div>
                      <div
                        className={`step ${
                          accountDetails?.payment_url === null ? "success" : ""
                        }`}
                      >
                        <i className="fa-sharp fa-solid fa-credit-card"></i>
                        <label>Payment</label>
                      </div>
                      <div
                        onClick={() =>
                          downloadImage(
                            accountDetails?.payments?.[0]?.invoice_url,
                            accountDetails?.company_name + "invoice"
                          )
                        }
                        style={{ cursor: "pointer" }}
                        className={`step ${
                          accountDetails?.payment_url === null ? "success" : ""
                        }`}
                      >
                        <i className="fa-sharp fa-solid fa-file-invoice"></i>
                        <label>Download Invoice</label>
                      </div>
                    </div>
                    {accountDetails?.payment_url === null ? (
                      ""
                    ) : (
                      <div style={{ width: "max-content" }}>
                        <div style={{ width: "100%", marginRight: 20 }}>
                          <Link
                            className="payNow m-0"
                            href={`/payment?${
                              accountDetails?.payment_url?.split("?")[1]
                            }`}
                          >
                            Pay Now{" "}
                            <i className="fa-regular fa-arrow-right-from-bracket ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="profileView mt-2">
                <div className="profileDetailsHolder">
                  <div className="headerTop">Account Details</div>
                  <div className="row" style={{ padding: 5 }}>
                    <div className="wrapper">
                      <ul>
                        <li>
                          <label>Company Name</label>{" "}
                          <label className="details">
                            {accountDetails?.company_name}
                          </label>
                        </li>
                        <li>
                          <label>Admin Name</label>{" "}
                          <label className="details">
                            {accountDetails?.admin_name}
                          </label>
                        </li>
                        <li>
                          <label>Admin Email</label>{" "}
                          <label className="details">
                            {accountDetails?.email}
                          </label>
                        </li>
                        <li>
                          <label>Phone Number</label>{" "}
                          <label className="details">
                            {accountDetails?.contact_no}
                          </label>
                        </li>
                        <li>
                          <label>Alternate Number</label>{" "}
                          <label className="details">
                            {accountDetails?.alternate_contact_no}
                          </label>
                        </li>
                        <li>
                          <label>Timezone</label>{" "}
                          <label className="details">
                            {accountDetails?.timezone.name}
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="border mb-3"></div>
                  </div>
                  <div className="headerTop d-flex align-items-center">
                    <div className="col-5">Business Details</div>
                  </div>
                  <div className="row" style={{ padding: 5 }}>
                    <div className="wrapper">
                      <ul>
                        <li>
                          <label>Block/Unit/Place</label>{" "}
                          <label className="details">
                            {accountDetails?.unit}
                          </label>
                        </li>
                        <li>
                          <label>Building</label>{" "}
                          <label className="details">
                            {accountDetails?.building}
                          </label>
                        </li>
                        <li>
                          <label>City</label>{" "}
                          <label className="details">
                            {accountDetails?.city}
                          </label>
                        </li>
                        <li>
                          <label>Zip Code</label>{" "}
                          <label className="details">
                            {accountDetails?.zip}
                          </label>
                        </li>
                        <li>
                          <label>State</label>{" "}
                          <label className="details">
                            {accountDetails?.state}
                          </label>
                        </li>
                        <li>
                          <label>Country</label>{" "}
                          <label className="details">
                            {accountDetails?.country}
                          </label>
                        </li>
                        <li>
                          <label>Country</label>{" "}
                          <label className="details">
                            {accountDetails?.country}
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="profileView mt-2" style={{ height: "100%" }}>
                <div
                  className="profileDetailsHolder"
                  style={{ position: "sticky", top: 0 }}
                >
                  <div className="headerTop d-flex align-items-center">
                    <div className="col-5">Uploaded Documents</div>
                  </div>
                  {accountDetails?.details !== null ? (
                    <div className="qLinkContent px-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-auto ps-0">
                          <div className="imgWrapper">
                            <img
                              src={accountDetails?.details.registration_path}
                              alt="reg"
                            />
                          </div>
                        </div>
                        <div className="col-8 my-auto">
                          <p>ID Card</p>
                        </div>
                        <div className="col-auto px-0 my-auto">
                          <div
                            className="iconWrapper"
                            onClick={() => {
                              setOpenPopup((prev) => !prev);
                              setPopupNumber(1);
                            }}
                          >
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                        </div>
                        {openPopup && popupNumber === 1 ? (
                          <div className="buttonPopup" ref={wrapperRef}>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                downloadImage(
                                  accountDetails?.details.registration_path,
                                  accountDetails.company_name + "registration"
                                )
                              }
                            >
                              <div className="clearButton">
                                <i className="fa-solid fa-file-arrow-down"></i>{" "}
                                Download
                              </div>
                            </div>
                            <a
                              target="_blank"
                              href={accountDetails?.details.registration_path}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="clearButton">
                                <p target="_blank" rel="noreferrer">
                                  <i className="fa-sharp fa-solid fa-eye"></i>{" "}
                                  View
                                </p>
                              </div>
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="border mt-3 mx-auto col-10"></div>
                      </div>
                      <div className="row position-relative mt-3">
                        <div className="col-auto ps-0">
                          <div className="imgWrapper">
                            <img
                              src={accountDetails?.details.tin_path}
                              alt="reg"
                            />
                          </div>
                        </div>
                        <div className="col-8 my-auto">
                          <p>Certificate of Incorporation</p>
                        </div>
                        <div className="col-auto px-0 my-auto">
                          <div
                            className="iconWrapper"
                            onClick={() => {
                              setOpenPopup((prev) => !prev);
                              setPopupNumber(2);
                            }}
                          >
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                        </div>
                        {openPopup && popupNumber === 2 ? (
                          <div className="buttonPopup" ref={wrapperRef}>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                downloadImage(
                                  accountDetails?.details.tin_path,
                                  accountDetails.company_name + "Tin"
                                )
                              }
                            >
                              <div className="clearButton">
                                <i className="fa-solid fa-file-arrow-down"></i>{" "}
                                Download
                              </div>
                            </div>
                            <a
                              target="_blank"
                              href={accountDetails?.details.tin_path}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="clearButton">
                                <p target="_blank" rel="noreferrer">
                                  <i className="fa-sharp fa-solid fa-eye"></i>{" "}
                                  View
                                </p>
                              </div>
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="border mt-3 mx-auto col-10"></div>
                      </div>
                      <div className="row position-relative mt-3">
                        <div className="col-auto ps-0">
                          <div className="imgWrapper">
                            <img
                              src={accountDetails?.details.moa_path}
                              alt="reg"
                            />
                          </div>
                        </div>
                        <div className="col-8 my-auto">
                          <p>Registration Certificate</p>
                        </div>
                        <div className="col-auto px-0 my-auto">
                          <div
                            className="iconWrapper"
                            onClick={() => {
                              setOpenPopup((prev) => !prev);
                              setPopupNumber(3);
                            }}
                          >
                            <i className="fa-solid fa-ellipsis"></i>
                          </div>
                        </div>
                        {openPopup && popupNumber === 3 ? (
                          <div className="buttonPopup" ref={wrapperRef}>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                downloadImage(
                                  accountDetails?.details.moa_path,
                                  accountDetails.company_name + "Moa"
                                )
                              }
                            >
                              <div className="clearButton">
                                <i className="fa-solid fa-file-arrow-down"></i>{" "}
                                Download
                              </div>
                            </div>
                            <a
                              target="_blank"
                              href={accountDetails?.details.moa_path}
                              style={{ cursor: "pointer" }}
                            >
                              <div className="clearButton">
                                <p target="_blank" rel="noreferrer">
                                  <i className="fa-sharp fa-solid fa-eye"></i>{" "}
                                  View
                                </p>
                              </div>
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="qLinkContent">
                      <h5 className="mb-0 danger">Documents Not Uploaded</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-4 pricing_section" style={{ padding: 10 }}>
              <div className="pricing_box mt-2">
                <div className="headerTop">
                  <div className="col-12 text-start">Selected Package</div>
                </div>
                <h3>{accountDetails?.package.name}</h3>
                <p>{accountDetails?.package.description} </p>
                <h5>
                  <del>${accountDetails?.package.regular_price}</del>
                  <span className="badge text-bg-info">
                    SAVE{" "}
                    {(
                      ((accountDetails?.package.regular_price -
                        accountDetails?.package.offer_price) *
                        100) /
                      accountDetails?.package.regular_price
                    ).toFixed(2)}
                    %{" "}
                  </span>
                </h5>
                <h2>
                  <sub>$</sub>
                  <span>{accountDetails?.package.offer_price}</span>
                  <sub>/ {accountDetails?.package.subscription_type}</sub>
                </h2>
                <div className="border_line" />
                <div className="feture_list">
                  <h4>Top Features </h4>
                  <ul>
                    {accountDetails?.package?.features?.map((item, key) => {
                      return (
                        <li key={key}>
                          <p>
                            {" "}
                            <i className="fa-solid fa-circle-check" />{" "}
                            {item.name}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? <CircularLoader /> : ""}
      </div>
    </>
  );
}

export default Dashboard;
