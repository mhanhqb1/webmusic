import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSlider from "../components/home/MusicSlider";
import Platform from "../components/home/Platform";
import Partner from "../components/home/Partner";
import ContactForm from "../components/home/ContactForm";
import ProductList from "../components/products/ProductList";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="product-wrap-container main-component">
      <div data-v-2f699686="" className="slider">
        <div data-v-2f699686>
          <div
            className="agile agile--ssr agile--auto-play agile--no-nav-buttons"
            data-v-2f699686
          >
            <div className="agile__list">
              <div className="agile__track">
                <MusicSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-2f699686="" className="container-line" style={{ margin: "40px auto", maxWidth: "1140px"}}><img data-v-2f699686="" style={{width: "100%"}} src="/_nuxt/img/Vector.8644c82.png" alt=""/></div>      
      <ProductList />
      <Platform />
      <Partner />
      <ContactForm />
    </div>
  );
};

export default Products;
