import { useRef } from "react";
import { useData } from "../../../hooks/useData";
import { NewsAPI } from "../../../types";
import { Slide } from "../../common/CarouselItem";
import { CarouselScreen } from "../../common/CarouselScreen";
import { Loading } from "../../common/Loading";

export const News = () => {

    const componentRef = useRef<HTMLElement>(null);

    const news = useData('news/last', componentRef) as NewsAPI[];

    const getItems = (): Slide[] => {
        return (news as NewsAPI[]).map(({ _id, images, description, name }) => ({ _id, src: images[0].src, alt: images[0].alt, title: name, description }));
    }

    return (
        <main className="main" ref={componentRef}>
            {news ? <div className="show"><CarouselScreen slides={getItems()} /></div> : <Loading />}
        </main>
    );
}