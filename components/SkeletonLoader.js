import React from "react";

function SkeletonLoader() {
  return (
    <>
      <div className="pricing_box">
        <h3>
          <div className="skeleton skeleton-heading"></div>
        </h3>
        <p>
          <div className="skeleton skeleton-text"></div>
        </p>
        <h5>
          {" "}
          <del className="skeleton skeleton-del"></del>
          <div className="skeleton skeleton-save"></div>
        </h5>
        <h2>
          <span className="skeleton skeleton-price"></span>
        </h2>
        <div className="skeleton skeleton-button"></div>
        <p className="skeleton skeleton-text"></p>
        <div className="border_line"></div>
        <div className="feture_list">
          <h4 className="skeleton skeleton-text2"></h4>
          <ul>
            <li>
              <p className="skeleton skeleton-text3"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text3"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text4"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text3"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text4"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text3"></p>
            </li>
            <li>
              <p className="skeleton skeleton-text4"></p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SkeletonLoader;
