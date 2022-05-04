import { useState } from "react";
import { Link } from "react-router-dom";
import { GaleryItem } from "./Galery";
import { GaleryImage } from "./GaleryImage";

export type Model = 'news' | 'pictures' | 'cards' | 'collections' | 'products';

interface Props {
    item: GaleryItem;
    model: Model;
}

export const SingleGaleryItem = ({ item, model }: Props) => {

    const { _id, img, img2, title } = item;

    const [flag, setFlag] = useState(false);

    const toggleActive = () => {
        setFlag(prev => !prev);
    }

    return (
        <li className="galery__item" onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            <Link to={`/${model}/${_id}`}>
                <GaleryImage src={img.src} alt={img.alt} active={flag} />
                <GaleryImage src={img2.src} alt={img2.alt} active={!flag} />
                <p className="galery__title galery__title--picture">{title}</p>
            </Link>
        </li>
    );
}