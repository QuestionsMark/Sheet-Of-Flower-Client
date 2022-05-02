import { SRLWrapper } from "simple-react-lightbox";

import { GaleryItem } from './GaleryItem';

import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';

const galeryItems = [img1, img2, img3];

export const Galery = () => {

    const galeryList = () => {
        return galeryItems.map((i, index) => <GaleryItem key={String(index)} src={i} />);
    };

    return (
        <div className="galery">
            <ul className="galery__list">
                <SRLWrapper>
                    {galeryList()}
                </SRLWrapper>
            </ul>
        </div>
    );
};