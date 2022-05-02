import { Carousel } from "react-responsive-carousel";

import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import { Galery } from "./Galery";

export const App = () => {

    const handleChange = (index: number) => {
        console.log({ index });
    };

    return (
        <div className="app">
            <Carousel
                autoPlay
                infiniteLoop
                interval={15000}
                stopOnHover={false}
                showStatus={false}
                showThumbs={false}
                transitionTime={600}
                onChange={(index) => handleChange(index)}
            >
                <div className="carousel__item">
                    <img src={img1} alt="siema" className="carousel__img" />
                    <div className="legend">
                        <h3 className="carousel__title">Siema</h3>
                        <p className="carousel__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus eveniet, ab odio molestiae debitis asperiores nulla, excepturi qui, sed autem fugit nobis officiis culpa cumque officia eius a quae.</p>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src={img2} alt="siema" className="carousel__img" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel__item">
                    <img src={img3} alt="siema" className="carousel__img" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <Galery />
        </div>
    );
};