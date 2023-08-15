import React from 'react';
import "./CSS/HappyCustomer.css";


// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import logo1 from "../Asset/DailyBite Insnap.png";
import logo2 from "../Asset/DailyBite Keploy.png";
import logo3 from "../Asset/DailyBite Newtral.png";
import logo4 from "../Asset/DailyBite Volt.png";
import logo5 from "../Asset/DailyBite Trigsy.png";

const HappyCustomer = () =>
{
    return (
        <>
            <div className="grid-container2">
                <div class="grid-item2">
                    <p>Our<span>Happy</span><br></br>Customers
                    </p>
                </div>
                <div className="grid-item2">
                    <div class="slidercustomer">
                        <div className="slide-track">
                            <div className="slide">
                                <img src={ logo1 } alt="" />
                            </div>
                            <div className="slide">
                                <img src={ logo2 } alt="" />
                            </div>
                            <div className="slide">
                                <img src={ logo3 } alt="" />
                            </div>
                            <div className="slide">
                                <img src={ logo4 } alt="" />
                            </div>
                            <div className="slide">
                                <img src={ logo5 } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HappyCustomer;