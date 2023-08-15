import React from 'react';
import './CSS/Footer.css'; // Import your CSS file

// import CallinGirl from '../Asset/DailyBite 9.png'

const Footer = () =>
{
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-contact-details">
                    {/* Icons and contact details */ }
                    {/* Example: */ }
                    <div className="footer-contact-icon">
                        <i className="fas fa-phone"></i>
                        {/* <span>Contact No: 123-456-7890</span> */ }
                    </div>
                    {/* Add other contact details similarly */ }
                </div>
                <div className="footer-social-icons">
                    {/* Social media icons */ }
                    {/* Example: */ }
                    {/* <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i> */}
                    {/* Add other social media icons similarly */ }
                </div>
            </div>
            <div className="footer-section">
                {/* 2nd section links */ }
                {/* Example: */ }
                {/* <a className="footer-link">Link 1</a>
                <a className="footer-link">Link 2</a> */}
                {/* Add other links similarly */ }
            </div>
            <div className="footer-section">
                {/* 3rd section links */ }
                {/* Example: */ }
                {/* <a className="footer-link">Link 3</a>
                <a className="footer-link">Link 4</a> */}
                {/* Add other links similarly */ }
            </div>
            <div className="footer-section">
                {/* 4th section image */ }
                {/* <img src={ CallinGirl } alt="Footer Image" className="footer-image" /> */ }
            </div>
           
        </footer>
    );
};

export default Footer;
