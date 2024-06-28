import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MUSIC_TOP_DATA } from '../../data/Music';

const MusicSlider = () => {
  const items = MUSIC_TOP_DATA;

  const slides = items.map((item) => (
    <div
      key={item.id}
      className="carousel-cell"
      data-v-e0a7b2ea
    >
      <div className="item-music" data-v-e0a7b2ea>
        <div className="carousel-img" data-v-e0a7b2ea>
          <a href={item.url} data-v-e0a7b2ea>
            <img
              src={item.image}
              alt=""
              data-v-e0a7b2ea
            />
          </a>
        </div>
        <div className="carousel-content" data-v-e0a7b2ea>
          <div className="content" data-v-e0a7b2ea>
            <a href={item.url} data-v-e0a7b2ea>
              <h4 data-v-e0a7b2ea>{item.name}</h4>
            </a>
            <p className="name-artist" data-v-e0a7b2ea>
              <a href={item.artist_url} data-v-e0a7b2ea>
                {item.artist}
              </a>
            </p>
          </div>
          <div className="link" data-v-e0a7b2ea>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-v-e0a7b2ea
            >
              <img src="/_nuxt/img/play.7fb8bd7.png" alt="" data-v-e0a7b2ea />
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div style={{width: "100%"}} >
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={window.innerWidth > 768 ? '33.33' : '100'}
        centerMode={true}
        swipeable={true}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default MusicSlider;
