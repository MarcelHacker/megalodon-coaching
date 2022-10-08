import React from "react";
import {YouTube, Instagram, Telegram, Email} from "@material-ui/icons";

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
              <a className="nav-link" href="/online-coaching">
                ONLINE COACHING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/online-coaching">
                INDIVIDUELLER TRAININGSPLAN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/online-coaching">
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
              <a
                className="nav-link"
                href="mailto:megalodoncoaching@gmail.com?subject = Anfrage&body = Message"
              >
                <Email style={{color: "#fec503"}} /> megalodoncoaching@gmail.com
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
                <YouTube />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/megalodon_coaching/">
                <Instagram />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/contact">
                <Telegram />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 box">
          <ul className="list-inline quick-links">
            <li className="list-inline-item">
              <a href="/privacy">Datenschutzerklärung</a>
            </li>

            <li className="list-inline-item">
              <a href="/imprint">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
