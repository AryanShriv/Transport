import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Home/AboutUs/AboutUs";
import GetQuote from "./Home/Get Quote/GetQuote";
import Services from "./Home/Services/Services";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader while loading
  }

  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/ContactUs" element={<GetQuote />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
