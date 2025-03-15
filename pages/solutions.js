import React from 'react';
import Image from 'next/image';

function solutions() {
  return (
    <div className="main">
      <section className="pricing_banner " style={{ backgroundImage: `url(${'https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2023/12/26004145/Customer-Service-Call-Center.webp'})`, backgroundSize: 'cover', width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <h1>Call Center Solutions </h1>
                <h5>Why Angel PBX Serves Call Center Phone Systems best? </h5>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_box">
                <div className='row'>
                  <div className='col-xl-7 col-lg-7 col-md-7 '>
                    <h2 className='text-center'>PBX call center efficiently routes and manages incoming and outgoing calls, providing a centralized hub for business communications.</h2>
                    <br></br>
                    <p>We are committed to producing the best quality cloud call center solutions that would fit best for your industry and serve all your communication needs. </p>
                    <br></br>
                    {/* <p>Our cloud call center software is free of bugs and gives you a strong database to manage all your incoming and outgoing calls. With it, your employees and agents connect with each other and entertain customers from remote corners of the world. This enhances the productivity of your enterprise. You can thus successfully remove the added hassles of space and time from your regular functioning.</p> */}
                    <br></br>
                    <p>The call center software solutions provided by  <span style={{ fontWeight: 'bold', color: 'red' }}>Angel PBX</span> give you superior quality voice calling. Using this system, you can keep a detailed and analytic report of all the calls received. and made by your agents. With this, you can have support for all your future call references. You can also manage the quality of calls as well as the efficiency of your agents in their particular fields. </p>
                    {/* <p>Even during hours of rush, our call center software solutions would not break. It is designed to support organizations during rush hours with perfect ease and stability. Our team of technicians provides you with the best support any time you need it. You can also customize the specific features according to your organization or client’s requirements with our cloud call center phone systems.</p> */}
                  </div>


                  <div className="col-xl-5 col-lg-5 col-md-5 my-auto">
                    <div className="images-point">
                      <Image
                        src="https://cdn-ilbgkhf.nitrocdn.com/purAKyjShVpiUUHKFExzGAxuRLXFYzrm/assets/images/optimized/rev-cc08d9f/myrepublic.net/sg/wp-content/uploads/sites/2/2024/03/Voice-Cloud-PBX-2000x2000-120324-1.png"
                        alt="image"
                        width={500}
                        height={500}
                        fetchpriority='high'
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="industries pb-4 mt-4" id="industries" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto sectionHeading text-center">
              <h1>
                For Your Business
                To Adapt
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
                    Predictive Dialer
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
                    Inbound Call Center
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Outbound Call Center
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-finance-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-finance"
                    type="button"
                    role="tab"
                    aria-controls="pills-finance"
                    aria-selected="false"
                  >
                    Blended Call Center
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
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-6 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://tevatel.com/wp-content/uploads/2024/06/predictive-dialer-software.jpg"
                      alt="image"
                      width={500}
                      height={500}
                      fetchpriority='high'
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6 my-auto">
                  <div className="content">
                    <h3>
                      Optimize Your Outbound Calls With Predictive Dialer
                    </h3>
                    <p> A call center predictive dialer helps you filter all the voicemails, busy tones, fax machines, unattended calls, and wrong numbers. It connects your agents only with the calls that need to be answered. </p>
                    <br></br>
                    <p>This helps you to optimize a great deal of time and enhances the functioning of your agents. This is one of the best predictive dialer features that most organizations sign up for. It also eliminates the chances of waiting over the lines for unnecessary connections and spam calls.</p>
                    {/* <p>With advanced dialing algorithms on our best predictive dialer, you can now explore a lot of new features such as generating the lead connectivity ratio, monitoring your agent’s performance, and maintaining the number of agents working in your company.</p> */}
                    <div>
                      {/* <Link href="/" className="specialLearn">
                          Learn More
                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>

              <section className="trusted_partnersection">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="sectionHeading">
                        <h1>
                          {" "}
                          Trusted by <span> the best in the </span> business{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="col-xl-6 gap-2 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>SMART DIALING
                          </h3>
                          <p>
                            The smart dialing algorithm is one of our best predictive dialer for call center services. This lets you predict the dialing numbers and helps in the maintenance of records, as well as makes your task of looking for new contacts and leads smoother. It cuts down the time you spend on calling your customers while locating their positions. By optimizing these factors, productivity can be restored.


                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>PROGRESSIVE IVR
                          </h3>
                          <p>
                            Interactive Voice Response (IVR) systems in predictive dialer features help you in the process of lead conversion. It lets you generate more effective leads, and our special feature enables you to maintain a documented record of the responses you get from all these leads. This feature accelerates your organization’s productivity in the most suitable way.


                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>REAL-TIME SCRUTINISING AND REPORTING
                          </h3>
                          <p>
                            The best predictive dialer’s important function for most organizations is to scrutinize and report the activities and proceedings of the company. Once you choose a predictive dialer as a part of your call center solutions, this part of the job becomes simple. Predictive dialers help you maintain reports and scrutinize them in real-time while your agents make calls and offer services to your customers.


                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>EFFICIENT CAMPAIGN COORDINATION
                          </h3>
                          <p>
                            It is a great feature that you can enjoy while using a predictive dialer. It lets you manage and coordinate your campaigns with perfection. You can talk to your customers and get feedback on your special offers and services, which will be recorded for you to scrutinize later and create reports. With this predictive dialer solution, managers can keep track of the campaigns.
                          </p>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-xl-6 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://unity-connect.com/wp-content/uploads/2022/10/Inbound-Call-Center-Process-Outsourcing-Featured-Image_486994537-1024x683.jpg"
                      alt="image"
                      width={600}
                      height={400}
                      fetchpriority='high'
                    />
                  </div>
                </div>
                <div className="col-xl-6 my-auto">
                  <div className="content">
                    <h3>
                      Host Incoming Calls Efficiently With Inbound Call Center Solutions
                    </h3>
                    <p>Using an effective inbound call center solution for your business helps you to procure powerful leads that can be converted into sales with ease.  <span style={{ fontWeight: 'bold', color: 'red' }}>Angel PBX</span> gives you the best experience in inbound calling services. </p>
                    <p>This call center solution has been designed exclusively to fulfill all the functional aspects of the corporate domain seamlessly. Our inbound call center solutions pave the way to managing and recording all your incoming client calls. </p>
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
              <section className="trusted_partnersection">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="sectionHeading">
                        <h1>
                          {" "}
                          Get The Following  <span> Features With </span>Our Services{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="col-xl-3 gap-2 col-lg-4  col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>Multi-Level IVR

                          </h3>
                          <p>
                            With our inbound call center solution, engage your customers with better call connectivity by redirecting the call to the concerned agent at the proper time of the day to gain more gross profit.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>ADVANCED CALL ALLOCATION

                          </h3>
                          <p>
                            Possess the intelligent power of transmitting the calls to the direct agent at the right time to develop the core areas of your enterprise.

                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>MUSIC ON HOLD

                          </h3>
                          <p>
                            Provide much of the ease of comfort to the customers with the on-hold music during busy business hours to give them feasible options while they anticipate.




                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>QUEUE MANAGEMENT

                          </h3>
                          <p>
                            Increase the efficacy of the business with the technicalities of queue management as each of the customers does perceive the concerning priority of ‘waiting time’ amid the long business hours.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 gap-2 col-lg-4  col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">
                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL WAITING
                          </h3>
                          <p>
                            Boost business creativity with the active call waiting of the enterprise, as each of the concerned customers and clients does have the power of waiting during the long hours of the business time schedule.

                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">
                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL FORWARDING
                          </h3>
                          <p>
                            Possess the power of controlling and re-directing the concerned calls of the customers to the agent, without facing much hassle.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">
                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL ROUTING
                          </h3>
                          <p>
                            Enhance your business power with the key feature of distributing the incoming calls at the right time to promote the key areas of your business.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 mb-3  col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">
                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL TRANSFER
                          </h3>
                          <p>
                            Have the ease of flipping the calls to the right person at the peak hours of business to cater to the needs of your firm.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-xl-6 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://cdn-aekfi.nitrocdn.com/BhHUnZmQXkWPzBaLMaTftVhEvszyNTtP/assets/images/source/rev-6880cb6/www.timedoctor.com/blog/images/2021/06/call-center-automation1-1170x658.jpg.webp"
                      alt="image"
                      width={600}
                      height={600}
                      fetchpriority='high'
                    />
                  </div>
                </div>
                <div className="col-xl-6 my-auto">
                  <div className="content">
                    <h3>
                      Experience Innovation
                      Outbound Call Center Solutions
                    </h3>
                    <p> Our outbound call center services enable you to achieve all your telecommunication and telephone sales goals with ease. With our extensive outbound call center software , you get access to your entire customer database at once without any hassle.</p>
                    <p> When you use this service, it becomes possible for your organization to have a comprehensive and effective telecommunication base with our smart technologies. </p>
                    <p>The cloud-based outbound calling services escalate the level of efficiency, and this stimulates customer relationships further.</p>
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
              id="pills-finance"
              role="tabpanel"
              aria-labelledby="pills-finance-tab"
              tabIndex={0}
            >
              <div className="row">
                <div className="col-xl-5 my-auto">
                  <div className="images-point">
                    <Image
                      src="https://nobelbiz.com/wp-content/uploads/2024/05/What-is-Call-Blending.jpg"
                      alt="image"
                      width={600}
                      height={600}
                      fetchpriority='high'
                    />
                  </div>
                </div>
                <div className="col-xl-7 my-auto">
                  <div className="content">
                    <h3>
                      What IsBlended Call Center Solution?
                    </h3>
                    <p> Through the definite type of the amalgamation of both the inbound as well as the outbound call centers, the received outcome is known as the <span style={{ fontWeight: 'bold', color: 'red' }}>Blended call center solutions</span> . It has proven to be the best option for the intrinsic as well as extrinsic growth of the enterprise.  </p>
                    <p>you do get to avail the best of the blended call center services by gearing up the key areas of the business connectivity in setting up both the inbound as well as outbound call centers. </p>
                    <p>Our cloud hosted blended call center solution gives you the opportunity to handle both your inbound and outbound calls through an extremely user-friendly software system. The managers can track and keep a record of all incoming and outgoing calls based on the routes of each call to or from the particular agent. </p>
                    <div>
                      {/* <Link href="/" className="specialLearn">
                          Learn More
                        </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <section className="trusted_partnersection">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="sectionHeading">
                        <h1>
                          {" "}
                          Trusted by <span> the best in the </span> business{" "}
                        </h1>
                      </div>
                    </div>
                    <div className="col-xl-6 gap-2 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>Smart Dialer Function

                          </h3>
                          <p>
                            Maximize your organization’s productivity and increase sales by using our blended call center software’s flawless smart dialer. With this, you get to save most of your time and effort.
                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>REAL-TIME VISUAL CALL DISPLAY (REPORTING)

                          </h3>
                          <p>
                            Stay tuned with all the recent developments within your telephony system through the real-time visual call display. It can help you figure out helpful protocols and plans to aid growth and optimization.



                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL TRANSFER

                          </h3>
                          <p>
                            Save valuable time for your organization with just one step by availing our easy call transfer technique. Also, learn to connect your callers to the relevant agents for their particular queries.



                          </p>
                          {/* <Link href="/" className="specialLearn">
                            {" "}
                            Explore the partnership{" "}
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>EFFICIENT CAMPAIGN COORDINATION
                          </h3>
                          <p>
                            Get high quality audio and video calls while you connect with multiple callers and conduct virtual meetings with ease by relying on our blended call center services.</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>MUSIC ON HOLD

                          </h3>
                          <p>
                            With the music on hold feature, you can promote your services or products while your customers wait for a call to be answered or transferred to the relevant end.

                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL RECORDING

                          </h3>
                          <p>

                            When you record the calls, you get to monitor the performances of the agents whenever you want. You can use these recorded calls to train the new employees of your organization.


                          </p>

                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>CALL BARGE IN

                          </h3>
                          <p>
                            This feature helps you to monitor the calls made by your agents and keep a record of their performances. You can also keep a check on if any irrelevant or faulty information is being passed on to your callers by the agents.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mb-3 col-md-6 col-sm-6 col-12">
                      <div className="content_wraper">

                        <div className="text_box col-xl-12 col-12">
                          <h3>CUSTOM CALL DISPOSITIONS
                          </h3>
                          <p>
                            This feature helps your calling agent to be on the same track as your management team. Call disposition customization on your blended call center software also allows your customers to have all the required information that they need.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>



      <section className="industries pb-4 mt-4" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto sectionHeading text-center">
              <div className='content'>
                <h1>
                  Our Toll-free Numbers
                </h1>
              </div>

            </div>
          </div>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-7">
              <div className="calling-feature1 calling-feature">
                <h2>  Experience High Sale Volume With Numbers</h2>
                <br></br>
                <p>  To spread your business over the globe, it is important to form a connection between your organization and global clients. Our extensive list of features and utility tools related to the best toll free number service can get you the maximum profit with assured connectivity. </p>
                <p>By choosing our service, you can customize your business setup, improve business productivity, and evaluate agents’ performance to ensure that your customers are informed with appropriate information. Our toll free number for business dashboard and several other tools help you analyze your client’s performance in real-time. Create an impression with our unique 1 - 800 brand number. Reach out to us to be able to buy<span style={{ fontWeight: 'bold', color: 'red' }}>  Toll free number</span>. </p>
              </div>
            </div>
            <div className='col-md-5'>
              <div className="images-point">
                <Image
                  src="https://3.imimg.com/data3/CI/SV/MY-7396258/tollfree-number-1800-500x500.gif"
                  alt="image"
                  width={400}
                  height={400}
                  fetchpriority='high'
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="industries pb-4 mt-4" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto sectionHeading text-center">
              <div className='content'>
                <h1>
                  Local Numbers
                </h1>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse align-items-center">
            <div className='col-md-5'>
              <div className="images-point">
                <Image
                  src="https://tiimg.tistatic.com/fp/1/008/385/caller-id-voice-mail-lcd-screen-caller-transfer-button-keypad-landline-phones-835.jpg"
                  alt="image"
                  width={400}
                  height={400}
                  fetchpriority='high'
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="calling-feature1 calling-feature">
                <h2> Never Miss a Client With Our Unique Local Phone Number</h2>
                <br></br>
                <p>The virtual local phone number will make your clients, colleagues and even your customers feel more connected to you, eliminating the distance barriers. Buy a local phone number to connect with all your clients, customers and even colleagues while the barrier of distance is totally removed.</p>
                {/* <p>By choosing our service, you can customize your business setup, improve business productivity, and evaluate agents’ performance to ensure that your customers are informed with appropriate information. Our toll free number for business dashboard and several other tools help you analyze your client’s performance in real-time. Create an impression with our unique 1 - 800 brand number. Reach out to us to be able to buy<span style={{ fontWeight: 'bold', color: 'red' }}>  Toll free number</span>. </p> */}
              </div>
            </div>

          </div>
          <div className="row mt-5 flex-row-reverse align-items-center">
            <div className="col-md-7">
              <div className="calling-feature1 calling-feature">
                <h2>Create A Local Presence With Local Business Numbers.
                </h2>
                <br></br>
                <p>Select a unique local phone number and you will be able to create a local presence by expanding your business, which will reach worldwide. This will boost your sales and you will be able to manage both regional and international clients effectively.</p>
                <p>
                  To create and expand your local presence, it is important for your business to have a unique virtual local phone number. This effort would ultimately help your brand name to be known on a world-wide basis. Your sales get boosted and with a local number, it becomes easier for you to maintain and manage your local clients and queries.

                </p>
                {/* <p>By choosing our service, you can customize your business setup, improve business productivity, and evaluate agents’ performance to ensure that your customers are informed with appropriate information. Our toll free number for business dashboard and several other tools help you analyze your client’s performance in real-time. Create an impression with our unique 1 - 800 brand number. Reach out to us to be able to buy<span style={{ fontWeight: 'bold', color: 'red' }}>  Toll free number</span>. </p> */}
              </div>
            </div>
            <div className='col-md-5'>
              <div className="images-point">
                <Image
                  src="https://wavetelbusiness.co.uk/media/jdpje0ky/local-phone-numbers.jpg"
                  alt="image"
                  width={400}
                  height={400}
                  fetchpriority='high'
                />
              </div>
            </div>


          </div>
        </div>
      </section>





      <section className="services">
        <div className="container">
          <div className="row g-5 g-xl-4">
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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
            <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mx-auto">
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




      <section className="industries pb-4 mt-4" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto sectionHeading text-center">

              <div className='content'>
                <h1>
                  Virtual Office Phone System
                </h1>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="calling-feature1 calling-feature">
                <h2> Upgrade Your Business to a Digital Platform With Virtual Office Phone Systems</h2>
                <br></br>
                <p>A virtual office phone system for business is one that uses hosted PBX to establish connectivity. It is different from the traditional set-up in the sense that the latter uses an on-premise PBX. </p>
                <p> Virtual phones have cloud-based technology that makes your telephony more suitable for office purposes. Communication is the most important thing for any business. If you managed to do it right, your business would spread and attract new customers and leads.  </p>
                <p>PBX understands this need and, hence, our team of expert technicians has developed the best virtual phone system for small businesses. This system would help you establish great connections within and outside your organization and provide you with the best working flexibility.</p>
                <p>A virtual office phone system can also serve well for big organizations. However, for such organizations, it needs to be installed department wise. It can connect employees of a particular department by creating a great line of communication.</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="images-point">
                <Image
                  src="https://www.nextiva.com/cdn-cgi/image/width=1024,height=576,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/07/Virtual-Phone-System.png"
                  alt="image"
                  width={500}
                  height={500}
                  fetchpriority='high'
                />
              </div>
            </div>
          </div>
          <div className="row mt-5 flex-row-reverse align-items-center">
            <div className='col-md-5'>
              <div className="images-point">
                <Image
                  src="https://www.nextiva.com/cdn-cgi/image/width=1024,height=576,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2022/06/150-H-What-is-Voip.jpg"
                  alt="image"
                  width={500}
                  height={500}
                  fetchpriority='high'
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="calling-feature1 calling-feature">
                <h2>Enhance Your Professional Communication With a Virtual Phone System.
                </h2>
                <br></br>
                <p>As convenient as it may sound, establishing your business on virtual ground is not an easy task. However, with our innovative cloud call center, this is possible. </p>
                <p>
                  The best Virtual phone systems for small businesses make it possible for you to manage freelance employees all around the world. This cuts a considerable part of your organization’s costs.

                </p>
                {/* <p>By choosing our service, you can customize your business setup, improve business productivity, and evaluate agents’ performance to ensure that your customers are informed with appropriate information. Our toll free number for business dashboard and several other tools help you analyze your client’s performance in real-time. Create an impression with our unique 1 - 800 brand number. Reach out to us to be able to buy<span style={{ fontWeight: 'bold', color: 'red' }}>  Toll free number</span>. </p> */}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default solutions