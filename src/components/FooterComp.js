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
              <a class="nav-link" href="#">
                ONLINE COACHING
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Plans & Prices
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Frequently asked questions
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
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Job postings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                News and articles
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
            &copy; Marcel Hacker <script>document.write(new Date().getFullYear())</script>
          </span>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
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
