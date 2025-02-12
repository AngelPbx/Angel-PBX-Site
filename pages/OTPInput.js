import {
  generalGetFunction,
  generalPostFunction,
} from "@/components/GlobalFunction";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const OTPInput = ({ email, id, leadId }) => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [timer, setTimer] = useState(30); // Countdown timer (seconds)
  const inputs = useRef([]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index] !== "") {
        newOtp[index] = ""; // Clear current input
      } else if (index > 0) {
        newOtp[index - 1] = ""; // Clear previous input if current is empty
        inputs.current[index - 1].focus();
      }
      setOtp(newOtp);
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === length) {
      try {
        const res = await generalGetFunction(
          `verify-lead-email?lead_id=${leadId}&otp=${enteredOtp}`
        );
        if (res.status) {
          dispatch({
            type: "SET_THANKYOUMESSAGE",
            thankYouMessage:
              "Your Response is recorder, you will get a mail for document Upload ",
          });
          router.push({
            pathname: `/payment`,
            query: { id: id, leadId: leadId },
          });
        }
      } catch (error) {
        console.error("OTP Verification Error:", error);
      }
    } else {
      alert("Please enter a valid OTP.");
    }
  };

  const handleRegenerateOtp = () => {
    setOtp(Array(length).fill("")); // Clear OTP
    setTimer(30); // Reset timer
    inputs.current[0].focus(); // Refocus on the first input
    try {
      const parsedData = {
        lead_id: leadId,
      };
      const res = generalPostFunction(`regenerate-otp`, parsedData);
    } catch (error) {
      console.error("OTP Verification Error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Enter OTP</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            style={{
              width: "40px",
              height: "50px",
              fontSize: "20px",
              textAlign: "center",
              border: "2px solid #007bff",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#28a745",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit OTP
      </button>

      <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        {timer > 0 ? `OTP expires in ${timer}s` : "OTP expired!"}
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={handleRegenerateOtp}
          disabled={timer > 0}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: timer > 0 ? "#ccc" : "#dc3545",
            color: "white",
            fontSize: "14px",
            cursor: timer > 0 ? "not-allowed" : "pointer",
          }}
        >
          Regenerate OTP
        </button>
      </div>
    </div>
  );
};

export default OTPInput;
