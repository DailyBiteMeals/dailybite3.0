import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./CSS/CardSlider.css";
import image1 from "../Asset/Veg Privilege Meal.png";
import image2 from "../Asset/Non-Veg Privilege Meal.png";
import image3 from "../Asset/Egg Privilige Meal.png";
import image4 from "../Asset/Veg Stanadrd Meal.png";
import image5 from "../Asset/Non-Veg Standard Meal.png";
import image6 from "../Asset/Egg Standard Meal.png";
import image7 from "../Asset/Veg 3in1 Meal.png";
import image8 from "../Asset/Non-Veg 3in1 Meal.png";
import image9 from "../Asset/Egg 3in1 Meal.png";
import image10 from "../Asset/fruitBowl-FrontFace.png";

const CardSlider = () =>
{
  const [ currentSlide, setCurrentSlide ] = useState( 0 );
  const cards = [
    {
      image: image1,
      title: "Privilege Veg Meal",
      subtitle: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad + Sweet + Curd + Papad",
    },
    {
      image: image2,
      title: "Privilege Non-Veg Meal",
      subtitle: "Rice + Dal + 2 Roti + Chicken Gravy + Dry Sabji + Salad Sweet + Curd + Papad",
    },
    {
      image: image3,
      title: "Privilege Egg Meal",
      subtitle: "Rice + Dal + 2 Roti + Egg Curry + Dry Sabji + Salad + Sweet + Curd + Papad",
    },
    {
      image: image4,
      title: "Standard Veg Meal",
      subtitle: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad",
    },
    {
      image: image5,
      title: "Standard Non-Veg Meal",
      subtitle: "Rice + Dal + 2 Roti + Chicken Gravy +Dry Sabji + Salad",
    },
    {
      image: image6,
      title: "Standard Egg Meal",
      subtitle: "Rice + Dal + 2 Roti + Egg Curry + Dry Sabji + Salad",
    },
    {
      image: image7,
      title: "3 in 1 Veg Meal",
      subtitle: "Dal + 4 Roti/Rice + Gravy Sabji",
    },
    {
      image: image8,
      title: "3 in 1 Non-Veg Meal",
      subtitle: "Dal + 4 Roti/Rice + Chicken Gravy",
    },
    {
      image: image9,
      title: "3 in 1 Egg Meal",
      subtitle: " Dal + 4 Roti/Rice + Egg Curry",
    },
    {
      image: image10,
      title: "Fruit Bowl",
      subtitle: "Variety Ranging from Banana, Apple, Orange, Grapes, Watermelon, Papaya, Mango, Pineapple and Many seasonal fruits",
    },
    // Add more card objects here
  ];

  useEffect( () =>
  {
    const interval = setInterval( () =>
    {
      setCurrentSlide( ( prevSlide ) => ( prevSlide + 1 ) % cards.length );
    }, 3000 ); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval( interval );
  }, [ cards.length ] );

  return (
    <div className="card-slider">
      <div
        className="slider-wrapper"
        style={ {
          transform: `translateX(-${currentSlide * ( 1000 / cards.length )}%)`,
        } }
      >
        { cards.map( ( card, index ) => (
          <Card
            key={ index + cards.length }
            image={ card.image }
            title={ card.title }
            subtitle={ card.subtitle }
          />
        ) ) }
        {/* Duplicate the cards to create an infinite loop */ }
        { cards.map( ( card, index ) => (
          <Card
            key={ index + cards.length }
            image={ card.image }
            title={ card.title }
            subtitle={ card.subtitle }
          />
        ) ) }
      </div>
    </div>
  );
};

export default CardSlider;
