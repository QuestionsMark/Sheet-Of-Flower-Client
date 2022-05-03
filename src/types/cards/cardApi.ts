import { Img } from "../img";
import { Specification } from "../specification";

export interface CardAPI {
    _id: string;
    description: string;
    images: Img[];
    name: string;
    productType: string;
    shopLink: string;
    specifications: Specification[]
}