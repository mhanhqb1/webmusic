import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container" data-v-7d84d4ff>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        data-v-7d84d4ff
      >
        <div className="container-fluid header-menu" data-v-7d84d4ff>
          <div className="navbar-brand logo-container" data-v-7d84d4ff>
            <a
              href="/"
              aria-current="page"
              className="nuxt-link-exact-active nuxt-link-active"
              data-v-7d84d4ff
            >
              <img
                src="/_nuxt/img/Logo_web.c707601.png"
                alt="Terrace Media"
                className="header-logo navbar-brand"
                data-v-7d84d4ff
              />
            </a>
          </div>
          <button
            id="buttonMenu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleContent"
            aria-controls="navbarToggleContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
            className="navbar-toggler custom-toggler"
            data-v-7d84d4ff
          >
            <span className="navbar-toggler-icon" data-v-7d84d4ff></span>
          </button>
          <div
            id="navbarToggleContent"
            className="collapse navbar-collapse"
            data-v-7d84d4ff
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-v-7d84d4ff>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <Link
                  to="/"
                  aria-current="page"
                  className="nav-link nuxt-link-exact-active nuxt-link-active"
                  data-v-7d84d4ff
                >
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <Link to="/gioi-thieu" className="nav-link" data-v-7d84d4ff>
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <Link to="/san-pham" className="nav-link" data-v-7d84d4ff>
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <a href="/nghe-si" className="nav-link" data-v-7d84d4ff>
                  Nghệ sĩ
                </a>
              </li>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <a href="/dich-vu" className="nav-link" data-v-7d84d4ff>
                  Dịch vụ
                </a>
              </li>
              <li className="nav-item menu-item effect-item" data-v-7d84d4ff>
                <a href="/phan-bo" className="nav-link" data-v-7d84d4ff>
                  Phân bổ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
