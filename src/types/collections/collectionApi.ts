import { CardAPI } from "../cards";
import { Img } from "../img";

export interface CollectionAPI {
    _id: string;
    name: string;
    description: string;
    cards: CardAPI[];
    hashtags: string[];
    images: Img[];
}