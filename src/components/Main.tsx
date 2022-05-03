import { Route, Routes } from "react-router-dom";
import { Contact } from "./views/contact/Contact";
import { Home } from "./views/home/Home";
import { News } from "./views/news/News";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/pictures" element={<Pictures />} /> */}
            {/* <Route path="/cards" element={<Cards />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}