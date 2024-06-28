import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ARTIST_TOP_DATA } from '../../data/Artist';
import { JOB_COLORS, SOCIAL_ICON_IMAGES } from '../../data/Constant';

const ArtistSlider = () => {
  const socialIconImages = SOCIAL_ICON_IMAGES;
  const jobColors = JOB_COLORS;
  const items = ARTIST_TOP_DATA;

  const slides = items.map((item) => (
    <div key={item.id}>
      <div className="artist_item">
        <div className="container-carousel-item">
          <div className="content-item">
            <a href={item.url}>
              <h3>{item.name}</h3>
            </a>
            <div className="job-list">
              {item.jobs.map((job, index) => (
                <p
                  key={index}
                  className="job-item"
                  style={{ background: jobColors[job] }}
                >
                  {job}
                </p>
              ))}
            </div>
            <div className="style-music-list">
              {item.music_list.map((ml, index) => (
                <p key={index} className="style-music-item">
                  {ml}
                </p>
              ))}
            </div>
            <div className="social-link">
              {item.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialIconImages[social.type]} alt={social.type} />
                </a>
              ))}
            </div>
          </div>
          <div className="img-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src="/_nuxt/img/Group.8a831b2.png" alt="" />
            </a>
          </div>
          <div className="avatar-item">
            <a href={item.url}>
              <img src={item.image} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={100}
        centerMode={true}
        swipeable={true}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default ArtistSlider;
