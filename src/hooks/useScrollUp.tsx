import { useEffect, useRef } from "react";

export const useScrollUp = (page: Number) => {

    const html = useRef(document.querySelector('html'));

    useEffect(() => {
        if (!html.current) return;
        html.current.scroll({
            behavior: 'smooth',
            top: 0,
        });
    }, [page]);

};