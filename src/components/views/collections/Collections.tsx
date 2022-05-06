import { useEffect, useRef, useState } from "react";
import { CollectionAPI, HashtagAPI } from "../../../types";

import { Loading } from "../../common/Loading";
import { Search } from "../../common/Search";
import { Pagination } from "../../common/Pagination";
import { Text } from "../../common/Text";
import { Galery, GaleryItem } from "../../common/Galery";

import { SearchResult, useSearch } from "../../../hooks/useSearch";
import { HashtagFilter } from "../../common/HashtagFilter";
import { fetchApiTool } from "../../../utils/fetchHelper";

interface CollectionSearchResult extends SearchResult {
    data: CollectionAPI[];
}

export const Collections = () => {

    const componentRef = useRef<HTMLElement>(null);

    const [hashtags, setHashtags] = useState<HashtagAPI[] | null>(null);
    const getHashtags = async () => {
        const startTime = new Date().valueOf();
        const response = await fetchApiTool('hashtags');
        if (!response.status) return console.warn(response.message);
        const endTime = new Date().valueOf();
        setTimeout(() => {
            if (!componentRef.current) return;
            setHashtags(response.results as HashtagAPI[]);
        }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
    };
    const [choosedHashtags, setChoosedHashtags] = useState<string[]>([]);
    const handleHashtagsChange = (hashtag: string) => {
        setChoosedHashtags(prev => prev.includes(hashtag) ? prev.filter(h => h !== hashtag) : [...prev, hashtag]);
    };

    const {
        amount,
        data,
        loading,
        page,
        searchPhrase,
        setPage,
        handleSearchPhraseChange
    } = useSearch(
        'collections',
        12,
        choosedHashtags.length > 0 ? choosedHashtags : null,
    ) as CollectionSearchResult;

    const getGalery = (): GaleryItem[] => {
        return (data as CollectionAPI[]).map(({ _id, images, name }) => ({ _id, img: images[0], img2: images[1], title: name }));
    }

    useEffect(() => {
        getHashtags();
    }, []);

    return (
        <main ref={componentRef} className="main cards">
            {/* <Text></Text> */}
            <Search value={searchPhrase} handleSearch={handleSearchPhraseChange} />
            {hashtags && <HashtagFilter choosedHashtags={choosedHashtags} hashtags={hashtags} handleChange={handleHashtagsChange} />}
            {loading || !hashtags ? <Loading /> : <Galery galery={getGalery()} model="collections" />}
            {!loading && hashtags && <Pagination page={page} setPage={setPage} amount={amount} limit={12} />}
        </main>
    );
}