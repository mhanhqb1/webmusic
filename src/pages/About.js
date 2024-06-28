import React from 'react';
import AboutInformation from "../components/about/AboutInformation";
import AboutRelease from "../components/about/AboutRelease";
import AboutTechnology from "../components/about/AboutTechnology";
import AboutSolution from "../components/about/AboutSolution";
import Platform from "../components/home/Platform";
import Partner from "../components/home/Partner";
import ContactForm from "../components/home/ContactForm";

const About = () => {
  return (
    <div className="introduce-container main-component" data-v-6192361e="">
      <AboutInformation />
      <AboutRelease />
      <AboutTechnology />
      <AboutSolution />
      <Platform />
      <Partner />
      <div data-v-6192361e="" className="container-line"><img data-v-6192361e="" src="/_nuxt/img/Vector.8644c82.png" alt=""/></div>
      <ContactForm />
    </div>
  );
};

export default About;