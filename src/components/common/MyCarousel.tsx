import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { HOST_ADDRESS } from '../../config';
import { Slide } from './CarouselItem';

interface Props {
    className?: string;
    outside?: boolean;
    showThumbs: boolean;
    slides: Slide[];
}

export const MyCarousel = ({ className, outside, slides, showThumbs }: Props) => {

    const [index, setIndex] = useState(0);

    const carouselItemList = () => {
        return slides.map(s => (
            <div key={s._id} className="carousel__item">
                <img src={s.staticImg ? s.src : `${HOST_ADDRESS}/images/${s.src}`} alt={s.alt} className="carousel__img" />
                {!outside && s.title && s.description && <div className="legend">
                    <h3 className="carousel__title">{s.title}</h3>
                    <p className="carousel__text">{s.description}</p>
                </div>}
            </div>
        ));
    };

    const showInfo = () => {
        const { title, description } = slides[index];

        return (
            <div className="carousel__info">
                {title && <h3 className="carousel__title carousel__title--center">{title}</h3>}
                <p className="text carousel__text">{description}</p>
            </div>
        )
    };

    return (
        <div className={`carousel__container${className ? ' ' + className : ''}`}>
            <Carousel
                autoPlay
                infiniteLoop
                interval={15000}
                stopOnHover={false}
                showStatus={false}
                showThumbs={showThumbs}
                transitionTime={600}
                onChange={(index) => setIndex(index)}
                swipeable={false}
            >
                {carouselItemList()}
            </Carousel>
            {outside && slides[index].title && slides[index].description && showInfo()}
        </div>
    );
}