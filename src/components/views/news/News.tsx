import { useEffect, useRef, useState } from "react";
import { NewsAPI } from "../../../types";
import { fetchApiTool } from "../../../utils/fetchHelper";
import { Slide } from "../../common/CarouselItem";
import { CarouselScreen } from "../../common/CarouselScreen";

export const News = () => {

    const componentRef = useRef<HTMLElement>(null);

    const [news, setNews] = useState<NewsAPI[] | null>(null);
    const getNews = async () => {
        const response = await fetchApiTool('news/last');
        if (!response.status) return console.warn(response.message);
        if (!componentRef.current) return;
        setNews(response.results as NewsAPI[]);
    };

    const getItems = (): Slide[] => {
        return (news as NewsAPI[]).map(({ _id, images, description, name }) => ({ _id, src: images[0].src, alt: images[0].alt, title: name, description }));
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <main className="main" ref={componentRef}>
            {news && <CarouselScreen slides={getItems()} />}
        </main>
    );
}