import { CollectionAPI } from "../../../types";

import { Loading } from "../../common/Loading";
import { Search } from "../../common/Search";
import { Pagination } from "../../common/Pagination";
import { Text } from "../../common/Text";
import { Galery, GaleryItem } from "../../common/Galery";

import { SearchResult, useSearch } from "../../../hooks/useSearch";

interface CollectionSearchResult extends SearchResult {
    data: CollectionAPI[];
}

export const Collections = () => {

    const { amount, data, loading, page, searchPhrase, setPage, handleSearchPhraseChange } = useSearch('collections', 12) as CollectionSearchResult;

    const getGalery = (): GaleryItem[] => {
        return (data as CollectionAPI[]).map(({ _id, images, name }) => ({ _id, img: images[0], img2: images[1], title: name }));
    }

    return (
        <main className="main cards">
            {/* <Text></Text> */}
            <Search value={searchPhrase} handleSearch={handleSearchPhraseChange} />
            {loading ? <Loading /> : <Galery galery={getGalery()} model="collections" />}
            {!loading && <Pagination page={page} setPage={setPage} amount={amount} limit={12} />}
        </main>
    );
}