import { useRef } from "react";
import { PictureAPI } from "../../../types";
import { Slide } from "../../common/CarouselItem";
import { CarouselScreen } from "../../common/CarouselScreen";
import { MyCarousel } from "../../common/MyCarousel";
import { Titles } from "../../common/Titles";
import { Loading } from "../../common/Loading";
import { useData } from "../../../hooks/useData";

import ElaImg from '../../../images/5.png';
import OlaImg from '../../../images/5.png';

const aboutUsSlides: Slide[] = [
    {
        _id: '6a43957a-cd36-48f3-814d-16b1c75acded',
        alt: 'Ela',
        src: ElaImg,
        title: 'Ela',
        description: 'Czesć jestem Ela! :)',
        staticImg: true,
    },
    {
        _id: '4b957313-0944-4201-9971-5c8ac4b5bff4',
        alt: 'Ola',
        src: OlaImg,
        title: 'Ola',
        description: 'Czesć jestem Ola! :)',
        staticImg: true,
    }
]

export const Home = () => {

    const componentRef = useRef<HTMLElement>(null);

    const pictures = useData('pictures/intro', componentRef) as PictureAPI[];

    const getItems = () => {
        return (pictures as PictureAPI[]).map(({ _id, images }) => ({ _id, src: images[0].src, alt: images[0].alt }));
    }

    return (
        <main className="main home" ref={componentRef}>
            {pictures ?
                <div className="show">
                    <CarouselScreen slides={getItems()} />
                    <Titles title="Poznajmy się" subtitle="Krótko o nas" />
                    <MyCarousel slides={aboutUsSlides} showThumbs={false} />
                </div> : <Loading />
            }
        </main>
    );
};