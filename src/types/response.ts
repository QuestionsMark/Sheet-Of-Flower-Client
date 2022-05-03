import { CardAPI } from "./cards";
import { CollectionAPI } from "./collections";
import { HashtagAPI } from "./hashtags";
import { NewsAPI } from "./news";
import { PictureAPI } from "./pictures";
import { ProductAPI, ProductTypeAPI } from "./products";

export interface LoginApi {
    token: string;
}

export type AnyData = CardAPI[] | HashtagAPI[] | ProductAPI[] | ProductTypeAPI[] | CollectionAPI[] | NewsAPI[] | PictureAPI[] | CardAPI | HashtagAPI | ProductAPI | ProductTypeAPI | CollectionAPI | NewsAPI | PictureAPI | LoginApi;

export type Data = CardAPI[] | HashtagAPI[] | ProductAPI[] | ProductTypeAPI[] | CollectionAPI[] | PictureAPI[] | NewsAPI[];

export interface ServerResponse {
    message: string;
}
export interface ServerApiResponse {
    results: any;
    amount?: number;
}
export interface ServerErrorResponse {
    message: string;
    validation?: string[];
}

export interface ClientResponse {
    status: boolean;
    message: string;
    validation?: string[];
}

export interface ClientErrorResponse {
    status: false;
    message: string;
    validation?: string[];
}


export interface ClientApiResponseOk {
    status: true;
    results: AnyData;
    amount?: number;
}
export interface ClientApiResponseError {
    status: false;
    message: string;
}
export type ClientApiResponse = ClientApiResponseOk | ClientApiResponseError;
