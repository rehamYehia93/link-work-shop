/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      listName: "Company",
      links: [
        {
          id: 1,
          name: "Abouts",
          link: "#",
        },
        {
          id: 2,
          name: "Careers",
          link: "#",
        },
        {
          id: 3,
          name: "Mobile",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      listName: "Contact",
      links: [
        {
          id: 1,
          name: "Help/FAQ",
          link: "#",
        },
        {
          id: 2,
          name: "Press",
          link: "#",
        },
        {
          id: 3,
          name: "Affilates",
          link: "#",
        },
      ],
    },
    {
      id: 3,
      listName: "Media",
      links: [
        {
          id: 1,
          name: "News",
          link: "#",
        },
        {
          id: 2,
          name: "Photo",
          link: "#",
        },
        {
          id: 3,
          name: "Video",
          link: "#",
        },
      ],
    },
  ];
  return (
    <footer className="footer pb-5">
      <div className="container">
        <div class="row  gy-3 gx-2">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <img src="Images/logo.png" alt="Logo" width="157" />
            <p className="footer-desc">
              We make technology produce productive, adaptable and sustainable
              business experiences.
            </p>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-md-3">
            <div className="row">
              {footerLinks.map((itme) => (
                <div class="col" key={itme.id}>
                  <p className="footer-title">{itme.listName}</p>
                  <ul className="footer-links">
                    {itme.links.map((link) => (
                      <li key={link.id} className="footer-link">
                        <a className="nav-link" href={link.link}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 order-lg-3 order-md-2">
            <div className="Soical-icons">
              <span className="Soical-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span className="Soical-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="Soical-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
            <p className="text-center mb-3 mt-5 Discover-title">
              Discover our app
            </p>
            <div className="Discover-container">
              <a href="#">
                <img
                  src="Images/GooglePlay.png"
                  alt="Get it on Google Play"
                  className="Discover-btns"
                />
              </a>
              <a href="#">
                <img
                  src="Images/AppStore.png"
                  alt="Get it on App Store"
                  className="Discover-btns"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-note">
          All rights reserved &copy; Linkdevelopment.com
        </p>
      </div>
      <div className="footer-bg" />
    </footer>
  );
};

export default Footer;
