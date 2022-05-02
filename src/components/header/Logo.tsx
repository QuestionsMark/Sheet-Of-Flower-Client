import logo from '../../images/logo.png';

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__img-wrapper">
                <img src={logo} alt="logo" className="img" />
            </div>
            <h2 className="logo__brandname">OLEA</h2>
        </div>
    );
};