import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {

    const menuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        if (!menuRef.current) return;
        menuRef.current.classList.toggle('active');
    };

    const hideMenu = () => {
        if (!menuRef.current) return;
        menuRef.current.classList.remove('active');
    };

    return (
        <nav className="menu">
            <FontAwesomeIcon icon={faBars} className="menu__icon" onClick={toggleMenu} />
            <ul className="menu__list" ref={menuRef}>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/" onClick={hideMenu}>O nas</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/news" onClick={hideMenu}>Nowości</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/pictures" onClick={hideMenu}>Obrazy</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/cards" onClick={hideMenu}>Kartki</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/products" onClick={hideMenu}>Produkty</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/contact" onClick={hideMenu}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    );
};