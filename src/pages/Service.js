import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Platform from '../components/home/Platform';
import Partner from '../components/home/Partner';
import ContactForm from '../components/home/ContactForm';
import OurServices from '../components/services/OurServices';
import ServiceContainer from '../components/services/ServiceContainer';

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="service-page main-component" data-v-3aa51a22="">
      <OurServices />
      <ServiceContainer />
      <Platform />
      <Partner />
      <div data-v-2f699686="" className="container-line" style={{ margin: "40px auto", maxWidth: "1140px"}}><img data-v-2f699686="" style={{width: "100%"}} src="/_nuxt/img/Vector.8644c82.png" alt=""/></div>      
      <ContactForm />
    </div>
  );
};

export default Service;