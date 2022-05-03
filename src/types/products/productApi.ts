import { Img } from "../img";
import { Specification } from "../specification";

export interface ProductAPI {
    _id: string;
    name: string;
    description: string;
    shopLink: string;
    productType: string;
    images: Img[];
    specifications: Specification[];
}