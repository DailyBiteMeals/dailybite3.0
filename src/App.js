import './App.css';
import LandingPage from './Components/LandingPage';
import Navigation from './Components/Navigation';
import CardSlider from './Components/CardSlider';
import FruitBowl from './Components/FruitBowl';
import Features from './Components/Features';
import Poster from './Components/Poster';
import HappyCustomer from './Components/HappyCustomer';
// import TestimonialsSlider from './Components/TestimonialsCombined';
import LaunchingApp from './Components/LaunchingApp';
import Map from "./Components/Map";
import GetInTouchSection from './Components/GetInTouchSection';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import About from './Components/About';
import Animation from './Components/Animation';

function App ()
{
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <About />
      {/* <Animation /> */ }
      <CardSlider />
      <FruitBowl />
      {/* <Poster /> */ }
      <Features />
      <HappyCustomer />
      {/* <TestimonialsSlider /> */ }
      <LaunchingApp />
      <Map />
      <GetInTouchSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
