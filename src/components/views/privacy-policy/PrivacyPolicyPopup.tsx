import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
    handleAccept: (e: SyntheticEvent) => void;
}

export const PrivacyPolicyPopup = ({ handleAccept }: Props) => {
    return (
        <div className="privacy-policy-popup">
            {/* <h2 className="privacy-policy-popup__title">Szanujemy Twoją prywatność</h2> */}
            <p className="privacy-policy-popup__text">Korzystając ze strony zgadzasz się na jej <Link to="/privacy-policy">politykę prywatności</Link>.</p>
            <button className="privacy-policy-popup__btn" onClick={handleAccept}>Akceptuję</button>
        </div>
    );
};