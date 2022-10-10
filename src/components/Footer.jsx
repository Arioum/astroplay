import React from "react";
import '../sass/main.scss'

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div className="footer-nav">

      </div>
      <div className="footer-copyright">
        <p>Copyright © Make It Move {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;