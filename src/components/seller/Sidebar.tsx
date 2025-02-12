/* eslint-disable */
import React from "react";
import seller_pic from "../../assets/images/Na_Dec_44.jpg";
import logo from "../../assets/images/logo.png";
export const Sidebar = () => {
  return (
    <div className="seller-sidebar">
      <div className="review-card">
        <div className="reviewer">
          <img src={logo} alt="logo" />
          <p>
          agri-Connect <span>Rwanda</span>
          </p>
        </div>
      </div>
      <div className="delivery-info">
        <h1>
          Unlock New Opportunities with AgriConnect Rwanda: The Ultimate
          Marketplace for Growing Your Business!
        </h1>
        <p>
          Join a thriving community of sellers on AgriConnect Rwanda and tap
          into a vast network of potential customers. With our easy-to-use tools
          and dedicated support, you can streamline your operations and maximize
          your sales. Whether you're looking to expand your reach, increase your
          revenue, or connect with more customers, AgriConnect Rwanda is the
          perfect partner for your business success.
          <strong>Sign up today</strong> and start transforming your
          entrepreneurial dreams into reality!
        </p>
      </div>
      <div className="logo">
        <img src={seller_pic} alt="Delivery Logo" />
      </div>
    </div>
  );
};
