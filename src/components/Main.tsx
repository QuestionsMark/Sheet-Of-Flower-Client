import { Route, Routes } from "react-router-dom";
import { Card } from "./views/collections/Card";
import { Collection } from "./views/collections/Collection";
import { Collections } from "./views/collections/Collections";
import { Contact } from "./views/contact/Contact";
import { Home } from "./views/home/Home";
import { News } from "./views/news/News";
import { Picture } from "./views/pictures/Picture";
import { Pictures } from "./views/pictures/Pictures";
import { Product } from "./views/products/Product";
import { Products } from "./views/products/Products";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/pictures/:id" element={<Picture />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:id" element={<Collection />} />
            <Route path="/cards/:id" element={<Card />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}