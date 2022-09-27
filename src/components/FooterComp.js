import React from "react";

import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4 footer-column">
          <ul className="nav flex-column">
            <li className="nav-item">
              <span className="footer-title">SEITEN</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/online-coaching">
                LEISTUNGEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                KONTAKT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/qualifications">
                QUALIFIKATIONEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 footer-column">
          <ul className="nav flex-column">
            <li className="nav-item">
              <span className="footer-title">Dienstleistungen</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ONLINE COACHING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                INDIVIDUELLER TRAININGSPLAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TECHNIKANALYSE
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 footer-column">
          <ul className="nav flex-column">
            <li className="nav-item">
              <span className="footer-title">KONTAKT</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-envelope"></i>megalodoncoaching@gmail.com
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                <i className="fas fa-phone"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="row text-center">
        <div className="col-md-4 box">
          <span className="copyright quick-links">
            &copy; 2022 Marcel Hacker. <script>document.write({new Date().getFullYear()})</script>
          </span>
        </div>
        <div className="col-md-4 box">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://www.youtube.com/channel/UCfheKLT7wZfCWF3sY5BFHeA?app=desktop">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/megalodon_coaching/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 box">
          <ul className="list-inline quick-links">
            <li className="list-inline-item">
              <a href="/">Datenschutzerklärung</a>
            </li>

            <li className="list-inline-item">
              <a href="/">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
