import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import LoginHome from "../../admin/LoginHome";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  IconButton,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { signInWithGoogle } from "../../firebase";
import { BiUser } from "react-icons/bi";
import mth from "../../images/mth.png";
import "../../style/App.scss";
import { HiMenuAlt2 } from "react-icons/hi";
import { links, social } from "./data.js";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={mth} className="logo-img" alt="" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <HiMenuAlt2 />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialLinks) => {
            const { id, url, icon } = socialLinks;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
