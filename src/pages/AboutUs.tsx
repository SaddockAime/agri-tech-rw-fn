/* eslint-disable */
import React from "react";
import { Meta } from "../components/Meta";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ShoppingBasket, Package, Utensils } from "lucide-react";
import { Sprout, Store, Truck, Users, CheckCircle, Leaf } from "lucide-react";
import Marquee from "react-fast-marquee";

export const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mpuhwezimana Jean Gabriel",
      image:
        "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739474694/WhatsApp_Image_2025-02-13_at_9.24.19_PM_mqkpb9.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in",
      github: `https://github.com/`,
    },
    {
      name: "Saddock Kabandana",
      image:
        "https://res.cloudinary.com/djrmfg6k9/image/upload/v1723551875/SaddockAime1_bqtq7b.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/saddock-kabandana-89b914237/",
      github: "https://github.com/SaddockAime",
    }
  ];

  const steps = [
    {
      icon: <Leaf size={48} color="#2E7D32" />,
      title: "For Farmers",
      description: "List and sell produce, access market prices, connect with buyers.",
    },
    {
      icon: <Store size={48} color="#2E7D32" />,
      title: "For Wholesalers",
      description: "Source fresh produce directly from farmers at competitive prices.",
    },
    {
      icon: <Truck size={48} color="#2E7D32" />,
      title: "For Transporters",
      description: "Offer logistics services and facilitate smooth deliveries.",
    },
  ];


  const stats = [
    { number: "1000+", label: "Farmers Connected", icon: <Users /> },
    { number: "50+", label: "Active Wholesalers", icon: <Store /> },
    { number: "95%", label: "Successful Deliveries", icon: <CheckCircle /> },
  ];

  return (
    <>
      <Meta title="About us - AgriConnect Rwanda" />
      <div className="about">
        <div className="about__container">
          <h1>About AgriConnect Rwanda</h1>
          <section className="welcome">
            <h2>Empowering Farmers, Connecting Markets</h2>
            <div className="paragraph">
              <p>
                <b>AgriConnect Rwanda</b> is a digital platform designed to
                bridge the gap between rural farmers and urban wholesalers,
                making it easier for farmers to sell their produce and for
                wholesalers to buy fresh agricultural products directly from the
                source.
              </p>
            </div>
          </section>
          {/* <section className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item">
                <div className="stats__item-icon">{stat.icon}</div>
                <div className="stats__item-number">{stat.number}</div>
                <div className="stats__item-label">{stat.label}</div>
              </div>
            ))}
          </section> */}
          <section className="mission">
  <h2>Our Mission</h2>
  <div className="mission-grid">
    <div className="mission-item">
      <span className="number">1</span>
      <div className="content">
        <h3>Seamless Marketplace</h3>
        <p>Create an efficient agricultural marketplace.</p>
      </div>
    </div>
    <div className="mission-item">
      <span className="number">2</span>
      <div className="content">
        <h3>Fair Prices</h3>
        <p>Ensure fair prices for farmers.</p>
      </div>
    </div>
    <div className="mission-item">
      <span className="number">3</span>
      <div className="content">
        <h3>Reduce Losses</h3>
        <p>Reduce post-harvest losses.</p>
      </div>
    </div>
    <div className="mission-item">
      <span className="number">4</span>
      <div className="content">
        <h3>Strengthen Supply Chain</h3>
        <p>Strengthen Rwanda's food supply chain.</p>
      </div>
    </div>
  </div>
</section>
<section className="offers">
    <h2>What We Offer</h2>
    <div className="offers__steps">
      {steps.map((step, index) => (
        <div key={index} className="offers__step">
          <div className="offers__step-icon">{step.icon}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
          <section className="works">
            <h2>How It Works</h2>
            <div className="works__list">
              <div className="works__item">
                <span className="works__item-number">1</span>
                <p>Farmers register, list their produce, and set prices.</p>
              </div>
              <div className="works__item">
                <span className="works__item-number">2</span>
                <p>
                  Wholesalers browse available products, compare options, and
                  place orders.
                </p>
              </div>
              <div className="works__item">
                <span className="works__item-number">3</span>
                <p>
                  Transactions are securely processed through mobile money or
                  bank transfers.
                </p>
              </div>
              <div className="works__item">
                <span className="works__item-number">4</span>
                <p>
                  Delivery is arranged either by the farmers, wholesalers, or
                  third-party transporters.
                </p>
              </div>
            </div>
          </section>
          <section className="vision">
            <h2>Our Vision</h2>
            <div className="paragraph">
              <p>
              To revolutionize Rwanda’s agricultural trade by leveraging 
              technology to create a transparent, profitable, and 
              sustainable ecosystem for all stakeholders.
              </p>
            </div>
          </section>
          <section className="team">
  <h2>Meet the Team</h2>
  <div className="team__members">
    {teamMembers.map((member, index) => (
      <div key={index} className="team__member">
        <img src={member.image} alt={member.name} />
        {/* <div className="team__member__desc">
          <div className="team__member__desc__icon">
            {member.linkedIn && (
              <a href={member.linkedIn} target="_blank">
                <FaLinkedin />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank">
                <FaGithub />
              </a>
            )}
          </div>
        </div> */}
        <div className="team__member__info">
          <h3>{member.name}</h3>
          <p>{member.position}</p>
        </div>
      </div>
    ))}
  </div>
</section>
          {/* <section className="get-in-touch">
            <div className="in-touch">
              <button>Get In Touch</button>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};
