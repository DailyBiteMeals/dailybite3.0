import React from "react";
import "./CSS/LandingPage.css";
import Chef from "../Asset/DailyBite Chef.png";
import Slider from "./Slider";
// import Chef2 from "../Asset/dailybite-chef-woman.png";

const LandingPage = () =>
{
  return (
    <div className="landing-page">
      <div className="column">
        <div className="section section-one">
          <div className="image-with-text">
            <img src={ Chef } alt="ChefImage" className="image" />
            <div className="text-container">
              <div className="vertical-line-with-text">
                <div className="line"></div>
                <div className="content">
                  <div className="text">
                    <div className="daily-bite">
                      <h2 className="title">
                        CHOOSE RIGHT<br></br>
                        <span>
                          DAILYBITE
                        </span>
                      </h2>
                    </div>
                    {/* <h2 className="title">Daily Bite</h2> */ }
                    <p className="subtitle">
                      Because Every WorkDay <br></br>Deserves a DailyBite Treat
                    </p>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="section section-two">
          <div className="image-with-text">
            <div className="text-container">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
