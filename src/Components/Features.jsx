import React from 'react';
import './CSS/Features.css'; // You can create your own CSS file for styling
import icon1 from '../Asset/F1.png';
import icon2 from '../Asset/F2.png';
import icon3 from '../Asset/F3.png';
import icon4 from '../Asset/F4.png';
import icon5 from '../Asset/F5.png';
import icon6 from '../Asset/F6.png';
import deliveryBoy from '../Asset/DailyBite 5.png'

const Features = () =>
{
  return (
    <div className="container-feature">
      <div className="feature-section">
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon1 }
          title="One Click Customization"
          subtitle="Your cravings, your way - just a click to create your ideal meal."

        />
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon2 }
          title="Pause or Cancel Anytime"
          subtitle="Life's unpredictable? No problem. Flexibility at your fingertips."

        />
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon3 }
          title="Healthy Meal"
          subtitle="Every bite, a step toward a healthier you."
        />
      </div>
      <div className="image-section-feature">
        <img src={ deliveryBoy } alt="DeliveryBoyImage" />
      </div>
      <div className="feature-section">
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon4 }
          title="Ghar Jaisa Khana"
          subtitle="Delivering the comfort of home-cooked meals, straight to your workspace."

        />
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon5 }
          title="Free Delivery"
          subtitle="Nourishment comes with no extra cost - enjoy free delivery with every order."
        />
        <Feature
          iconBgColor="#E4E5E5"
          icon={ icon6 }
          title="Daily On-Time Delivery"
          subtitle="Expect your meal right on time, every single day."

        />
      </div>
    </div>
  );
};

const Feature = ( { iconBgColor, icon, title, subtitle } ) =>
{
  return (
    <div className="feature">
      <div className="icon" style={ { backgroundColor: iconBgColor } }>
        <img src={ icon } alt="Icon" className="feature-icon" />
      </div>
      <div className="feature-details">
        <h2 className="feature-title">{ title }</h2>
        <p className="feature-subtitle">{ subtitle }</p>
      </div>
    </div>
  );
};


export default Features;
