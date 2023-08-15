import React, { useState, useEffect } from "react";
import image1 from "../Asset/Privilege Meal for slider.png";
import image2 from "../Asset/DailyBite Standard Veg meal for slide.png";
import image3 from "../Asset/fruits-berries-platter-vegan-cuisine.png";
import "./CSS/Slider.css"; // Import the CSS file for styling

const Slider = () =>
{
  const [ currentSlide, setCurrentSlide ] = useState( 0 );

  // Define the slides data
  const slides = [
    {
      image: image1,
      title: "Privilege Meal",
      subtitle: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad + Sweet + Curd + Papad/Pickle/New Addon",
    },
    {
      image: image2,
      title: "Standard Meal",
      subtitle: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad",
    },
    {
      image: image3,
      title: "Premium Fruit Bowl",
      subtitle: "Get Your Dose of Natural Sweetness, Fibre, Vitamins, and immune-boosting Antioxidants Overflowing with Apple, Orange, Banana, Grape, Pineapple, Papaya, Watermelon, Strawberry, Kiwi, Mango, Dry Fruits and Honey."
    },
  ];

  useEffect( () =>
  {
    // Function to automatically slide to the next slide every 3 seconds
    const slideInterval = setInterval( () =>
    {
      setCurrentSlide( ( prevSlide ) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000 );

    // Clear the interval when the component is unmounted or the current slide changes
    return () =>
    {
      clearInterval( slideInterval );
    };
  }, [ currentSlide, slides.length ] );

  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //     );
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //     );
  //   };

  return (
    <div className="slider">
      <div className="slider__image">
        <img src={ slides[ currentSlide ].image } alt="Slider" />
      </div>
      <div className="slider__content">
        <h2 className="slider__title">{ slides[ currentSlide ].title }</h2>
        <p className="slider__subtitle">{ slides[ currentSlide ].subtitle }</p>
      </div>
      <div className="slider__controls">
        {/* <button className="slider__prev" onClick={prevSlide}>
          Previous
        </button>
        <button className="slider__next" onClick={nextSlide}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
