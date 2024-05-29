/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

function thankyou() {
  return (
    <section className="thankyou_section">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="text_box">
            <h1>
              {" "}
              Thank You <span> ! </span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et a
              dolorum rerum accusamus? Eum explicabo architecto.
            </p>
            <img src="/assets/images/thankyou_icon.png" alt="angelpbx" />
            <img src="" alt="" />
            <h5>Check Your Email</h5>
            <p>
              if You Didn't Receive Any Mail Contact
              <a href="mailto:info@angelpbx.com">info@angelpbx.com</a>
            </p>
            <Link href="/" className="back_tohome">
              {" "}
              <i className="fa-solid fa-arrow-left" /> Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default thankyou
