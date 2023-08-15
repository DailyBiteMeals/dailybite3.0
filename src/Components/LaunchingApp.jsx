import React from 'react';
import app from "../Asset/DailyBite App - Coming Soon.png"
import girl from "../Asset/DailyBite 7.png"
import "./CSS/LaunchingApp.css";

const LaunchingApp = () =>
{
    return (
        <div className="containerApp">
            <div className="sectionApp">
                <img src={ girl } alt="DailyBteDeliveryWithMobile" className="imageApp" />
            </div>
            <div className="sectionApp">
                <p className="titleApp">Launching App<br></br> Soon
                </p>
                <p className="descriptionApp">We are super excited to put you in control, with hundreds of options to choose your Dessert, Papad/Namkeen, Dry Subji, Gravy Subji and Rice. All designed to fit seamlessly into your busy corporate lifestyle. Stay tuned for the launch of our app, and get ready to savour the future of corporate meal delivery!"
                </p>
            </div>
            <div className="sectionApp">
                <img src={ app } alt="DailybiteApp" className="imageApp" />
            </div>
        </div>
    )
}


export default LaunchingApp;