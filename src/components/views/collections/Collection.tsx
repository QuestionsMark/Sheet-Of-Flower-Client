import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../hooks/useData";
import { SearchResult, useSearch } from "../../../hooks/useSearch";
import { CardAPI, CollectionAPI } from "../../../types";
import { Galery, GaleryItem } from "../../common/Galery";
import { Loading } from "../../common/Loading";
import { Pagination } from "../../common/Pagination";
import { Text } from "../../common/Text";

interface CardsSearchResult extends SearchResult {
    data: CardAPI[];
}

export const Collection = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();

    const collection = useData(`collections/${id}`, componentRef) as CollectionAPI;
    const { amount, data, page, setPage } = useSearch(`collections/${id}/cards`, 12) as CardsSearchResult;

    const getGalery = (): GaleryItem[] => {
        return (data as CardAPI[]).map(({ _id, images, name }) => ({ _id, img: images[0], img2: images[1], title: name }));
    }

    return (
        <main ref={componentRef} className="main collection">
            {collection ?
                <>
                    <h1 className="collection__title">{collection.name}</h1>
                    <Text className="collection__description">{collection.description}</Text>
                    <Galery galery={getGalery()} model="cards" />
                    <Pagination amount={amount} limit={12} page={page} setPage={setPage} />
                </> : <Loading />}
        </main>
    );
};