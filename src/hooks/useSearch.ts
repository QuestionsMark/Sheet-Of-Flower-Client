import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios, { Canceler, AxiosError } from 'axios';
import { CardAPI, HashtagAPI, ProductAPI, ProductTypeAPI, CollectionAPI, NewsAPI, PictureAPI } from '../types';
import { HOST_ADDRESS } from '../config';

export type Data = CardAPI[] | HashtagAPI[] | ProductAPI[] | ProductTypeAPI[] | CollectionAPI[] | PictureAPI[] | NewsAPI[];

export interface SearchResult {
    data: any;
    loading: boolean;
    hasMore: boolean;
    amount: number;
    searchPhrase: string;
    setSearchPhrase: Dispatch<SetStateAction<string>>;
}

export default function useSearch(collection: string, page: number, limit: number, refreshData: boolean): SearchResult {

    const [searchPhrase, setSearchPhrase] = useState('')
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Data>([]);
    const [hasMore, setHasMore] = useState(false);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setData([]);
    }, [searchPhrase, refreshData]);

    useEffect(() => {
        const startTime = new Date().valueOf();
        setLoading(true);
        let cancel: Canceler;
        axios({
            method: 'GET',
            url: `${HOST_ADDRESS}/${collection}`,
            params: {
                search: searchPhrase,
                page,
                limit
            },
            cancelToken: new axios.CancelToken(c => cancel = c),
        })
            .then(res => {
                const endTime = new Date().valueOf();
                setTimeout(() => {
                    setLoading(false);
                    setData(prev => [...prev, ...res.data.results]);
                    setHasMore(res.data.results.length > 0);
                    setAmount(res.data.amount);
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            })
            .catch((e: AxiosError) => {
                const endTime = new Date().valueOf();
                setTimeout(() => {
                    if (axios.isCancel(e)) return;
                    // setError({ message: 'Wystąpił błąd podczas pobierania danych.' });
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            });
        return () => cancel();
    }, [searchPhrase, page, collection, refreshData]);

    return { loading, data, hasMore, amount, searchPhrase, setSearchPhrase };
}