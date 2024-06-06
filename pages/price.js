/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { generalGetFunction } from "@/components/GlobalFunction";
import Head from "next/head";

function Price({ initialData }) {
  const router = useRouter();
  const dispatch = useDispatch()
  const [data, setData] = useState(initialData);
  const [duration, setDuration] = useState("annually");
  const [minimum, setMinimum] = useState(1);
  const [maximum, setMaximum] = useState(10);
  const [basic, setBasic] = useState();
  const [standard, setStandard] = useState();
  const [advance, setAdvance] = useState();
  useEffect(() => {
    setBasic(
      data.filter(
        (item) =>
          item.name === "Basic" &&
          item.subscription_type === duration &&
          Number(item.number_of_user) > minimum - 1 &&
          Number(item.number_of_user < maximum + 1)
      )
    );
    setStandard(
      data.filter(
        (item) =>
          item.name === "Standard" &&
          item.subscription_type === duration &&
          Number(item.number_of_user) > minimum - 1 &&
          Number(item.number_of_user < maximum + 1)
      )
    );
    setAdvance(
      data.filter(
        (item) =>
          item.name === "Advanced" &&
          item.subscription_type === duration &&
          Number(item.number_of_user) > minimum - 1 &&
          Number(item.number_of_user < maximum + 1)
      )
    );
  }, [data, minimum, duration, maximum]);
  console.log("This is server side rendered data", data);
  console.log("Basic", basic);
  console.log("Standard", standard);
  console.log("Advance", advance);
  return (
    <>
    <div className="main">

      {/*===pricing banner code start===*/}
      <section className="pricing_banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h5>PLANS &amp; PRICING </h5>
                <h1>Pick the perfect plan </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===End===*/}
      {/*===pricing plan code start===*/}
      <section className="pricing_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h2>
                  Ucaas <span> Plans &amp; </span> Pricing{" "}
                </h2>
              </div>
              <div className="tab_box">
                <ul>
                  <li>
                    <div className="flex_box">
                      <div
                        className="button_box nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <div className="nav-item active" role="presentation">
                          <div
                            className={`nav-link ${
                              duration === "annually" ? "active" : ""
                            }`}
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="home-tab-pane"
                            aria-selected="true"
                            onClick={() => setDuration("annually")}
                          >
                            Annually
                          </div>
                        </div>
                        <div className="nav-item" role="presentation">
                          <div
                            className={`nav-link ${
                              duration === "monthly" ? "active" : ""
                            }`}
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="profile-tab-pane"
                            aria-selected="false"
                            onClick={() => setDuration("monthly")}
                          >
                            Monthly
                          </div>
                        </div>
                      </div>
                      <p> Save up to 33% by paying annually </p>
                    </div>
                  </li>
                  <li>
                    <div className="border_right" />
                  </li>
                  <li>
                    <div className="flex_box">
                      <p>Number of users </p>
                      <div className="user_box">
                        <div
                          onClick={() => {
                            setMaximum(10);
                            setMinimum(1);
                          }}
                          className={minimum === 1 ? "active" : ""}
                        >
                          1-10
                        </div>
                        <div
                          onClick={() => {
                            setMaximum(100);
                            setMinimum(10);
                          }}
                          className={minimum === 10 ? "active" : ""}
                        >
                          10-100
                        </div>
                        <div
                          onClick={() => {
                            setMaximum(1000);
                            setMinimum(100);
                          }}
                          className={minimum === 100 ? "active" : ""}
                        >
                          100+
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    {basic && basic.length > 0 ? (
                      <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing_box">
                          <h3>Basic</h3>
                          <p>{basic[0].description} </p>
                          <h5>
                            {" "}
                            <del>${basic[0].regular_price}</del>{" "}
                            <span className="badge text-bg-info">
                              {" "}
                              SAVE{" "}
                              {(((basic[0].regular_price -
                                basic[0].offer_price) *
                                100) /
                                basic[0].regular_price).toFixed(2)}
                              %{" "}
                            </span>{" "}
                          </h5>
                          <h2>
                            <sub>$</sub>
                            <span>{basic[0].offer_price}</span>
                            <sub>{duration}</sub>
                          </h2>
                          <Link href={`/account-details?id=${basic[0].id}`}>
                            Buy Now
                          </Link>
                          {/* <p>$249.00/mo when you renew</p> */}
                          <div className="border_line" />
                          <div className="feture_list">
                            <h4>Top Features </h4>
                            <ul>
                              {basic[0].features.map((item, key) => {
                                return (
                                  <li key={key}>
                                    <p>
                                      {" "}
                                      <i className="fa-solid fa-circle-check" />{" "}
                                      {item.name}{" "}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {standard && standard.length > 0 ? (
                      <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing_box populer">
                          <h3>Standard </h3>
                          <p>{standard[0].description} </p>
                          <h5>
                            {" "}
                            <del>${standard[0].regular_price}</del>{" "}
                            <span className="badge text-bg-info">
                              {" "}
                              SAVE{" "}
                              {(((standard[0].regular_price -
                                standard[0].offer_price) *
                                100) /
                                standard[0].regular_price).toFixed(2)}
                              %{" "}
                            </span>{" "}
                          </h5>
                          <h2>
                            <sub>$</sub>
                            <span>{standard[0].offer_price}</span>
                            <sub>/{duration}</sub>
                          </h2>
                          <Link href={`/account-details?id=${standard[0].id}`}>
                            Buy Now
                          </Link>
                          {/* <p>$499.00/mo when you renew</p> */}
                          <div className="border_line" />
                          <div className="feture_list">
                            <h4>Top Features </h4>
                            <ul>
                              {standard[0].features.map((item, key) => {
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
                          <div className="most_populerbox">
                            <h6>Most Populer </h6>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {advance && advance.length > 0 ? (
                      <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing_box">
                          <h3>Advance</h3>
                          <p>{advance[0].description} </p>
                          <h5>
                            {" "}
                            <del>${advance[0].regular_price}</del>{" "}
                            <span className="badge text-bg-info">
                              {" "}
                              SAVE{" "}
                              {(((advance[0].regular_price -
                                advance[0].offer_price) *
                                100) /
                                advance[0].regular_price).toFixed(2)}
                              %{" "}
                            </span>
                          </h5>
                          <h2>
                            <sub>$</sub>
                            <span>{advance[0].offer_price}</span>
                            <sub>/{duration}</sub>
                          </h2>
                          <Link href={`/account-details?id=${advance[0].id}`}>
                            Buy Now
                          </Link>
                          {/* <p>$1,279.00/mo when you renew</p> */}
                          <div className="border_line" />
                          <div className="feture_list">
                            <h4>Top Features </h4>
                            <ul>
                              {advance[0].features.map((item, key) => {
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
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===end===*/}
      {/*===features plan code start===*/}
      <section className="features_plansection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h2>
                  Compare <span> Plan </span> Features{" "}
                </h2>
              </div>
              <div className="table_box">
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr className="fixed_box">
                      <td>
                        <h5> Have a question? Call </h5>
                      </td>
                      <td>
                        <h5> Core </h5>
                      </td>
                      <td>
                        <h5>
                          {" "}
                          Advanced{" "}
                          <span className="badge bg-info">
                            {" "}
                            Most Popular{" "}
                          </span>{" "}
                        </h5>
                      </td>
                      <td>
                        <h5>
                          {" "}
                          Ultra{" "}
                          <span className="badge bg-info">
                            {" "}
                            Best value{" "}
                          </span>{" "}
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Business phone or toll-free numbers{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Toll-free minutes{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>100</h6>
                      </td>
                      <td>
                        <h6>1000</h6>
                      </td>
                      <td>
                        <h6>10,000</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Unlimited domestic calling in US/Canada{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Enhanced Business SMS{" "}
                          <i className="fa-solid fa-exclamation exclamation" />
                        </h6>
                      </td>
                      <td>
                        <h6>25/user/mo</h6>
                      </td>
                      <td>
                        <h6>100/user/mo</h6>
                      </td>
                      <td>
                        <h6>200/user/mo</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Visual voicemail – voicemail transcriptions, voicemail
                          to email{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Multi-level auto attendant and IVR{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Shared lines{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          High-definition (HD) voice; AI-noise cancellation{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          End-to-end encryption for calls (beta){" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Emergency calling (E911){" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Desk phone &amp; conference phone rentals{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Incoming caller ID{" "}
                          <i className="fa-solid fa-exclamation exclamation" />
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Call queues{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          Basic{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          Advanced rules and routing{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          Advanced rules and routing{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Call Recording{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          On-demand{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          Automatic / on‑demand{" "}
                          <i className="fa-solid fa-exclamation exclamation" />
                        </h6>
                      </td>
                      <td>
                        <h6>
                          {" "}
                          Automatic / on‑demand{" "}
                          <i className="fa-solid fa-exclamation exclamation" />
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Up to 8-digit extensions with site codes{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td></td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Receptionist and admin console (heads-up display){" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Advanced call monitoring including whisper, barge, and
                          monitor{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td></td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Hot desking{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td></td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                      <td>
                        <i className="fa-solid fa-check check" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>
                          {" "}
                          Push-to-talk / walkie talkie{" "}
                          <i className="fa-solid fa-exclamation exclamation" />{" "}
                        </h6>
                      </td>
                      <td>
                        <h6>Add-on option</h6>
                      </td>
                      <td>
                        <h6>Add-on option</h6>
                      </td>
                      <td>
                        <h6>Add-on option</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===end===*/}
      {/*===faq section code start===*/}
      <section className="faq_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h2>
                  Frequently <span> Asked </span> Questions
                </h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Is Ucaas free to use? How long is Ucaas free Trial?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes. Free trial is available to new subscribers only.
                        During the 14-day free trial, you will receive support
                        for up to 20 phone lines. You can use any combination of
                        RingCentral desktop phones (up to 2 devices during free
                        trial) and the RingCentral app. The RingCentral app is
                        compatible with Windows, MacOS, Android and iOS
                        operating systems. The entire suite of Ucaas features,
                        including voice, auto attendant, online meetings, team
                        messaging, fax and conferencing are available during the
                        trial. SMS is not available for trial use. Any free
                        trial hardware must be returned within 21 days of trial
                        cancellation in order to avoid hardware charges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can I make unlimited calls with my Ucaas Central phone
                      number?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Incidunt facilis tenetur doloremque. Laudantium
                        saepe in asperiores animi repellat rem? Ipsam vitae esse
                        amet odio, eum autem quae unde qui dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What apps does RingCentral integrate with?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam eaque fugit placeat rem, corporis voluptates
                        non pariatur blanditiis, possimus ullam eveniet ratione!
                        Pariatur officiis accusantium, deserunt nam nobis
                        aliquid facilis!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do you integrate with Microsoft Teams?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam eaque fugit placeat rem, corporis voluptates
                        non pariatur blanditiis, possimus ullam eveniet ratione!
                        Pariatur officiis accusantium, deserunt nam nobis
                        aliquid facilis!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Do you have any special pricing or packages for Education
                      customers?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam eaque fugit placeat rem, corporis voluptates
                        non pariatur blanditiis, possimus ullam eveniet ratione!
                        Pariatur officiis accusantium, deserunt nam nobis
                        aliquid facilis!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseseven"
                      aria-expanded="false"
                      aria-controls="collapseseven"
                    >
                      What global compliance certifications does RingCentral
                      have?
                    </button>
                  </h2>
                  <div
                    id="collapseseven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam eaque fugit placeat rem, corporis voluptates
                        non pariatur blanditiis, possimus ullam eveniet ratione!
                        Pariatur officiis accusantium, deserunt nam nobis
                        aliquid facilis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===End===*/}

      {/*===Mobile Navbar code start===*/}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="mobile_showcontent">
            <ul>
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/">Solutions</Link>
              </li>
              <li>
                <Link href="pricing.html">Plans &amp; Pricing</Link>
              </li>
              <li>
                <Link href="/">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*===End===*/}
      {/*====bootstrap js links====*/}
      {/*====jquery links====*/}
      {/*====owl slider links====*/}
    </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await generalGetFunction(
      "packages-all"
    );
    return {
      props: {
        initialData: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        initialData: [],
      },
    };
  }
}

export default Price;
