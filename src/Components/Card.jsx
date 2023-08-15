import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';

const Card = ( { image, title, subtitle } ) => (
  <div className="card">
    <img src={ image } alt={ title } className="card-image" />
    <h2 className="card-title">{ title }</h2>
    <p className="card-subtitle">{ subtitle }</p>
    {/* Know More <FaArrowRight className="arrow-icon" /> */ }

  </div>
);

export default Card;
