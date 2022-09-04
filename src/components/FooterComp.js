import React from "react";

import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div class="footer">
      <div class="row">
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">SEITEN</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/online-coaching">
                ONLINE COACHING
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/qualifications">
                QUALIFIKATIONEN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">Dienstleistungen</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ONLINE COACHING
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                INDIVIDUELLER TRAININGSPLAN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TECHNIKANALYSE
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-column">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="footer-title">KONTAKT</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-envelope"></i>megalodoncoaching@gmail.com
              </a>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                <i class="fas fa-phone"></i>+43 699 108444 11
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div class="row text-center">
        <div class="col-md-4 box">
          <span class="copyright quick-links">
            &copy; 2022 Marcel Hacker. <script>document.write({new Date().getFullYear()})</script>
          </span>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="https://www.youtube.com/channel/UCfheKLT7wZfCWF3sY5BFHeA?app=desktop">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/megalodon_coaching/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline quick-links">
            <li class="list-inline-item">
              <a href="/">Datenschutzerklärung</a>
            </li>

            <li class="list-inline-item">
              <a href="/">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
