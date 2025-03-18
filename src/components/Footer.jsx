import '../style/Footer.css';
import BoxLink from "./BoxLinks";
import categorylinks from "../data/categorylinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const { categorylinks1, categorylinks2, categorylinks3, categorylinks4 } = categorylinks;

    return (
        <footer>
            <div className="container">

                {/* Social links */}
                <div className="social-links">
                    <ul className="channel p-0">
                        <li className="single-channel">
                            <a href="#" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="single-channel">
                            <a href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className="single-channel">
                            <a href="#" aria-label="Twitter">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                        </li>
                        <li className="single-channel">
                            <a href="#" aria-label="YouTube">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Member footer links */}
                <div className="member-footer-links">
                    {[categorylinks1, categorylinks2, categorylinks3, categorylinks4].map((category, index) => (
                        <div className="link-col" key={index}>
                            <BoxLink linkCategory={category} />
                        </div>
                    ))}
                </div>

                {/* Service button */}
                <div className="member-footer-service">
                    <button className="service-code">Codice di servizio</button>
                </div>

                {/* Copyright */}
                <div className="member-footer-copyright">
                    <span>© Boolroad Company.srl</span>
                </div>

            </div>
        </footer>
    );
}