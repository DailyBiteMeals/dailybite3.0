import React, { useState, useEffect } from "react";
import "./CSS/Navigation.css";
import logoImage from "../Asset/Logo/DailyBite_logo_1.png";

import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import TrialMeal from "./TrialMeal";
import ViewMenu from "./ViewMenu";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <nav className={scroll ? "scrollNav" : ""}>
        <div className="logo">
          <img src={logoImage} alt="DailyBite Logo" />
        </div>
        {/* <ul className="menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/trial-meal">Trial Meal</a>
          </li>
          <li>
            <a href="/view-menu">View Menu</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul> */}
      </nav>

      <Routes exact path="/" component={Home} />
      <Routes path="/trial-meal" component={TrialMeal} />
      <Routes path="/view-menu" component={ViewMenu} />
      <Routes path="/blog" component={Blog} />
      <Routes path="/contact-us" component={ContactUs} />
    </BrowserRouter>
  );
};

export default Navigation;
