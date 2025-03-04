import e from 'cors';
import React, { useState } from 'react'

function contact() {


  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastError, setLastError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [numberError, setNumberError] = useState('');

  const validationForm = () => {
    let isValid = true;
    if (!first) {
      setNameError('First name is required ');
      isValid = false;
    } else {
      setNameError(' ')
    }
    if (!last) {
      setLastError('Last name is required ');
      isValid = false;
    } else {
      setLastError(' ');
    }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !email){
      setEmailError('Email is required ')
      isValid = false ;
    } else{
  
   if (!emailRegex.test(email)){
    setEmailError(' Invalid email format ')
    isValid=false
    }
    else {
      setEmailError( ' ')
    }
  }


  if (!address){
    setAddressError ('Address is required ')
    isValid =false
  }
  else {
    setAddressError( ' ')
  }

  const mobileNumber = /^[0-9]{10}$/;
  if (!number){
    setNumberError (' Mobile number is required ')
    isValid = false;
       
  }else {
   if(mobileNumber.test(number)){
    setNumberError (' number is invalid ')
   }
   else setNumberError( ' ')
  }

  if (isValid)
  {
    console.log(" Form submitted ", {first, last , mobileNumber , address });
    
  }

  }


  const handleSubmit = () => {

    if (validationForm()) {
      console.log("Form submitted ", first, last, );

    }

  }
  // const handleSubmitform = (e) => {
  //   e.preventdefault();
  //   setFirst(e.target.value);
  //   setLast(e.target.value);
  //   setAddress(e.target.value)
  //   setEmail(e.target.value);
  //   setName(e.target.value);
  // }

  return (
    <div className="main">
      <section className="pricing_banner p-0 " style={{ backgroundImage: `url(${'https://cdn.vectorstock.com/i/1000v/58/43/black-chalkboard-background-vector-4305843.avif'})`, backgroundSize: 'cover', width: '100%' }}>
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="heading_box">
                <h1>Get in touch
                </h1>
                <h5>Get Connected With The Best VOIP Provider Now</h5>

              </div>
            </div>
            <div className='col-md-6'>
              <div className='images-point ms-5 images-positions '>
                <img className='ms-5' src='https://www.aircanada.com/content/dam/aircanada/portal/images/content-images/fly/customer-support/helpful-links-4.jpg' />

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

            </div>
          </div>
        </div>
      </section>
      <section class="miniServices">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 ">
              <div class="content">
                <div class="iconWrapper">
                  <i class="fa-solid me-3 fa-envelope"></i>
                </div>
                <h5> EMAIL ADDRESS</h5>
                <p> info@angelpbx.com</p>
              </div>
            </div>
            <div className="col-xl-4 ">
              <div class="content">
                <div class="iconWrapper">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <h5>  PHONE NUMBER</h5>
                <p> 1 (888) 219 8665</p>
              </div>
            </div>
            <div className="col-xl-4 ">
              <div class="content">
                <div class="iconWrapper">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <h5>OUR ADDRESS</h5>
                <p>  17875 Von Karman Ave, Suite 150 & 250, Irvine, California, 92614, United States of America</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.886399913994!2d-117.85225521225829!3d33.686005568141155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde916ce5a2ed%3A0x1f696835f2fe396c!2s17875%20Von%20Karman%20Ave%20Suite%20150%2C%20Irvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2sin!4v1729066480468!5m2!1sen!2sin"
                style={{
                  width: '100%',
                  height: '450px',
                  border: '0',
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing_section" style={{ backgroundImage: `url(${'https://wallpapers.com/images/high/dark-gradient-quwlcn6vowfuwug1.webp'})`, backgroundSize: 'cover', width: '100%' }}>
        <div className="container p-4">
          <div className="row align-items-center justify-content-center">
            <div className='col-md-7 '>

              <div className='contact-form'>
                <div class="content text-center mb-5">
                  <h1 style={{ color: "white" }}>Contact me</h1>
                </div>
                <form onClick={handleSubmit}>
                  <div>
                    <label htmlFor="firstName">First Name:</label>

                  </div>
                  <div >
                    <input className='form-control ' value={first} onChange={(e)=>{setFirst(e.target.value)}} type="text" id="firstName" name="firstName" required />
                    {nameError && <p style={{ color: 'red' ,fontSize: '12px'  }}>{nameError}</p>}
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="lastName">Last Name:</label>
                    <div>
                      <input className='form-control' value={last} onChange={(e)=>{setLast(e.target.value)}} type="text" id="lastName" name="lastName" required />
                      {lastError && <p style={{ color: 'red', fontSize: '12px'  }}>{lastError}</p>}
                    </div>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor="email">Email:</label>
                    <div>
                      <input className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" required />
                    {emailError && <p  style={{ color: 'red', fontSize: '12px'  }}>{emailError}</p>}
                    </div>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <div>
                      <input className='form-control' value={number} onChange={(e)=>{setNumber(e.target.value)}} type="tel" id="mobileNumber" name="mobileNumber" required />
                   {numberError &&  <span  style={{ color: 'red', fontSize: '12px' }}>{numberError}</span>}
                    </div>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor="address">Address:</label>
                    <div>
                      <textarea className='form-control' value={address} onChange={(e)=>{setAddress(e.target.value)}} id="address" name="address" required></textarea>
                    { addressError &&  <p  style={{ color: 'red', fontSize: '12px'  }}>{addressError}</p>}
                    </div>
                  </div>

                  <div className='mt-2'>

                    <div>
                      <input required className='d-none' type='name ' />
                    </div>
                  </div>


                  <div className='text-end mt-5'>
                    <button type="submit" className='btn btn-md btn-primary  '>Submit</button>
                  </div>
                </form>

              </div>

            </div>
            <div className='col-md-5 '>
              <div className='images-point '>
                <img src='https://cdn.shulex-voc.com/shulex/upload/2024-06-28/1eb69cab-1135-4e1b-9e02-38204c7aeec9.jpg'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact