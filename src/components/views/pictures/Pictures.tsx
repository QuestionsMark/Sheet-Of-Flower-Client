import { PictureAPI } from "../../../types";

import { Loading } from "../../common/Loading";
import { Search } from "../../common/Search";
import { Pagination } from "../../common/Pagination";
import { Text } from "../../common/Text";
import { Galery, GaleryItem } from "../../common/Galery";

import { SearchResult, useSearch } from "../../../hooks/useSearch";

interface PictureSearchResult extends SearchResult {
    data: PictureAPI[];
}

export const Pictures = () => {

    const { amount, data, loading, page, searchPhrase, setPage, handleSearchPhraseChange } = useSearch('pictures', 12) as PictureSearchResult;

    const getGalery = (): GaleryItem[] => {
        return (data as PictureAPI[]).map(({ _id, images, name }) => ({ _id, img: images[0], img2: images[1], title: name }));
    }

    return (
        <main className="main pictures">
            {/* <Text></Text> */}
            <Search value={searchPhrase} handleSearch={handleSearchPhraseChange} />
            {loading ? <Loading /> : <Galery galery={getGalery()} model="pictures" />}
            {!loading && <Pagination page={page} setPage={setPage} amount={amount} limit={12} />}
        </main>
    );
}