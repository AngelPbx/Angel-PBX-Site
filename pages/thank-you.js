/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ThankYou() {
  const router = useRouter();
  const message = useSelector((state) => state.thankYouMessage);
  const invoiceLink = useSelector((state) => state.invoiceLink);
  console.log("This is invoice link",invoiceLink);
  useEffect(() => {
    if (message === null || message === "") {
      router.back();
    }
  }, [message, router]);

  const downloadImage = async (imageUrl, fileName) => {
    console.log("Download Cloick",imageUrl);
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
        .header, footer{
            display:none;
        }
        `}
      </style>
      <section className="thankyou_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="text_box">
                <h1>
                  {" "}
                  Thank You <span> ! </span>{" "}
                </h1>
                <p>{message}</p>
                <img
                  src="/assets/images/thankyou_icon1.png"
                  alt="Mediaringer"
                />
                <div className="d-flex justify-content-center align-items-center">
                  {!(invoiceLink === null) && !(invoiceLink === "") ? (
                    <div>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => downloadImage(invoiceLink, "Invoice")}
                        className="back_tohome me-4"
                      >
                        {" "}
                        <i class="fa-solid fa-arrow-down-to-line me-1"></i>{" "}
                        Download Invoice{" "}
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <Link href="/" className="back_tohome">
                      {" "}
                      <i className="fa-solid fa-arrow-left me-1" /> Back To Home{" "}
                    </Link>
                  </div>
                </div>

                <div className="col-xl-6 col-md-6 col-12">
                  <div className="connect_box">
                    <h5> Connect With Us </h5>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
