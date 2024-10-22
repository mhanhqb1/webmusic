import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PlatformSlider = () => {
  const items = [
    {
        id: 1,
        name: 'Spotify',
        image: '/img/platform/Spotify.png',
    },
    {
        id: 2,
        name: 'Apple Music',
        image: '/img/platform/Apple Music.png',
    },
    {
        id: 3,
        name: 'Facebook',
        image: '/img/platform/Fb.png',
    },
    {
        id: 4,
        name: 'Instagram',
        image: '/img/platform/insta.png',
    },
    {
        id: 5,
        name: 'Tiktok',
        image: '/img/platform/Tiktok.png',
    },
    {
        id: 6,
        name: 'Youtube Music',
        image: '/img/platform/Youtube.png',
    },
    {
        id: 7,
        name: 'Zing Mp3',
        image: '/img/platform/Zing Mp3.png',
    },
    {
        id: 8,
        name: 'Nhaccuatui',
        image: '/img/platform/NCT.png',
    },
    {
        id: 9,
        name: 'Youtube',
        image: '/img/platform/Youtube 2.png',
    },
    {
        id: 10,
        name: 'Tiktok Music',
        image: '/img/platform/tiktok music.png',
    },
    {
        id: 11,
        name: 'Anghami',
        image: '/img/platform/anghami.png',
    },
    {
        id: 12,
        name: 'Audiomack',
        image: '/img/platform/audiomack.png',
    },
    {
        id: 13,
        name: 'NetEase',
        image: '/img/platform/netease.png',
    },
    {
        id: 14,
        name: 'Amazon music',
        image: '/img/platform/Amazon music.png',
    },
    {
        id: 15,
        name: 'Awa',
        image: '/img/platform/awa.png',
    },
    {
        id: 16,
        name: 'Boomplay',
        image: '/img/platform/Boomplay.png',
    },
    {
        id: 17,
        name: 'IheartRadio',
        image: '/img/platform/iheartradio.png',
    },
    {
        id: 18,
        name: 'Deezer',
        image: '/img/platform/deezer.png',
    },
    {
        id: 19,
        name: 'Kkbox',
        image: '/img/platform/kkbox.png',
    },
    {
        id: 20,
        name: 'Joox',
        image: '/img/platform/joox.png',
    },
    {
        id: 21,
        name: 'Mixcloud',
        image: '/img/platform/mixcloud.png',
    },
    {
        id: 22,
        name: 'Nuuday',
        image: '/img/platform/nuuday.png',
    },
    {
        id: 23,
        name: 'Napster',
        image: '/img/platform/napster.png',
    },
    {
        id: 24,
        name: 'Tidal',
        image: '/img/platform/tidal.png',
    },
    {
        id: 25,
        name: 'Pandora',
        image: '/img/platform/pandora.png',
    },
    {
        id: 26,
        name: 'Soundcloud',
        image: '/img/platform/soundcloud.png',
    },
    {
        id: 27,
        name: 'Resso',
        image: '/img/platform/resso.png',
    },
    {
        id: 28,
        name: 'Rhapsody',
        image: '/img/platform/rhapsody.png',
    },
    {
        id: 29,
        name: 'Snap',
        image: '/img/platform/Snap.png',
    },
    {
        id: 30,
        name: 'Jiosaavn',
        image: '/img/platform/jiosaavn.png',
    },
    {
        id: 31,
        name: 'Itunes',
        image: '/img/platform/itune.png',
    },
    {
        id: 32,
        name: 'Peloton',
        image: '/img/platform/peloton.png',
    },
    {
        id: 33,
        name: 'Claro musica',
        image: '/img/platform/claromusic.png',
    },
    {
        id: 34,
        name: 'Tencent',
        image: '/img/platform/tencent.png',
    },
    {
        id: 35,
        name: '7digital',
        image: '/img/platform/7digital.png',
    },
    {
        id: 36,
        name: 'Kanjian',
        image: '/img/platform/kanijan.png',
    },
    {
        id: 37,
        name: 'Audible Magic',
        image: '/img/platform/audiblemagic.png',
    },
    {
        id: 38,
        name: 'Imusica',
        image: '/img/platform/imusica.png',
    },
    {
        id: 39,
        name: 'Jaxsta',
        image: '/img/platform/jaxsta.png',
    },
    {
        id: 40,
        name: 'Qobuz',
        image: '/img/platform/qobuz.png',
    },
    {
        id: 41,
        name: 'Siriusxm',
        image: '/img/platform/siriusxm.png',
    }
  ];

  const slides = items.map((item) => (
    <div
      key={item.id}
      className="col"
      data-v-b7995c84
    >
        <div data-v-b7995c84 style={{ padding: "20px 10px 10px"}}>
            <img src={item.image} alt={item.name} data-v-b7995c84 />
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
        centerSlidePercentage={window.innerWidth > 768 ? '20' : '33.33'}
        centerMode={true}
        swipeable={true}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default PlatformSlider;
