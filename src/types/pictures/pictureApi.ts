import { Img } from "../img";
import { Specification } from "../specification";

export interface PictureAPI {
    _id: string;
    name: string;
    description: string;
    shopLink: string;
    productType: string;
    images: Img[];
    specifications: Specification[];
}