import React from 'react';
import './CSS/GetInTouchSection.css'; // Import your CSS file

import yourTopImageSrc from '../Asset/DailyBite Food Vector.png'
import phoneIcon from '../Asset/DailyBite Phone.png'; // Import your image files
import AddressIcon from "../Asset/DailyBite Address.png";
import whatsappIcon from '../Asset/Dailybite WhatsApp.png';
import emailIcon from '../Asset/DailyBite Mail.png';
import socialMediaIcon1 from '../Asset/DailyBite Instagram.png';
import socialMediaIcon2 from '../Asset/DailyBite Facebook.png';
import socialMediaIcon3 from '../Asset/DailyBite Twitter.png';
import socialMediaIcon4 from '../Asset/DailyBite Youtube.png'
// Import other social media icons

const GetInTouchSection = () =>
{
    return (
        <div className="get-in-touch-container">
            <div className="top-section">
                <img src={ yourTopImageSrc } alt="Dailybite Homely Healthy Food COlour doodle" />
            </div>
            <div className="bottom-section">
                <div className="left-section">
                    <h2>Contact us!</h2>
                    <p>Reach out through our contact form and <br></br>our team will get back to you shortly.</p>
                </div>
                <div className="right-section">
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={ phoneIcon } alt="Phone Icon" />
                            <a href="tel:+918660203805">+91 86602 03805</a>
                        </div>
                        <div className="contact-item">
                            <img src={ AddressIcon } alt="EDailybite-Address" />
                            17, 24th Main Rd, 3rd Cross Rd, Agara
                            Village, 1st Sector, HSR Layout,
                            Bengaluru, Karnataka 560102

                        </div>
                        <div className="contact-item">
                            <img src={ whatsappIcon } alt="WhatsApp Icon" />
                            <a href="https://wa.me/918660203805">WhatsApp +91 86602 03805</a>
                        </div>
                        <div className="contact-item">
                            <img src={ emailIcon } alt="Email Icon" />
                            <a href="mailto:info@dailybite.in">info@dailybite.in</a>
                        </div>
                        {/* Add other contact items */ }
                    </div>
                    <div className="social-media-icons">
                        <a href='https://instagram.com/dailybite.meal?igshid=YTQwZjQ0NmI0OA==' ><img src={ socialMediaIcon1 } alt="DailyBite Instagram" /></a>


                        <a href='https://www.facebook.com/profile.php?id=100093328969581'>
                            <img src={ socialMediaIcon2 } alt="Dailybite FaceBook" /></a>

                        <a href='https://twitter.com/dailybitemeal?t=WuNdpD8HcSJozDFdOYLWiQ&s=09'>
                            <img src={ socialMediaIcon3 } alt="DailyBite Twitter" /></a>

                        <a href='https://youtube.com/@dailybitemeal?si=5rBi-dGq8L5-hBPl'>
                            <img src={ socialMediaIcon4 } alt="DailyBite Youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetInTouchSection;
