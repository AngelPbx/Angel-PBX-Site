/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { authGetFunction, generalGetFunction, logOutFunction } from "./GlobalFunction";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter()
  const [dropDown, setDropDown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [login, setLogin] = useState(false);
  const wrapperRef = useRef(null);
  const [token, setToken] = useState();
  const data = useSelector((state) => state.token);
  const dispatch = useDispatch()
  // console.log("This is data", token);
  useEffect(() => {
    if (data === "" || data === undefined || data === null) {
      const loclData = localStorage.getItem("token");
      if (loclData) {
        setLogin(true);
        setToken(loclData);
        dispatch({
          type:"SET_TOKEN",
          token:loclData
        })
      } else {
        setLogin(false);
        setToken("");
      }
    } else {
      setLogin(true);
      setToken(data);
    }
    setIsMounted(true);
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [data, dispatch]);
  const toggleDropdown = () => {
    setDropDown((prevState) => !prevState);
  };

  if (!isMounted) {
    // Render a placeholder or nothing during SSR
    return null;
  }

  async function handleLogOut(){
    const apiData = await authGetFunction("auth/account-logout",token)
    if(apiData.status){
      toast.success(apiData.message)
    }
    dispatch({
      type:"SET_TOKEN",
      token:""
    })
    localStorage.clear()
    router.push({pathname:"/"})
  }
  return (
    <>
      <section className="header">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-xl-10 col-6">
              <div className="wrapper">
                <div className="brand">
                  <Link href="/">
                    <img
                      src="/assets/images/logo.webp"
                      alt="LOGO"
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link href="/">Products</Link>
                  </li>
                  <li>
                    <Link href="/">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/price">Plans &amp; Pricing</Link>
                  </li>
                  <li>
                    <Link href="/">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-6 d-flex">
              <div style={{ width: "max-content", marginRight: 20 }}>
                <Link href="tel:000" className="serviceBtn m-0">
                  Call Sales
                </Link>
              </div>
              <p
                style={{cursor:"pointer"}}
                onClick={toggleDropdown}
                className="profileHolderHeader"
              >
                <p>
                  <i className="fa-solid fa-user"></i>
                </p>
              </p>
              {dropDown && (
                <div ref={wrapperRef} className="profileDropdown">
                  {login && (
                    <div  onClick={()=>{toggleDropdown()}}>
                      <label className="me-2">
                        <i className="fa-duotone fa-user" />
                      </label>
                      <Link href="/dashboard">My Profile</Link>
                    </div>
                  )}
                  {/* <div>
                    <label className="me-2">
                      <i className="fa-duotone fa-lock" />
                    </label>
                    <a href="/change-password">Change Password</a>
                  </div> */}
                  {login?<div
                    style={{cursor:"pointer"}}
                    className="d-flex justify-content-center"
                    onClick={()=>{toggleDropdown();handleLogOut()}}
                  >
                    <a className="logoutBtn">
                      <i className="fa-solid fa-power-off me-1" /> Logout
                    </a>
                  </div>:<Link href="/login"
                    className="d-flex justify-content-center"
                    onClick={toggleDropdown}
                  >
                    <p className="logoutBtn">
                      <i className="fa-solid fa-power-off me-1" /> Login
                    </p>
                  </Link>}
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
