"use client"
import About from "./Components/About";
import CTASection from "./Components/CTASection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <>

      <Navbar />

      
        <Hero />
      
      
        <About />
      
      <section id="skills">
        <Skills />
      </section>
      <Projects/>
      <CTASection/>
      <Footer/>

      
      
    </>
  );
}
