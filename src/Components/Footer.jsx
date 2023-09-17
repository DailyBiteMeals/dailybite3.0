import React from 'react';
import "./CSS/Footer.css";
import logo from '../Asset/Logo/DailyBite_logo_2.png';
import contactImage from '../Asset/DailyBite 8.png';

function Footer ()
{
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-columns">
                    {/* Column 1 */ }
                    <div className="footer-column">
                        <img src={ logo } alt="Company Logo" />
                        <address>17, 24th Main Rd, 3rd Cross Rd, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</address>
                        <p>+91 86602 03805</p>
                        <p>info@dailybite.in</p>
                        {/* Add social media icons here */ }
                    </div>
                    {/* Column 2 */ }
                    {/* <div className="footer-column">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Link 2</a></li>
                            <li><a href="/">Link 3</a></li>
                            <li><a href="/">Link 4</a></li>
                            <li><a href="/">Link 5</a></li>
                        </ul>
                    </div> */}
                    {/* Column 3 */ }
                    <div className="footer-column">
                        <ul>
                            <li><a href="https://wa.me/918660203805">Whats App</a></li>

                            <li><a href="https://www.linkedin.com/company/daily-bite/">LinkdIn</a></li>

                            <li><a href="https://instagram.com/dailybite.meal?igshid=YTQwZjQ0NmI0OA==">Instagram</a></li>

                            <li><a href="https://youtube.com/@dailybitemeal?si=5rBi-dGq8L5-hBPl">Youtube</a></li>

                            <li><a href="https://www.facebook.com/profile.php?id=100093328969581">Facebook</a></li>
                            
                            <li><a href="https://twitter.com/dailybitemeal?t=WuNdpD8HcSJozDFdOYLWiQ&s=09">Twitter</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */ }
                    <div className="footer-column">
                        <img src={ contactImage } alt="DailyBite - Meal Delivery"
                            width={ 250 } />
                    </div>
                </div>
                {/* Copyright section */ }
                <div className="copyright">
                    &copy; { new Date().getFullYear() } DailyBite. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
