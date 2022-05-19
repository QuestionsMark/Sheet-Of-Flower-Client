import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NotFound = () => {
    return (
        <main className="main not-found">
            <div className="not-found__content">
                <FontAwesomeIcon icon={faTriangleExclamation} className="not-found__icon" />
                <h2 className="not-found__text">Nie znaleziono strony pod tym adresem.</h2>
            </div>
        </main>
    );
};