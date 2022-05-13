import { useScrollUp } from "../hooks/useScrollUp";
import { Background } from "./Background";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Main } from "./Main";

export const App = () => {

    useScrollUp();

    return (
        <div className="app">
            <Background />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};