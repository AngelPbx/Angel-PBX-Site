/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { authGetFunction, generalGetFunction, logOutFunction } from "./GlobalFunction";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CircularLoader from "./CircularLoader";
import Image from "next/image";

function Header() {
  const router = useRouter()
  const [dropDown, setDropDown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [login, setLogin] = useState(false);
  const wrapperRef = useRef(null);
  const [token, setToken] = useState();
  const data = useSelector((state) => state.token);
  const [loading, setLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClose, setIsMenuCose] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data === "" || data === undefined || data === null) {
      const localData = localStorage.getItem("token");
      if (localData) {
        setLogin(true);
        setToken(loclData);
        dispatch({
          type: "SET_TOKEN",
          token: loclData
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


  const handleClickClose = () => {
    setIsMenuOpen(false)
  }

  // async function handleLogOut(){
  //   const apiData = await authGetFunction("auth/account-logout",token)
  //   if(apiData.status){
  //     toast.success(apiData.message)
  //   }
  //   dispatch({
  //     type:"SET_TOKEN",
  //     token:""
  //   })
  //   localStorage.clear()
  //   router.push({pathname:"/"})
  // }

  const handleClick = async () => {
    setLoading(true);
    await router.push('/price');
    setLoading(false);
  };



  const handleClickSolution = async () => {
    setLoading(true);
    await router.push('solutions');
    setLoading(false)
  }


  const handleClickResource = async () => {
    setLoading(true);
    await router.push('resources');
    setLoading(false)
  }

  const handleClickContact = async () => {
    setLoading(true);
    await router.push('contact');
    setLoading(false)
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(toggleMenu)
  };


  return (
    <>
      <section className="header">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center justify-content-space-between">
            <div className="col-xl-10 col-lg-10   col-md-9 col-8">
              <div className="wrapper">
                <div className="brand">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo.png"
                      alt="LOGO"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link href="/">Products</Link>
                  </li>
                  <li>
                    <Link href="/solutions" onClick={handleClickSolution}>Solutions</Link>
                  </li>
                  <li>
                    <Link href="/price" onClick={handleClick}>Plans &amp; Pricing</Link>
                  </li>
                  <li>
                    <Link href="/resources" onClick={handleClickResource}>Resources</Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={handleClickContact}>Contact Sales</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-3 text-end ">
              <div className="menubarhide " style={{ width: "max-content", marginRight: 20 }}>
                <a target="_blank" href="https://demo.webvio.in/" className="specialLearn m-0 text-white">
                  Go To App
                </a>
              </div>
              <div className="menubar d-lg-none d-xl-none" style={{ width: "max-content", marginLeft: "20px", fontSize: "20px", boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }} onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
              </div>

              <div className="wrapper-mobile ">
                <div className={`mobile-menu-dropdown ${isMenuOpen ? "active" : ""}`}>
                  <div className=" display-side">
                    <div onClick={handleClickClose}>
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                      <li>
                        <Link href="/">Products</Link>
                      </li>
                      <li>
                        <Link href="/solutions" onClick={handleClickSolution}>Solutions</Link>
                      </li>
                      <li>
                        <Link href="/price" onClick={handleClick}>Plans &amp; Pricing</Link>
                      </li>
                      <li>
                        <Link href="/resources" onClick={handleClickResource}>Resources</Link>
                      </li>
                      <li>
                        <Link href="/contact" onClick={handleClickContact}>Contact Sales</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <p
                style={{cursor:"pointer"}}
                onClick={toggleDropdown}
                className="profileHolderHeader"
              >
                <p>
                  <i className="fa-solid fa-user"></i>
                </p>
              </p> */}
              {/* {dropDown && (
                <div ref={wrapperRef} className="profileDropdown"> */}
              {/* {login && (
                    <div  onClick={()=>{toggleDropdown()}}>
                      <label className="me-2">
                        <i className="fa-duotone fa-user" />
                      </label>
                      <Link href="/dashboard">My Profile</Link>
                    </div>
                  )} */}
              {/* <div>
                    <label className="me-2">
                      <i className="fa-duotone fa-lock" />
                    </label>
                    <a href="/change-password">Change Password</a>
                  </div> */}
              {/* {login?<div
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
                  </Link>} */}

              {/* </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
      {loading ? <CircularLoader /> : ""}
    </>
  );
}

export default Header;
