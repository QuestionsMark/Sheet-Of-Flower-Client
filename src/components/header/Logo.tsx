import logoPC from '../../images/logo-pc.png';
import logoMobile from '../../images/logo-mobile.png';

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__img-wrapper">
                <img src={logoPC} alt="logo" className="img logo--pc" />
                <img src={logoMobile} alt="logo" className="img logo--mobile" />
            </div>
        </div>
    );
};