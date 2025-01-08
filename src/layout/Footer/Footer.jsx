import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextAnimation from "../../components/TextAnimation/TextAnimation";

import footerLogo from "/assets/img/icon/footerlogo.png";

const footerDataArray = [
  {
    className: "footer-info",
    dataAosDelay: "0",
    phone: "(406) 555-0120",
    desp: "",
  },
  {
    className: "footer-menu-one",
    dataAosDelay: "50",
    links: [
      { title: "About", link: "/about" },
      { title: "Service", link: "/service" },
      { title: "Team", link: "/team" },
    ],
  },
  {
    className: "footer-address",
    dataAosDelay: "150",
    address: "901 N Pitt Str., Suite 170 Alexandria, NY, USA",
    email: "example@email.com",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <footer className="footer style-1 footer-bg">
        <div className="container">
          <div className="ak-height-40 ak-height-lg-60"></div>
          <div
            className="footer-email"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
          
            
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="ak-height-35 ak-height-lg-30"></div>
          <div className="footer-logo ">
            <img src={footerLogo}  alt="footer-logo" />
            <div className="ak-height-15 ak-height-lg-10"></div>
          </div>
          <div className="footer-content">
            {footerDataArray.map((item, index) => (
              <div
                key={index}
                className={item.className}
                data-aos="fade-up"
                data-aos-delay={item.dataAosDelay}
                data-aos-duration="500"
              >
                {item.phone && (
                  <>
                    <p className="desp">{item.desp}</p>
                    <div className="ak-height-35 ak-height-lg-30"></div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="heartbeat-icon">
                        <Link to="tel:(406)555-0120">
                          <span className="ak-heartbeat-btn">
                            <img src="/assets/img/icon/phone.svg" alt="..." />
                          </span>
                        </Link>
                      </div>
                      <TextAnimation
                        link={"tel:(406)555-0120"}
                        title={item.phone}
                        classNamePass="phone white"
                      />
                    </div>
                  </>
                )}
                {item.links && (
                  <div className="footer-menu">
                    <p className="menu-title">QUICK LINK</p>
                    {item.links.map((item, idx) => (
                      <TextAnimation
                        key={idx}
                        link={item.link}
                        title={item.title}
                        classNamePass="menu-item white"
                      />
                    ))}
                  </div>
                )}
                {item.address && (
                  <div className="footer-address">
                    <p className="adress-title">LOCATION & CONTACT</p>
                    <Link to="#" className="location">
                      <span className="me-1">
                        <img
                          src="/assets/img/icon/location.svg"
                          alt="Location"
                        />
                      </span>
                      {item.address}
                    </Link>
                    <Link to={`mailto:${item.email}`} className="email">
                      <span className="me-1">
                        <img src="/assets/img/icon/email.svg" alt="Email" />
                      </span>
                      {item.email}
                    </Link>
                    <p className="date">
                      <span className="me-1">
                        <img
                          src="/assets/img/icon/calender.svg"
                          alt="Calendar"
                        />
                      </span>
                      Sun - Thu: Open 24/7
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="copy-right">
            <p className="title  text-hover-animaiton">
              Copyright 2024, All Right reserved
            </p>
            <div className="social-icon">
              <Link to="https://www.facebook.com/">
                <img src="/assets/img/icon/facebookicon.svg" alt="..." />
              </Link>
              <Link to="https://www.linkedin.com/">
                <img src="/assets/img/icon/linkedinicon.svg" alt="..." />
              </Link>
              <Link to="https://www.x.com/">
                <img src="/assets/img/icon/twittericon.svg" alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
