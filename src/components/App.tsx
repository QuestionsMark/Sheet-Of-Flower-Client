import { SyntheticEvent } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useScrollUp } from "../hooks/useScrollUp";
import { Background } from "./Background";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./Main";
import { PrivacyPolicyPopup } from "./views/privacy-policy/PrivacyPolicyPopup";

export const App = () => {

    const [PPAccepted, setPPAccepted] = useLocalStorage<boolean>('privacy-policy', false);
    const handleAccept = (e: SyntheticEvent) => {
        e.preventDefault();
        setPPAccepted(true);
    }

    useScrollUp();

    return (
        <div className="app">
            <Background />
            <Header />
            <Main />
            <Footer />
            {!PPAccepted && <PrivacyPolicyPopup handleAccept={handleAccept} />}
        </div>
    );
};