import { useEffect, useRef, useState } from "react";
import { PictureAPI } from "../../../types";
import { fetchApiTool } from "../../../utils/fetchHelper";
import { Slide } from "../../common/CarouselItem";
import { CarouselScreen } from "../../common/CarouselScreen";
import { MyCarousel } from "../../common/MyCarousel";
import { Titles } from "../../common/Titles";

import ElaImg from '../../../images/5.png';
import OlaImg from '../../../images/5.png';
import { Loading } from "../../common/Loading";

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

    const [pictures, setPictures] = useState<PictureAPI[] | null>(null);
    const getPictures = async () => {
        const startTime = new Date().valueOf();
        const response = await fetchApiTool('pictures/intro');
        if (!response.status) return console.warn(response.message);
        const endTime = new Date().valueOf();
        setTimeout(() => {
            if (!componentRef.current) return;
            setPictures(response.results as PictureAPI[]);
        }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
    };

    const getItems = () => {
        return (pictures as PictureAPI[]).map(({ _id, images }) => ({ _id, src: images[0].src, alt: images[0].alt }));
    }

    useEffect(() => {
        getPictures();
    }, []);

    return (
        <main className="main home" ref={componentRef}>
            {pictures ? <section className="section intro">
                {pictures && <CarouselScreen slides={getItems()} />}
            </section> : <Loading />}
            {pictures && <section className="section about-us">
                <Titles title="Poznajmy się" subtitle="Krótko o nas" />
                <MyCarousel slides={aboutUsSlides} />
            </section>}
        </main>
    );
};