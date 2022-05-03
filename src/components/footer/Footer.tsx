import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__info">tel. 530 681 528</p>
            <p className="footer__info">a.bien2950@gmail.com</p>
            <div className="footer__social-media">
                <a href="https://www.facebook.com/ola.dziurman" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faFacebookF} className="footer__icon" /></a>
                <a href="https://animark.pl" target="_blank" rel="noreferrer" className="footer__link"><FontAwesomeIcon icon={faInstagram} className="footer__icon" /></a>
            </div>
        </footer>
    );
};