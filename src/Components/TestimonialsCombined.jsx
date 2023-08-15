// src/TestimonialsCombined.js
import React, { useState, useEffect } from 'react';
import "../Components/CSS/Testimonials.css"

import photo from "../Asset/DailyBite 3.png"

const testimonials = [
  {
    id: 1,
    photo: photo,
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    feedbackTitle: 'Great Experience',
  },
  {
    id: 2,
    photo: photo,
    name: 'Jane Smith',
    description: 'Nulla facilisi. Integer tincidunt auctor quam, ut hendrerit odio consequat eget.',
    feedbackTitle: 'Highly Recommended',
  },
  // Add more testimonials here...
];

const TestimonialSlide = ( { testimonial } ) => (
  <div className="testimonial-slide">
    <div className="testimonial-photo">
      <img src={ testimonial.photo } alt={ testimonial.name } />
    </div>
    <div className="testimonial-details">
      <div className="profile">

        <div className="profile-name">{ testimonial.name }</div>
        <div className="profile-description">{ testimonial.description }</div>
      </div>
      <div className="feedback-title">{ testimonial.feedbackTitle }</div>
    </div></div>
);

const TestimonialsSlider = () =>
{
  const [ activeIndex, setActiveIndex ] = useState( 0 );

  useEffect( () =>
  {
    const interval = setInterval( () =>
    {
      setActiveIndex( ( prevIndex ) => ( prevIndex + 1 ) % testimonials.length );
    }, 3000 ); // Change slide every 5 seconds

    return () => clearInterval( interval );
  }, [] );

  return (
    <div className="testimonials-slider">

      <TestimonialSlide testimonial={ testimonials[ activeIndex ] } />

      <p><span>FooD</span>Back</p>

    </div>
  );
};

export default TestimonialsSlider;
