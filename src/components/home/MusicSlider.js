import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MusicSlider = () => {
  const slideMargin = 10;
  const items = [
    {
      id: 1,
      image: "https://admin.terracemedia.co/storage/app/media/music/3000.jpg",
      name: "Không Tên 1",
      artist: "TooNy",
      url: "/san-pham/khong-ten-1",
      artist_url: "/nghe-si/khong-ten-1",
    },
    {
        id: 2,
        image: "https://admin.terracemedia.co/storage/app/media/music/3000.jpg",
        name: "Không Tên 2",
        artist: "TooNy",
        url: "/san-pham/khong-ten-1",
        artist_url: "/nghe-si/khong-ten-1",
    },
    {
        id: 3,
        image: "https://admin.terracemedia.co/storage/app/media/music/3000.jpg",
        name: "Không Tên 3",
        artist: "TooNy",
        url: "/san-pham/khong-ten-1",
        artist_url: "/nghe-si/khong-ten-1",
      },
  ];

  const slides = items.map((item) => (
    <div
      key={item.id}
      style={{ margin: `0 ${slideMargin}px` }}
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
    <div>
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
