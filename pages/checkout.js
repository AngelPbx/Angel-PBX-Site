import Link from 'next/link'
import React from 'react'

function checkout() {
  return (
    <>
      <div className="main">

        <section className="checkout pt-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="content">
                  <div className="heading">
                    <h3>Review your plan summary</h3>
                  </div>
                  <div className="planDetails">
                    <table className="col-12">
                      <tbody>
                        <tr>
                          <td>Mobile Plan (x 1)</td>
                          <td>$19.99 / month</td>
                        </tr>
                        <tr>
                          <td>Included Local Company Number ($0.00/line/month)</td>
                          <td>$0.00 / month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="extraDetails">
                    <div className="heading">
                      <h3>Boost your plan</h3>
                      <p>
                        Add on additional features and services to meet your business
                        needs.
                      </p>
                    </div>
                    <div className="detailsNavTab">
                      <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                          <button
                            className="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            <i className="fa-light fa-puzzle" /> Add-ons
                          </button>
                          <button
                            className="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            <i className="fa-light fa-screwdriver-wrench" /> Services
                            and Integrations
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          tabIndex={0}
                        >
                          <table className="detailsNavTable">
                            <tbody>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-solid fa-phone-volume" />
                                    </div>
                                    <div>
                                      <h5>Toll-Free Flat Rate</h5>
                                      <p>$49.99/mo</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-solid fa-phone-office" />
                                    </div>
                                    <div>
                                      <h5>Local Company Number</h5>
                                      <p>$9.99/mo</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-solid fa-inbox" />
                                    </div>
                                    <div>
                                      <h5>Business Number Inbox</h5>
                                      <p>$49.99/mo</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          tabIndex={0}
                        >
                          <table className="detailsNavTable">
                            <tbody>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-solid fa-user-headset" />
                                    </div>
                                    <div>
                                      <h5>Angel PBX Support PLUS</h5>
                                      <p>$9.99/mo</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-solid fa-laptop-arrow-down" />
                                    </div>
                                    <div>
                                      <h5>Professional Service Remote (per hour)</h5>
                                      <p>$200.00</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="col-7">
                                  <div className="d-flex align-items-center">
                                    <div className="iconWrapper">
                                      <i className="fa-brands fa-google" />
                                    </div>
                                    <div>
                                      <h5>Angel PBX for G Suite</h5>
                                      <p>$10.00/mo</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="col-2">
                                  <input
                                    type="text"
                                    defaultValue={1}
                                    className="checkoutInput"
                                  />
                                </td>
                                <td className="col-3">
                                  <a className="serviceBtn m-0 ms-auto">
                                    Add to Plan
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="priceBreakup">
                  <div className="heading">
                    <h3>Your Cart Details</h3>
                  </div>
                  <div className="grossTotal">
                    <h5>Monthly Fees</h5>
                    <table>
                      <tbody>
                        <tr>
                          <td>Mobile Plan</td>
                          <td>$19.00</td>
                        </tr>
                        <tr>
                          <td>Included Local Company Number</td>
                          <td>$0.00</td>
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
                          <td>30% Off Monthly Plan Fee</td>
                          <td>-$6.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="netTotal">
                    <table>
                      <tbody>
                        <tr>
                          <td>Due today</td>
                          <td>$13.99</td>
                        </tr>
                        <tr>
                          <td>First bill</td>
                          <td>$13.99</td>
                        </tr>
                        <tr>
                          <td>Monthly Bill</td>
                          <td>$13.99/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="terms">
                    <p>
                      Minimum 1-year contract/Service Term Commitment required for the
                      above pricing. Fees and taxes calculated during checkout based
                      on your Service Address.
                    </p>
                  </div>
                  <div>
                    <Link to="/account-details" className="serviceBtn w-100 py-3">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*===End===*/}
        {/*====jquery links====*/}
      </div>

    </>
  )
}

export default checkout
