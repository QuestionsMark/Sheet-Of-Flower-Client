import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Menu />
        </header>
    );
};