import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {

    return (
        <footer className="footer__content">
            <div className="column column--left">
                <div className="footer__logo">
                    <Link to="/" >
                        <img
                            src={require('../images/logo_footer_scan.png')}
                            alt="footer logo"
                        />
                    </Link>
                </div>

            </div>
            <div className="column column--right">
                <div className="footer__contacts">
                    <div>г. Москва, Цветной б-р, 40</div>
                    <div>+7 495 771 21 11</div>
                    <div>info@skan.ru</div>
                </div>
                <div className="footer__copyright">
                    <div>Copyright. 2024</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;