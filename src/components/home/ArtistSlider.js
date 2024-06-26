import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ArtistSlider = () => {
  const socialIconImages = {
    facebook: "/_nuxt/img/bordered-icon-facebook.667a92a.png",
    instagram: "/_nuxt/img/bordered-icon-insta.271d714.png",
    youtube: "/_nuxt/img/bordered-icon-youtube.c066420.png",
    tiktok: "/_nuxt/img/bordered-icon-tiktok.45eb4a7.png",
  };
  const jobColors = {
    "Nghệ sĩ": "#e97ff1",
    Composer: "#16d3c0",
    Singer: "#e67e22",
    Producer: "#5454b1",
  };
  const items = [
    {
      id: 1,
      image: "https://admin.terracemedia.co/storage/app/media/artist/vuong.png",
      name: "TooNy",
      url: "/nghe-si/toony",
      jobs: ["Nghệ sĩ", "Composer", "Singer"],
      music_list: ["Hiphop", "Rap", "RnB"],
      socials: [
        {
          type: "facebook",
          url: "https://www.facebook.com/tuilaTooNyne",
        },
        {
          type: "instagram",
          url: "https://www.facebook.com/tuilaTooNyne",
        },
      ],
    },
    {
      id: 2,
      image: "https://admin.terracemedia.co/storage/app/media/artist/vuong.png",
      name: "TooNy 2",
      url: "/nghe-si/toony",
      jobs: ["Nghệ sĩ", "Composer", "Singer"],
      music_list: ["Hiphop", "Rap", "RnB"],
      socials: [
        {
          type: "facebook",
          url: "https://www.facebook.com/tuilaTooNyne",
        },
        {
          type: "instagram",
          url: "https://www.facebook.com/tuilaTooNyne",
        },
      ],
    },
  ];

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
        swipeable={true}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default ArtistSlider;
