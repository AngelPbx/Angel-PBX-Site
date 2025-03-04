/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
     {/*===footer===*/}
     <footer>
     
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="up_footerbox">
              <ul>
                <li>
                  <div className="logo_element">
                    <Link href="home.html">
                      <img
                        src="/assets/images/logo.png"
                        alt="LOGO"
                      />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex_box">
                    <div className="social_links">
                      <Link href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link href="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                    <div className="email_box">
                      <form action="#">
                        <input type="email" placeholder="Enter Your Email" />
                        <button>
                          {" "}
                          Send {" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="quick_link">
              <ul>
                <li>
                  <div className="link_element">
                    <h5>Product</h5>
                    <Link href="#">Business Phone</Link>
                    <Link href="#">Contact Center</Link>
                    <Link href="#">Video Conferencing</Link>
                    <Link href="#">Team Chat</Link>
                    <Link href="#">APIs</Link>
                    <Link href="#">Integrations</Link>
                    <Link href="#">Integrations</Link>
                  </div>
                </li>
                <li>
                  <div className="link_element">
                    <h5>Why Ucaas</h5>
                    <Link href="#">Overview</Link>
                    <Link href="#">Trust</Link>
                    <Link href="#">Security</Link>
                    <Link href="#">Compliance</Link>
                    <Link href="#">Reliability</Link>
                    <Link href="#">Global Reach</Link>
                    <Link href="#">Sustainability</Link>
                  </div>
                </li>
                <li>
                  <div className="link_element">
                    <h5>Resources</h5>
                    <Link href="#">All Resources</Link>
                    <Link href="#">Customer Stories</Link>
                    <Link href="#">Reports &amp; White Papers</Link>
                    <Link href="#">Webinars &amp; Events</Link>
                    <Link href="#">Service Status</Link>
                    <Link href="#">Utilities</Link>
                    <Link href="#">Reports &amp; White Papers</Link>
                  </div>
                </li>
                <li>
                  <div className="link_element">
                    <h5>Company</h5>
                    <Link href="#">About Us</Link>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Leadership Team</Link>
                    <Link href="#">Investor Relations</Link>
                    <Link href="#">Press Releases</Link>
                    <Link href="#">Media Kit</Link>
                  </div>
                </li>
                <li>
                  <div className="link_element">
                    <h5>Quick Links</h5>
                    <Link href="#">Help Center</Link>
                    <Link href="#">Status Dashboard</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Events</Link>
                    <Link href="#">Resource Library</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="down_box">
        <div className="container">
          <ul>
            <li>
              <div className="left_linkbox">
                <Link href="#">Privacy Policies</Link>
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#">Cookie Policy</Link>
              </div>
            </li>
            <li>
              <div className="cookies_box">
                <p>
                  @{(new Date()).getFullYear()} I Powered by UCAAS Solutions LLC | DBA - UCAAS All Right
                  Reserved
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    {/*===End===*/}
    </>
  )
}

export default Footer
