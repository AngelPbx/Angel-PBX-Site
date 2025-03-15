import React from 'react'
import Image from 'next/image'

function resources() {
  return (
    <div className="main">
      <section className="pricing_banner " style={{ backgroundImage: `url(${'https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2023/12/26004145/Customer-Service-Call-Center.webp'})`, backgroundSize: 'cover', width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h1>Calling Features</h1>
                <h5>The Calling Features of Angel PBX </h5>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing_section">
        <div className="container p-4">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">

              </div>
              <div className='row '>
                <div className="col-xl-6 ">
                  <h3 className='p-4 text-start'>
                    Directing incoming calls to the appropriate extensions or departments.
                  </h3>
                  <div className='images-point'>
                    <Image alt='image-point' src='https://www.crsl.es/img/cms/Extranet/Comunicaciones%20Empresa/Distribuci%C3%B3n/Oportunidades%20de%20negocio-2.jpg'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className='col-xl-6 d-flex align-items-center justify-content-center'>
                  <div className='heading_box'>

                    <h1 className='mb-4'>
                      The Calling Features of Angel PBX
                    </h1>
                    <p>Angel PBX has the best cloud call center software, loaded with features that benefit users in all ways. From making the job of calling easier to managing the whole procedure in a better way, our features are always there to help and enhance your business services.</p>
                    <p>
                      Here we will discuss the different calling features that you can enjoy while using our cloud call center services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="miniServices">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto sectionHeading text-center">
              <h1>
                Call management and Reporting
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10  mx-auto">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Management & Reporting
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Miscellaneous Features
                  </button>
                </li>

              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="row mt-5">
                <div className="col-xl-6 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://www.techslang.com/wp-content/uploads/2023/07/what-is-a-call-management-system-scaled-e1690365899471-1536x806.jpg"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-xl-6 ">
                  <div className="content text-start">
                    <h3>
                      Call management and Reporting Features of Angel PBX
                    </h3>
                    <p> A call center predictive dialer helps you filter all the voicemails, busy tones, fax machines, unattended calls, and wrong numbers. It connects your agents only with the calls that need to be answered. </p>
                    <br></br>
                    <p>In order to facilitate a smooth call transfer, make sure to instill services from the best business hosted PBX. The cloud facilities make it easy for you to manage and maintain all records much better than the usual PBX systems. Angel PBX’s telephony services are loaded with features that make it easier for you to manage and maintain your call records.</p>
                    {/* <p>With advanced dialing algorithms on our best predictive dialer, you can now explore a lot of new features such as generating the lead connectivity ratio, monitoring your agent’s performance, and maintaining the number of agents working in your company.</p> */}
                    <div>
                      {/* <Link href="/" className="specialLearn">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="row mt-5">
                <div className="col-xl-6 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://www.voipfone.co.uk/media/images-resized/illustrations/misc-1200.png"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-xl-6  ">
                  <div className="content text-start">
                    <h3>
                      Miscellaneous Features of Angel PBX
                    </h3>
                    <p>Other than calling and call management features, Angel PBX offers users loads of other features. These features help you improve your connectivity and establish better connections with your callers. </p>
                    <p> Angel PBX, being the top most cloud telephony providers vouch to serve all customers well with full technical support. That is why we have established a set of features that make it possible for you to enjoy the smoothest communication services.</p>
                    {/* <p>This service not only benefits your employees and agents, but it also proves to be a great help for your customers and leads. It gives them the benefit of checking the status of the availability of your agents whenever they try contacting.</p>
                  <p>In short, it makes the connection between your organization and clients stronger than ever. With our special inbound call center software, your agents can work from remote locations as well. This boosts your productivity when your agents go on onsite duties. To bridge the gap between your organization and customers, inbound call center solutions give you the maximum benefit.</p> */}
                    <div>
                      {/* <Link href="/" className="specialLearn">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="services">
        <div className="container">
          <div className="row g-5 g-xl-4 justify-content-center">
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test h-0" id="a">
                  <div className=" text-center">
                    <div>
                      <div className="iconWrappers mt-3 mb-3">
                        <h5>
                          <i className="fa-regular fa-sharp fa-phone-volume" />
                        </h5>
                      </div>
                    </div>
                    <h5>Zero Installation Fees</h5>
                    <div>
                      <p>
                        Avail the free set up without any hassle, in no time.


                      </p>
                    </div>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test" id="b">
                  <div className=" text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-headset" />
                    </div>
                    <h5>Get Unlimited Calling Plans
                    </h5>
                  </div>
                  <div>
                    <p>
                      Avail the unlimited calling service to boost better connectivity now!


                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test" id="c">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-comments" />
                    </div>
                    <h5>Transfer Existing Numbers With Ease
                    </h5>
                  </div>
                  <div>
                    <p>
                      Avoid hassle by transferring your number to your phone via the internet.


                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test" id="d">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-cloud" />
                    </div>
                    <h5>Spread Your Business Globally
                    </h5>
                  </div>
                  <div>
                    <p>
                      Connect with your enterprise globally at any point of time with ease.
                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test" id="a">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <h5>
                        <i className="fa-regular fa-sharp fa-phone-volume" />
                      </h5>
                    </div>
                    <h5>Transfer Calls to Your Mobile Devices
                    </h5>
                  </div>
                  <div>
                    <p>
                      Get the ease of connectivity through the smooth transfer of mobile numbers.


                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper wrappers">

                <div className="serviceContent  serviceContents-test" id="b">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-headset" />
                    </div>
                    <h5>Easy to Optimize Routing Systems
                    </h5>
                  </div>
                  <div>
                    <p>
                      Increase the mode of proficiency through the advanced routing system.


                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">

                <div className="serviceContent  serviceContents-test" id="c">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-comments" />
                    </div>
                    <h5>Easy Payment System And Pay What You Use
                    </h5>
                  </div>
                  <div>
                    <p>
                      Possess easy access to payment for the longevity of your business.


                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="wrapper">
                <div className="serviceContent  serviceContents-test" id="d">
                  <div className="text-center">
                    <div className="iconWrappers mt-3 mb-3">
                      <i className="fa-sharp fa-regular fa-cloud" />
                    </div>
                    <h5>Availability of Customer Support 24*7
                    </h5>
                  </div>
                  <div>
                    <p>
                      Get continuous support from the team at any time of the day from us.
                    </p>
                  </div>
                  <div className="bot">
                    {/* <Link href="/" className="link">
                        Learn More
                      </Link>
                      <Link href="/" className="serviceBtn">
                        See Plans
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default resources