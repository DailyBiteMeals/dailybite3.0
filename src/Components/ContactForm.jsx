import React from 'react';
import './CSS/ContactForm.css';

const ContactForm = () =>
{

    fetch( "https://api.apispreadsheets.com/data/M0t7rhFw6LOUQNoo/", {
        method: "POST",
        body: JSON.stringify( { "data": { "Name": "", "Email": "", "Message": "" } } ),
    } ).then( res =>
    {
        if ( res.status === 201 )
        {
            // SUCCESS
        }
        else
        {
            // ERROR
        }
    } )


    return (


        < div className="contact-form-container" >
            <h3>Who says money can't buy you happiness,</h3>
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

export default ContactForm;
