import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Platform from "../components/home/Platform";
import Partner from '../components/home/Partner';
import ContactForm from '../components/home/ContactForm';
import Process from '../components/home/Process';
import PlatformSlider from '../components/home/PlatformSlider';

const Location = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="main-component">
      <div data-v-67672252="" className="landing-container">
        <div data-v-67672252="" className="landing-flex">
          <div data-v-67672252="" className="item-left">
            <h2 data-v-67672252="" className="title-landing">Allocation</h2> 
            <p data-v-67672252="" className="text-landing">
            We use the best technologies, providing distribution services
              and release your music to platforms worldwide.
              Along with that, we continuously update new platforms and offers
              management tools, performance analysis, and revenue reporting for industries
              artist, manager and record label. You just need to focus on creating
              produce quality products and we will take care of the conflicts
              around growing your digital music.
            </p> 
            <button data-v-67672252="" type="button" className="btn btn-landing">
              <a data-v-67672252="" href="/lien-he" className="">Contact now</a>
            </button>
          </div>
          <div data-v-67672252="" className="item-right">
            <div data-v-67672252="" className="img-container">
              <img data-v-67672252="" src="/_nuxt/img/Map.3df3a90.png" alt=""/>
            </div>
            <div data-v-67672252 className="platform-container">
              <PlatformSlider />
            </div>
          </div>
        </div>
      </div>
      <Platform />
      <div data-v-7619e764="" className="map-container">
        <div data-v-7619e764="" className="line">
          <img data-v-7619e764="" src="/_nuxt/img/Divider.64e9d59.png" alt=""/>
        </div> 
        <div data-v-7619e764="" className="title-container">
          <h2 data-v-7619e764="">Distribute music worldwide</h2>
        </div> 
        <div data-v-7619e764="" className="img-container">
          <img data-v-7619e764="" src="/_nuxt/img/World Map.4982d03.png" alt=""/>
        </div>
      </div>
      <Process />
      <Partner />
      <ContactForm />
    </div>
  );
};

export default Location;