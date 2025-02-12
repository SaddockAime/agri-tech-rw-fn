/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import leftTop from "../../assets/images/choose-fresh.png";
import rightTop from "../../assets/images/choose-5.png";
import leftBottom from "../../assets/images/choose-3.png";
import rightBottom from "../../assets/images/choose-6.png";
const images = [
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296312/pexels-adonyi-foto-1414651_cxszn0.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296313/pexels-nc-farm-bureau-mark-2478405_ylbtjf.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296313/pexels-nc-farm-bureau-mark-2893635_ydrnbh.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296312/pexels-enginakyurt-10899599_m4k3pz.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296312/pexels-enginakyurt-10899480_eq391j.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296312/pexels-enginakyurt-15428957_qcaz4t.jpg',
  'https://res.cloudinary.com/djrmfg6k9/image/upload/v1739296312/pexels-enginakyurt-15428958_sciaou.jpg',
];

const Sample: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const startImageChangeInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startImageChangeInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startImageChangeInterval();
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="sampleImages1">
        <div className="sample1">
          <div className="menShoe">
            <img src={rightTop} alt="" />
            {/* <div className="text-container">
              <p>women's Shoes</p>
              <button>View &gt;</button>
            </div> */}
          </div>
          <div className="phones">
            <img src={leftBottom} alt="" />
            {/* <div className="text-container">
              <p>Phones</p>
              <button>View &gt;</button>
            </div> */}
          </div>
        </div>
        <div className="sample2">
          <img src={images[currentIndex]} alt="" />
          <div className="arrow left" onClick={handleLeftClick}>
            <FaChevronCircleLeft className="icon-arrow" />
          </div>
          <div className="arrow right" onClick={handleRightClick}>
            <FaChevronCircleRight className="icon-arrow" />
          </div>
          <div className="dots">
            {images.map((_, index) => (
              <GoDotFill
                key={index}
                className="icon-dots"
                style={{ color: currentIndex === index ? '#ff6d18' : '#fff' }}
                onClick={()=>{setCurrentIndex(index)}}
              />
            ))}
          </div>
        </div>
        <div className="sample3">
          <div className="womenShoe">
            <img src={leftTop} alt="" />
            {/* <div className="text-container">
              <p>Men's Shoes</p>
              <button>View &gt;</button>
            </div> */}
          </div>
          <div className="accessories">
            <img src={rightBottom} alt="" />
            {/* <div className="text-container">
              <p>Accessories</p>
              <button>View &gt;</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="trust-container">
        <div className="trust">
          <TfiHeadphoneAlt className="icon" />
          <div className="name">
            <h2>Responsive</h2>
            <p>Customer service available 24/7</p>
          </div>
        </div>
        <div className="trust">
          <VscWorkspaceTrusted className="icon" />
          <div className="name">
            <h2>Secure</h2>
            <p>Certified marketplace since 2024</p>
          </div>
        </div>
        <div className="trust">
          <LiaShippingFastSolid className="icon" />
          <div className="name">
            <h2>Shipping</h2>
            <p>Free, fast, and reliable worldwide</p>
          </div>
        </div>
        <div className="trust">
          <FaHandHoldingUsd className="icon" />
          <div className="name">
            <h2>Transparent</h2>
            <p>Free return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;