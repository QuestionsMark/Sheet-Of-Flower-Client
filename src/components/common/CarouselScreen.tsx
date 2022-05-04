import { Carousel } from "react-responsive-carousel";
import { CarouselItem, Slide } from "./CarouselItem";

interface Props {
    slides: Slide[];
}

export const CarouselScreen = ({ slides }: Props) => {

    const slideList = () => {
        return slides.map(s => <CarouselItem key={s._id} slide={s} fullscreen />);
    };

    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={15000}
            stopOnHover={false}
            showStatus={false}
            showThumbs={false}
            transitionTime={600}
            swipeable={false}
        >
            {slideList()}
        </Carousel>
    );
};