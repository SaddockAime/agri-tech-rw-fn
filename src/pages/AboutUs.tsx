/* eslint-disable */
import React from "react";
import { Meta } from "../components/Meta";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ShoppingBasket, Package, Utensils } from "lucide-react";
import { Sprout, Store, Truck, Users, CheckCircle } from "lucide-react";
import Marquee from "react-fast-marquee";

export const AboutUs = () => {
  const teamMembers = [
    {
      name: "Aime Patrick",
      image:
        "https://res.cloudinary.com/dqugc36zh/image/upload/v1724652456/xrpxq1tvvzi4hza3ewjh.jpg",
      position: "Full Stack Developer",
      linkedIn: "www.linkedin.com/in/aime-patrick-393ba5226",
      github: "https://github.com/Aime-Patrick",
    },
    {
      name: "Mr David",
      image:
        "https://res.cloudinary.com/dlhivvi0h/image/upload/v1723652835/david/david-profile.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/programmerdatch/",
      github: `https://github.com/ProgrammerDATCH`,
    },
    {
      name: "Saddock Kabandana",
      image:
        "https://res.cloudinary.com/djrmfg6k9/image/upload/v1723551875/SaddockAime1_bqtq7b.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/saddock-kabandana-89b914237/",
      github: "https://github.com/SaddockAime",
    },
    {
      name: "Ishimwe Jean Baptiste",
      image: "https://i.ibb.co/ZNq8hhb/hb.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/hbapte",
      github: "https://github.com/hbapte",
    },
    {
      name: "Ndahimana Bonheur",
      image:
        "https://res.cloudinary.com/dpu6ljn5c/image/upload/v1723665699/white_passport_ku69ot.jpg",
      position: "Junior Software Developer",
      linkedIn: "https://www.linkedin.com/in/ndahimana154/",
      github: "https://github.com/ndahimana154",
    },
    {
      name: "Niyonshuti Jean De Dieu",
      image:
        "https://res.cloudinary.com/dqugc36zh/image/upload/v1724653199/mkbxyo83gsbsm40dzpnc.jpg",
      position: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/ndahimana154/",
      github: "https://github.com/ndahimana154",
    },
  ];

  const steps = [
    {
      icon: <Sprout size={48} color="#ffffff" />,
      title: "FOR FARMERS",
      description:
        "A simple way to list and sell produce, access market prices, and connect with verified buyers.",
    },
    {
      icon: <Store size={48} color="#ffffff" />,
      title: "FOR WHOLESALERS",
      description:
        "A convenient platform to source fresh produce directly from farmers at competitive prices.",
    },
    {
      icon: <Truck size={48} color="#ffffff" />,
      title: "FOR TRANSPORTERS",
      description:
        "A space to offer logistics services and facilitate smooth deliveries.",
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
            <div className="paragraph">
              <p>
                We aim to create a seamless and efficient agricultural
                marketplace that ensures fair prices, reduces post-harvest
                losses, and strengthens Rwanda’s food supply chain.
              </p>
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
          {/* <section className="team">
            <h2>Meet the Team</h2>
            <div className="team__members">
              {teamMembers.map((member, index) => (
                <div key={index} className="team__member">
                  <img src={member.image} alt={member.name} />
                  <div className="team__member__desc">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
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
                  </div>
                </div>
              ))}
            </div>
          </section> */}
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
