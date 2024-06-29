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
            <h2 data-v-67672252="" class="title-landing">Phân bổ</h2> 
            <p data-v-67672252="" class="text-landing">
              Chúng tôi sử dụng các công nghệ tốt nhất, cung cấp dịch vụ phân phối
              và phát hành âm nhạc của bạn tới khắp các nền tảng trên toàn thế giới.
              Cùng với đó, chúng tôi liên tục cập nhật các nền tảng mới và cung cấp
              công cụ quản lý, phân tích hiệu suất, báo cáo doanh thu cho các nghệ
              sĩ, người quản lý và hãng thu âm. Bạn chỉ cần tập trung vào việc tạo
              ra các sản phẩm chất lượng còn chúng tôi sẽ đảm nhận các vấn đề xung
              quanh việc phát triển âm nhạc kỹ thuật số của bạn.
            </p> 
            <button data-v-67672252="" type="button" class="btn btn-landing">
              <a data-v-67672252="" href="/lien-he" class="">Liên hệ ngay</a>
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
          <h2 data-v-7619e764="">Phân phối âm nhạc trên toàn thế giới</h2>
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