import React from 'react';
import Platform from "../components/home/Platform";
import Partner from '../components/home/Partner';
import ContactForm from '../components/home/ContactForm';
import Process from '../components/home/Process';

const Location = () => {
  return (
    <div className="main-component">
      <div data-v-67672252="" class="landing-container">
        <div data-v-67672252="" class="landing-flex">
          <div data-v-67672252="" class="item-left">
            <h2 data-v-67672252="" class="title-landing">Allocation</h2> 
            <p data-v-67672252="" class="text-landing">
            We use the best technologies, providing distribution services
              and release your music to platforms worldwide.
              Along with that, we continuously update new platforms and offers
              management tools, performance analysis, and revenue reporting for industries
              artist, manager and record label. You just need to focus on creating
              produce quality products and we will take care of the conflicts
              around growing your digital music.
            </p> 
            <button data-v-67672252="" type="button" class="btn btn-landing">
              <a data-v-67672252="" href="/lien-he" class="">Contact now</a>
            </button>
          </div>
          <div data-v-67672252="" class="item-right">
            <div data-v-67672252="" class="img-container">
              <img data-v-67672252="" src="/_nuxt/img/Map.3df3a90.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <Platform />
      <div data-v-7619e764="" class="map-container">
        <div data-v-7619e764="" class="line">
          <img data-v-7619e764="" src="/_nuxt/img/Divider.64e9d59.png" alt=""/>
        </div> 
        <div data-v-7619e764="" class="title-container">
          <h2 data-v-7619e764="">Distribute music worldwide</h2>
        </div> 
        <div data-v-7619e764="" class="img-container">
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