/* eslint-disable @next/next/no-img-element */
import CircularLoader from "@/components/CircularLoader";
import { generalPostFunction } from "@/components/GlobalFunction";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email,setEmail]=useState()
  const [pass,setPass]=useState()
  const [loading,setLoading]=useState(false)
  async function handleLogin(){
    if(email==="" || !email.includes("@") || !email.includes(".")){
      toast.error("Please enter a valid email ")
    }else if(pass==="" || pass.length<4){
      toast.error("Password must be at lease 4 character")
    }else{
      setLoading(true)
      const parsedData = {
        email:email,
        password:pass
      }
      const apiData = await generalPostFunction("account-login",parsedData)
      if(apiData.status){
        setLoading(false)
        localStorage.setItem("token",apiData.token)
        dispatch({
          type:"SET_TOKEN",
          token:apiData.token
        })
        toast.success(apiData.message)
        router.push({
          pathname:"/dashboard"
        })
      }else{
        setLoading(false)
        toast.error(apiData.message)
      }
    }
    
  }
  
  return (
    <>
      <section className="loginPanel">
        <div className="imgWrapper">
          <img src="/assets/images/5570879.jpg" alt="" />
        </div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="wrapper m-auto col-xl-4">
              <div className="formItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="formItem">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter your Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
              </div>
              <div onClick={handleLogin}>
                <a className="serviceBtn w-100">Sign In</a>
              </div>
            </div>           
          </div>
          {loading?<CircularLoader />:""}
        </div>
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
    </>
  );
}

export default Login;
