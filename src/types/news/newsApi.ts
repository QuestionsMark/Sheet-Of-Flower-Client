import { Img } from "../img";

export interface NewsAPI {
    _id: string;
    name: string;
    description: string;
    images: Img[];
}