import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Testimonial />
    <Contact />
   <Footer/>
    </>
  );
}

export default App;
