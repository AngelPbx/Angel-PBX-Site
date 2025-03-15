/* eslint-disable @next/next/no-img-element */
import CircularLoader from "@/components/CircularLoader";
import { imageUploadFunction } from "@/components/GlobalFunction";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DocumentUpload() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      if (!id) {
        router.push({ pathname: "/" });
      }
    }
  }, [id, router]);

  const [formData, setFormData] = useState({
    reg: null,
    tin: null,
    moa: null,
  });
  const [formDataError, setFormDataError] = useState({
    reg: false,
    tin: false,
    moa: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target?.files?.[0],
    }));

    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 1024 * 1024) {
      setFormDataError((prevDat) => ({
        ...prevDat,
        [name]: false,
      }));
    } else {
      setFormDataError((prevDat) => ({
        ...prevDat,
        [name]: true,
      }));
    }
  }
  async function handleSubmit() {
    if (formDataError.tin || formDataError.reg || formDataError.moa) {
      toast.error("Image size must be less then 1 MB");
    } else if (!formData.reg) {
      toast.error("Please upload reg image");
    } else if (!formData.tin) {
      toast.error("Please upload TIN image");
    } else if (!formData.moa) {
      toast.error("Please upload MOA image");
    } else {
      setLoading(true);
      const parsedData = {
        account_id: id,
        registration_path: formData.reg,
        tin_path: formData.tin,
        moa_path: formData.moa,
      };
      const apiData = await imageUploadFunction(
        "account-detail/stores",
        parsedData
      );
      if (apiData.status) {
        dispatch({
          type: "SET_THANKYOUMESSAGE",
          thankYouMessage:
            "Your Response is recorder, after document verification you will get an mail for further process. ",
        });
        router.push({ pathname: "/thank-you" });
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(apiData.message);
      }
    }
  }
  return (
    <div className="main">
      <section className="loginPanel">
        <div className="imgWrapper">
          <img src="/assets/images/5570879.jpg" alt="" />
        </div>
        <form className="container h-100">
          <div className="row h-100 justify-content-center">
            {/* Create an Account Form (If Required)  || Remove the "d-none" className to make it visible*/}
            <div className="col-xl-4 my-auto">
              <div className="wrapper" id="register">
                <div className="formItem d-flex">
                  <div className="col-10 me-2">
                    <label htmlFor="">Reg </label>
                    <label for="file-upload1" className="custom-file-upload">
                      {formData.reg ? (
                        formData.reg.name
                      ) : (
                        <>
                          {" "}
                          <i className="fa-solid fa-upload me-1"></i> Upload your
                          Document
                        </>
                      )}
                    </label>
                    <input
                      id="file-upload1"
                      type="file"
                      name="reg"
                      accept="image/*"
                      onChange={handleChange}
                    />
                    {formDataError.reg ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        <i className="fa-solid fa-triangle-exclamation"></i> Image
                        should be less than 1 MB
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="docImgPlaceholder mt-auto">
                    {formData.reg && (
                      <img
                        src={URL.createObjectURL(formData.reg)}
                        alt="Selected"
                      />
                    )}
                  </div>
                </div>
                <div className="formItem d-flex">
                  <div className="col-10 me-2">
                    <label htmlFor="">Tin</label>
                    <label for="file-upload2" className="custom-file-upload">
                      {formData.tin ? (
                        formData.tin.name
                      ) : (
                        <>
                          {" "}
                          <i className="fa-solid fa-upload me-1"></i> Upload your
                          Document
                        </>
                      )}
                    </label>
                    <input
                      id="file-upload2"
                      type="file"
                      name="tin"
                      accept="image/*"
                      onChange={handleChange}
                    />
                    {formDataError.tin ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        <i className="fa-solid fa-triangle-exclamation"></i> Image
                        should be less than 1 MB
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="docImgPlaceholder mt-auto">
                    {formData.tin && (
                      <img
                        src={URL.createObjectURL(formData.tin)}
                        alt="Selected"
                      />
                    )}
                  </div>
                </div>
                <div className="formItem d-flex">
                  <div className="col-10 me-2">
                    <label htmlFor="">Moa</label>
                    <label for="file-upload3" className="custom-file-upload">
                      {formData.moa ? (
                        formData.moa.name
                      ) : (
                        <>
                          {" "}
                          <i className="fa-solid fa-upload me-1"></i> Upload your
                          Document
                        </>
                      )}
                    </label>
                    <input
                      id="file-upload3"
                      type="file"
                      name="moa"
                      accept="image/*"
                      onChange={handleChange}
                    />
                    {formDataError.moa ? (
                      <span style={{ color: "red", fontSize: 12 }}>
                        <i className="fa-solid fa-triangle-exclamation"></i> Image
                        should be less than 1 MB
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="docImgPlaceholder mt-auto">
                    {formData.moa && (
                      <img
                        src={URL.createObjectURL(formData.moa)}
                        alt="Selected"
                      />
                    )}
                  </div>
                </div>
                <div onClick={handleSubmit}>
                  <p className="serviceBtn w-100">Next</p>
                </div>
              </div>
            </div>
          </div>
          {loading ? <CircularLoader /> : ""}
        </form>
      </section>
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

export default DocumentUpload;
