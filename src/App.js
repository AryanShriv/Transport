import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Home/AboutUs/AboutUs';
import FAQ from './Home/FAQ/FAQ';
import GetQuote from './Home/Get Quote/GetQuote';
import Hero from './Home/Hero/Hero';
import Services from './Home/Services/Services';
import Testimonials from './Home/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <AboutUs/>
      <GetQuote/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
