import { useEffect, useRef, useState } from "react";
import { NewsAPI } from "../../../types";
import { getData } from "../../../utils/getData";
import { Slide } from "../../common/CarouselItem";
import { CarouselScreen } from "../../common/CarouselScreen";
import { Loading } from "../../common/Loading";

export const News = () => {

    const componentRef = useRef<HTMLElement>(null);

    const [news, setNews] = useState<NewsAPI[] | null>(null);

    const getItems = (): Slide[] => {
        return (news as NewsAPI[]).map(({ _id, images, description, name }) => ({ _id, src: images[0].src, alt: images[0].alt, title: name, description }));
    }

    useEffect(() => {
        getData('news/last', setNews, componentRef);
    }, []);

    return (
        <main className="main" ref={componentRef}>
            {news ? <div className="show"><CarouselScreen slides={getItems()} /></div> : <Loading />}
        </main>
    );
}