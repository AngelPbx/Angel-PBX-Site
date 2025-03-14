import CircularLoader from '@/components/CircularLoader';
import { generalPostFunction } from '@/components/GlobalFunction';
import e from 'cors';
import React, { useState, useEffect } from 'react'

function contact() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile_number: "",
    address: "",
    // message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field as user types
    validateField(name, value);
  };

  // Validation function
  const validateField = (name, value) => {
    let error = "";

    if (name === "firstname") {
      if (!value.trim()) error = "First name is required";
      else if (value.length < 3) error = "First name must be at least 3 characters";
    }

    if (name === "lastname") {
      if (!value.trim()) error = "Last name is required";
      else if (value.length < 3) error = "Last name must be at least 3 characters";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
    }

    if (name === "mobile_number") {
      if (!value.trim()) error = "Mobile number is required";
      else if (!/^\+?[1-9]\d{0,2}[-\s]?\d{6,14}$/.test(value)) error = "Mobile number must be a valid international format";
    }

    if (name === "address") {
      if (!value.trim()) error = "Address is required";
      else if (value.length < 10) error = "Address must be at least 10 characters";
    }

    // Update errors state
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Handle blur event (validate when user leaves input)
  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  // Validate all fields and check if form is valid
  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error);
    const allFieldsFilled = Object.values(formData).every((value) => value.trim() !== "");

    setIsFormValid(!hasErrors && allFieldsFilled);
  }, [errors, formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);

    // Re-check validation before submission
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) newErrors[key] = errors[key];
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await generalPostFunction("site-message", formData);

      if (res.status) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile_number: "",
          address: "",
        }); // Reset form
        setErrors({});
        setIsFormValid(false);
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          {loading ? <CircularLoader /> : ""}
          <p className='text-center text-white'>
            {responseMessage ? responseMessage : ""}
          </p>
          <div className="row align-items-center justify-content-center">
            <div className='col-md-7 '>

              <div className='contact-form'>
                <div class="content text-center mb-5">
                  <h1 style={{ color: "white" }}>Contact me</h1>
                </div>
                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                      className="form-control"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='error-message'>{errors?.firstname ? errors.firstname : ""}</p>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                      className="form-control"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='error-message'>{errors?.lastname ? errors.lastname : ""}</p>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="email">Email:</label>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='error-message'>{errors?.email ? errors.email : ""}</p>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="mobile_number">Mobile Number:</label>
                    <input
                      className="form-control"
                      name="mobile_number"
                      type="tel"
                      value={formData.mobile_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className='error-message'>{errors?.mobile_number ? errors.mobile_number : ""}</p>
                  </div>

                  <div className='mt-2'>
                    <label htmlFor="address">Address:</label>
                    <div>
                      <textarea
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <p className='error-message'>{errors?.address ? errors.address : ""}</p>
                    </div>
                  </div>

                  <div className="text-end mt-3">
                    <button
                      type="submit"
                      className="btn btn-md btn-primary"
                      disabled={!isFormValid || loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
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