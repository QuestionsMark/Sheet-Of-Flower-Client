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
import { IntroductionItem } from "../../common/IntroductionItem";

const aboutUsSlides: Slide[] = [
    {
        _id: '6a43957a-cd36-48f3-814d-16b1c75acded',
        alt: 'Ela',
        src: ElaImg,
        title: 'Ela',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        staticImg: true,
    },
    {
        _id: '4b957313-0944-4201-9971-5c8ac4b5bff4',
        alt: 'Ola',
        src: OlaImg,
        title: 'Ola',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over.",
        staticImg: true,
    },
]

export const Home = () => {

    const componentRef = useRef<HTMLElement>(null);

    const pictures = useData('pictures/intro', componentRef) as PictureAPI[];

    const getItems = () => {
        return (pictures as PictureAPI[]).map(({ _id, images }) => ({ _id, src: images[0].src, alt: images[0].alt }));
    }

    const AboutUsList = () => {
        return aboutUsSlides.map(s => <IntroductionItem key={s._id} alt={s.alt} description={s.description as string} src={s.src} title={s.title as string} isStatic />);
    };

    return (
        <main className="main home" ref={componentRef}>
            {pictures ?
                <div className="show">
                    <CarouselScreen slides={getItems()} />
                    <section className="home__section introduction">
                        <Titles title="Poznajmy się" subtitle="Krótko o nas" />
                        {AboutUsList()}
                    </section>
                </div> : <Loading />
            }
        </main>
    );
};