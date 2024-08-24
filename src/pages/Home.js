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
                  <img src="/_nuxt/img/1.e86b48b.png" alt="" data-v-b7192a84 />
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
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7dw9btRAHEDx/1hIlIQK0YUSCUS4QdKCkNbiAJATIE4AewJyBJ8gpOGjzA2gonZLlzSRUmQmkzLRONkust/7NbZmxtW8taW15AhJkiRJkkSRNln0o6x26mEnNBs5YnyXjo7vWndrAD/LahXRfaun26E5GkvE+m06HKYWTAbwu7z/lKMchJbg85t02NzLZgC/ymq7RPennm6FluDkPPKzPh2d3JzoWqvr82M33Pwl2XoY3cfWRDOAFGk3tCj1Vv+qNd6F0AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgDADOAOAMAM4A4AwAzgDgHrQGS5SDHGUILUbd6DEkSZIkSZIkQTU/EfPve/0buIsPcU9yjv0XfRo2Wfv/y2kJbWJ4sn60f3PQl0FwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnAHAGAGcAcAYAZwBwBgBnABCl5NPWeDOAi4ghtCili7+t8WYAL/t0XA/NCzRL49Ovj4fWxOQjIOXory4Mzd2YU96bmpwM4HmfxhrBXsmxjuLdYH7K1cavz1J+XX/9Y0iSdN0lUkRR9QsWk9sAAAAASUVORK5CYII="
                    alt=""
                    data-v-b7192a84
                  />
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
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANqSURBVHgB7d2/ahxHAMfx3+yKmHR3XUKaUxkSsPMEUVpBzF3yAJGewKQPZEXSJ3mCnF/Ad9j4T6k3sAw2Ln2FjcHNXeHCBu2M94zdudgRkrW7v+8HxKmYRRzz5Xa5Hc1KAABTQWewSNPRFRUHzcFXhUuXpEdvFZezsFwpU3YAD9KvN6JS1fw6Erpk0/wc7Ydb/+YclBXAvTSdSsVC6KxTxdn1sFy2HV8oS/GP0Gk7mXPUOoA7abrXvEyErpvcTdNrbQe3DiCp5JzfG8X5B1CqJoAByrwGwNAQgDkCMEcA5gjAHAGYIwBzBGCOAMwRwAAFxU3bsTkBnAi9kKRV27GZ6wF+eSbuCHbdaj/c2m07OOsUUCseCh0Xf88ZnRXAz2F5vF1xooyPGHw2m+aj/3A/YzXQ1pkWhd5P00mU9goVPwqX7sOi0PksLFtf/AEAAAAAAABwcqavgp9V69GXtQ5CUV4N3B28VNtbvynWj1Kp5dfVeKVM2QG8Onp9Q7GuEvsDdM0mxXj01V/ji9sf4MUf6+lOyf4AXXZax9k3f48vZn+AZvLZH6DjcueodQAvq/WeON/3weR5tT7/fw8vTjnn90VZ6/wDiIEAhohl4eYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAc+2fGpa0EXqhKNvPVesAvtjRsdALUTppO7Z1AONqvEkKx0LXzXMeIp11DZBCfdi8rISuWsUQj3IOyApgW1bzB36KKd4UOiUoHW/nJvcR8tmPj//oZbWeiGcJd8Kb5py/25yiBQAAAAAAAACfdOavgvvs8SIdlKV+S0l7GoaTGPXf97MwVya7AJ7eTv83E3+gAUpB8++uh8OcY6yWhD29k/4c6uRvhea9PVmkKusYmXi4SKMrhdYavs3bqN0fZqHV3UGbT4Ad6Zo8jHLeq00AwWjtQs57ZVm4OQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwZxNAlM/+BoUuYH+Avqvls79BuIj9Afru/e3RMPwIQtD821lYtR3/Drg1vsA2qUhqAAAAAElFTkSuQmCC"
                    alt=""
                    data-v-b7192a84
                  />
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
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7dwxbhNBGIbhf9ZGIFEQN0Tp3FJEcW7g1BGSzQUwJwBOkDUXCDeIuUAcKRK1OQEpEKJjuwiahHQUnmGMUjjOGC9y5fneR4pW2Z0Uzr5Zx7b2NwMAAAAAACpcnUVfxqETNx1bQzCrdvtuUmftZXnVtam1LScNq3bK1qTO0vPQ6xa23uP38ff93J1NVq1r/uvg13HoWWHHZuufDOdsFDeTWou9DYqieGk5CfUff8PcIP7G1nr8jfj1Mbyo4h/e8NCdjpatK5Yd+HYeXsejY7PM/hK1tOMl/iSG8GbZgmQAn8eh7b2VhlwcxYv5VupAMoAHZt24Sf4ANtLWQysGqQPFkp1dQ1biU8Fean9hkEYA4ghAHAGIIwBxBCCOAMQRgDgCEEcA4ghAHAGIIwBxBCCOAMQRgDjVAEbe+YPt4RM3+3LO7/vgP5igpomJJ/7VTtkaze97WrYu4mZwWV5NilCcmBCtK0Dww8WTP292LAYyNCFKAVxvv2uVqxY9Mnvv4loTIROAs3BRZ12rbF17c7XW5kAmgGCuqruWK0CG3H/d2xjaJkLoCmCd+F9+e9W62zVr3Qi7SaReBTRCY+VLvGZoHJsQqfcBgoXuj6ObsXfTt/ElXzV/7Ht5tfU4nnxvoWdC5N4Iihn04ps9nZ9HN5Opn36a7WkUzb34HsEgBiJ3P6RgAH+148mezSAYzL4Js3EKovgwSBwBiCMAcQQgjgDEEYA4AhBHAOIIQBwBiCMAcQQgjgDEEYA4AhBHAOIIQBwBiCMAcQQgjvkAzAfQwnyAu5gPMIf5AHljPkAC8wEWMB8gU8wHSGM+QBLzAbLDfIA05gMsYD5AxpgPcB/zAYz5AIqYD3CLD4PEEYA4AhBHAOIIQBwBiCMAcQQgjgDEEYA4AhBHAOIIQBwBiCMAcQQgjgDEEYA4AhBHAOKYD8B8AC3MB7iL+QBzmA+QN+YDJDAfYAHzATLFfIA05gMkMR8gO8wHSGM+wALmA2SM+QD3MR/AmA+giPkAt/gwSBwBiCMAcQQgjgDEEYA4AhBHAOIIQBwBiCMAcQQgjgDEEYA4AhBHACK8hV+p/ckApmYjQ2bS9zokA9jtu0ncyNwcIaA6dKej1IGlTwHOW3/2g4ZNV/02f7Ds4NIAnvVdFSM4CN6GFrgabKAqmA3jyd/vu7PKAAC46w8G/EoaE9jy5QAAAABJRU5ErkJggg=="
                    alt=""
                    data-v-b7192a84
                  />
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
                  <img src="/_nuxt/img/5.2b9b496.png" alt="" data-v-b7192a84 />
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
                  <img src="/_nuxt/img/6.c94d6ca.png" alt="" data-v-b7192a84 />
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
        <div className="blog-container">
          <div className="title-container">
            <h2>The latest news</h2>
          </div>
          <div className="content-container">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <a
                  href="/tin-tuc/nha-phan-phoi-am-nhac-co-vai-tro-nhu-nao-doi-voi-nghe-si"
                  className="blog-item"
                >
                  <div className="content-item">
                    <div className="img-item">
                      <img
                        src="https://admin.terracemedia.co/storage/app/media/nhà phân phối âm nhạc.jpg"
                        alt=""
                      />
                    </div>
                    <div className="data-item">
                      <h4>
                        Nhà phân phối âm nhạc có vai trò như thế nào đối với
                        nghệ sĩ ?
                      </h4>
                      <p></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="/tin-tuc/quy-trinh-phat-hanh-1-bai-hat-tai-viet-nam"
                  className="blog-item"
                >
                  <div className="content-item">
                    <div className="img-item">
                      <img
                        src="https://admin.terracemedia.co/storage/app/media/cropped-images/Quy trinh phat hanh bai hat-204-0-396-350-1715049389.jpg"
                        alt=""
                      />
                    </div>
                    <div className="data-item">
                      <h4>
                        Quy trình phát hành 1 bài hát tại Việt Nam: Bạn đã biết
                        chưa?
                      </h4>
                      <p></p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a
                  href="/tin-tuc/suc-manh-cua-am-nhac-hoc-tap-nang-cao-su-tap-trung-va-nang-suat"
                  className="blog-item"
                >
                  <div className="content-item">
                    <div className="img-item">
                      <img
                        src="https://admin.terracemedia.co/storage/app/media/âm nhạc trong học tập.jpg"
                        alt=""
                      />
                    </div>
                    <div className="data-item">
                      <h4>
                        Sức mạnh của âm nhạc học tập: Nâng cao sự tập trung và
                        năng suất
                      </h4>
                      <p></p>
                    </div>
                  </div>
                </a>
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
