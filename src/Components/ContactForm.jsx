import React from 'react';
import './CSS/ContactForm.css';

const ContactForm = () =>
{
    return (
        <div className="contact-form-container">
            <h3>Who says money can't buy you happiness,</h3>
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
