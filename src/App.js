import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";
import Portfolio from "./Components/Portfolio";
// import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  return (
    <>
      <ToastContainer theme="dark" position="top-center" />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
