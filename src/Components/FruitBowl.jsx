import React from "react";
import "./CSS/FruitBowl.css";
import FruitBowlVideo from "../Asset/DailyBite FruitBowl Video.mp4";
import FruitbowlVertical from "../Asset/DailyBite FruitSplash.png";
import fruitBowlTypo from "../Asset/Fruit Bowl typo.png";

const FruitBowl = () =>
{
  return (
    <div className="container-fruit">
      <div className="section-fruit section-1-fruit">
        {/* Video player goes here */ }
        <video autoPlay muted loop >
          <source src={ FruitBowlVideo } type="video/mp4" />
        </video>
      </div>
      <div className="section-fruit section-2-fruit">
        <img src={ fruitBowlTypo } alt="FruitBowlDailyBite" />
        <p>Get Your Dose of Natural Sweetness, Fibre, Vitamins, and immune-boosting Antioxidants Overflowing with Apple, Orange, Banana, Grape, Pineapple, Papaya, Watermelon, Strawberry, Kiwi, Mango, Dry Fruits and Honey.</p>
        <div className="rectangles-container-fruit">
          <div className="rectangle-fruit">
            <h3>Standard fruit bowl</h3>
            <p>Only @ Rs. 49</p>
          </div>
          <div className="rectangle-fruit">
            <h3>Premium Fruit Bowl</h3>
            <p>Only @ Rs. 119</p>
          </div>
        </div>
      </div>
      <div className="section-fruit section-3-fruit">
        {/* Vertical photo goes here */ }
        <img src={ FruitbowlVertical } alt="VerticalPhoto" />
      </div>
    </div>
  );
};

export default FruitBowl;
