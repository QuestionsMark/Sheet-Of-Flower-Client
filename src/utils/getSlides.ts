import { Slide } from "../components/common/CarouselItem";
import { Img } from "../types";

export const makeSlidesFromImages = (images: Img[]): Slide[] => {
    return images.map(i => ({ _id: i._id as string, alt: i.alt, src: i.src }));
};