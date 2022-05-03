import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CarouselItem, Slide } from './CarouselItem';

interface Props {
    slides: Slide[];
}

export const MyCarousel = ({ slides }: Props) => {

    const [index, setIndex] = useState(0);

    const carouselItemList = () => {
        return slides.map(s => <CarouselItem key={s._id} slide={s} staticImg={s.staticImg} />);
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
        <div className="carousel__container">
            <Carousel
                autoPlay
                infiniteLoop
                interval={15000}
                stopOnHover={false}
                showStatus={false}
                showThumbs={false}
                transitionTime={600}
                onChange={(index) => setIndex(index)}
            >
                {carouselItemList()}
            </Carousel>
            {slides[index].title && slides[index].description && showInfo()}
        </div>
    );
}