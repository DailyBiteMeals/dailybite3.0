import React from 'react';
import "./CSS/Map.css";
import FoodDoodle from "../Asset/DailyBite Food Doodle.png";

export default function Map ()
{
    return (
        <div className="containerMap">
            <div className="map-section">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.027518170549!2d77.59456231434699!3d12.971598599720112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1673c01a3ecd%3A0x2a3e2b032d34fc8b!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1566917286508!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen=""
                ></iframe>
            </div>
            <div className="delivery-section">
                <p>Now we are delivering in
                    <br></br>
                    <span>Bangalore!
                    </span>
                </p>
                <img
                    src={ FoodDoodle }
                    alt="DailyBite Healthy Food Doodle"
                />
            </div>
        </div>

    )
}
