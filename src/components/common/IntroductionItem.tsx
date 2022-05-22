import { useCallback, useRef } from "react";
import { HOST_ADDRESS } from "../../config";

interface Props {
    alt: string;
    src: string;
    description: string;
    title: string;
    isStatic?: boolean;
}

export const IntroductionItem = ({ alt, description, title, src, isStatic }: Props) => {

    const observer = useRef<IntersectionObserver>();
    const Element = useCallback(node => {
        observer.current = new IntersectionObserver(entries => {
            const entry = entries[0];
            entry.target.classList.toggle('slide-animation', entry.isIntersecting);
            if (entry.isIntersecting) observer.current?.unobserve(node);
        }, {
            threshold: 0.3,
        });
        if (node) return observer.current.observe(node);
    }, []);

    return (
        <div ref={Element} className="introduction__item">
            <div className="introduction__img-wrapper">
                <img src={isStatic ? src : `${HOST_ADDRESS}/${src}`} alt={alt} className="img" />
            </div>
            <div className="introduction__description">
                <h2 className="introduction__title">{title}</h2>
                <p className="intrroduction__text">{description}</p>
            </div>
        </div>
    );
};  