import React from "react";
import MusicSlider from "../components/home/MusicSlider";
import ArtistSlider from "../components/home/ArtistSlider";
import Platform from "../components/home/Platform";
import ContactForm from "../components/home/ContactForm";
import Partner from "../components/home/Partner";
import Process from "../components/home/Process";
import Landing from "../components/home/Landing";

const Home = () => {
  return (
    <div className="main-component">
      <Landing />
      <Platform />
      <div className="vision-container" data-v-6c5bed7c>
        <div className="line" data-v-6c5bed7c>
          <img alt="" src="/_nuxt/img/Divider.64e9d59.png" data-v-6c5bed7c />
        </div>
        <div className="vision-flex" data-v-6c5bed7c>
          <div className="vision-item" data-v-6c5bed7c>
            <img
              src="/_nuxt/img/Photo.9e5101d.png"
              alt="Terrace Media"
              data-v-6c5bed7c
            />
          </div>
          <div className="vision-item" data-v-6c5bed7c>
            <h2 className="title" data-v-6c5bed7c>
            Vision
            </h2>
            <p className="content" data-v-6c5bed7c>
            Becoming the region's leading music distribution and media company, a trusted partner of bands, record labels, musicians, and artists. Providing solutions for marketing and releasing music products on digital music platforms in the fastest and most effective way.
            </p>
          </div>
        </div>
      </div>
      <div className="mission-container" data-v-60195a79>
        <div className="line" data-v-60195a79>
          <img src="/_nuxt/img/Divider.64e9d59.png" alt="" data-v-60195a79 />
        </div>
        <div className="mission-flex" data-v-60195a79>
          <div className="mission-item" data-v-60195a79>
            <h2 className="title" data-v-60195a79>
            Mission
            </h2>
            <p className="content" data-v-60195a79>
            Accompanying partners to bring products to conquer new heights in the music industry. Create a diverse, rich and quality music community.
              <br data-v-60195a79 />
              <br data-v-60195a79 />
              LQ Media also supports bands, musicians, and young artists who are new to the music industry, helping them develop their talents and bring music products to the public.
              <br data-v-60195a79 />
              <br data-v-60195a79 />
              We also respect the value of bands, musicians and artists, ensure fairness and transparency in the distribution of music products, and meet legal regulations related to copyright and intellectual property. wisdom; Using technology and utilities to pay royalties in the most complete and clear way, helping partners have more confidence and motivation to develop their careers.
            </p>
          </div>
          <div className="mission-item" data-v-60195a79>
            <img
              src="/_nuxt/img/Photo.a8563fd.png"
              alt="Terrace Media"
              data-v-60195a79
            />
          </div>
        </div>
      </div>
      <Process />
      <div className="technology-container" data-v-b7192a84>
        <div className="line" data-v-b7192a84>
          <img src="/_nuxt/img/Divider.64e9d59.png" alt="" data-v-b7192a84 />
        </div>
        <div className="technology-content" data-v-b7192a84>
          <h2 data-v-b7192a84>Technology and gadgets</h2>
        </div>
        <div className="container" data-v-b7192a84>
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3"
            data-v-b7192a84
          >
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">facebook</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>Production solutions</h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  Providing production solutions including a music production studio, MV and professional image making crew equipped with modern machinery and equipment. In addition, we also have a team of experts in many fields such as composer, songwriter, producer,... to support our partners' products to be more perfect.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">star</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>Distribution solutions</h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  Providing music distribution solutions to digital service providers (DSPs) around the world, helping products reach millions of audiences within 48 hours, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">person</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>Marketing solutions</h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  We cooperate with leading music media companies, providing communication solutions on multi-channel network systems: Facebook fanpage, Youtube channel, Tiktok channel, Website,... marketing services on platforms : Spotify, Apple Music, Zing Mp3, Nhaccuatui,...
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">play_circle_outline</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>
                  Data management, analysis and revenue reporting
                  </h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  The integrated dashboard reports revenue and manages your song catalog, tracks how your catalog is performing through analytics, can track data and report daily, product-by-product sales. product, each platform, each territory.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">public</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>Stay connected with partners</h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  We always connect and support partners quickly, helping everyone easily access the digital music space even if they are new, helping partners have a better and smoother experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-v-b7192a84>
              <div className="p-4 content-container" data-v-b7192a84>
                <div className="icon-content" data-v-b7192a84>
                  <i class="material-icons">share</i>
                </div>
                <div className="title-content" data-v-b7192a84>
                  <h3 data-v-b7192a84>Update new news</h3>
                </div>
                <div className="data-content" data-v-b7192a84>
                  <p data-v-b7192a84>
                  We always update popular music news and trends, and also share good and valuable articles and documents in the music industry from highly qualified people, helping to build a music community. Music is growing more and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partner />
      <div className="data-api-container">
        <div className="artist-container">
          <div className="title-container">
            <h2>Featured artists</h2>
          </div>
          <div className="content-container">
            <div className="agile agile--ssr agile--auto-play agile--no-nav-buttons">
              <div className="agile__list">
                <div
                  className="agile__track"
                >
                  <div className="agile__slides agile__slides--regular">
                    <ArtistSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="music-container">
          <div className="title-container">
            <h2>Featured products</h2>
          </div>
          <div data-v-e0a7b2ea>
            <div
              className="agile agile--ssr agile--auto-play agile--no-nav-buttons"
              data-v-e0a7b2ea
            >
              <div className="agile__list">
                <div
                  className="agile__track"
                >
                  <MusicSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Home;
