import React from 'react';
import './CSS/ContactForm.css';
import mealInoffice from "../Asset/DailyBite Corporate Meals.jpg"
import "./CSS/About.css";

const About = () =>
{
    return (
        <div className="about-container">
            <div className="about-left-section">
                <p>India's First Personalised Daily Corporate Meal Delivery Platform</p>

            </div>
            <div className="about-right-section">
                <img src={ mealInoffice } alt="Platform" />
            </div>
        </div>
    );
};

export default About;
