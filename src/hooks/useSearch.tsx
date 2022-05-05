import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import axios, { Canceler, AxiosError } from 'axios';
import { CardAPI, HashtagAPI, ProductAPI, ProductTypeAPI, CollectionAPI, NewsAPI, PictureAPI } from '../types';
import { HOST_ADDRESS } from '../config';
import { defaultPage, Page } from '../components/common/Pagination';
import { useScrollUp } from './useScrollUp';

export type Data = CardAPI[] | HashtagAPI[] | ProductAPI[] | ProductTypeAPI[] | CollectionAPI[] | PictureAPI[] | NewsAPI[];

export interface SearchResult {
    data: any;
    loading: boolean;
    page: Page;
    amount: number;
    searchPhrase: string;
    handleSearchPhraseChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setPage: Dispatch<SetStateAction<Page>>;
}

export const useSearch = (
    collection: string,
    limit: number,
    hashtags: string[] | null = null,
    productType: string | null = null
): SearchResult => {

    const intervalId = useRef<NodeJS.Timeout | null>(null);

    const [page, setPage] = useState<Page>(defaultPage);
    const [searchPhrase, setSearchPhrase] = useState('');
    const handleSearchPhraseChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPage(defaultPage);
        setSearchPhrase(e.target.value);
    };
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Data>([]);
    const [amount, setAmount] = useState(0);

    useScrollUp(page.current);

    useEffect(() => {
        setData([]);
        const startTime = new Date().valueOf();
        if (intervalId.current) {
            clearTimeout(intervalId.current);
        }
        setLoading(true);
        let cancel: Canceler;
        axios({
            method: 'GET',
            url: `${HOST_ADDRESS}/${collection}`,
            params: {
                search: searchPhrase,
                page: page.current,
                limit,
                hashtags,
                productType,
            },
            cancelToken: new axios.CancelToken(c => cancel = c),
        })
            .then(res => {
                const endTime = new Date().valueOf();
                intervalId.current = setTimeout(() => {
                    setLoading(false);
                    setData(prev => [...prev, ...res.data.results]);
                    setAmount(res.data.amount);
                    setPage(prev => ({
                        current: prev.current,
                        next: Math.ceil(res.data.amount / 12) >= page.current + 1 ? page.current + 1 : null,
                        prev: page.current - 1 > 0 ? page.current - 1 : null,
                    }))
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            })
            .catch((e: AxiosError) => {
                const endTime = new Date().valueOf();
                intervalId.current = setTimeout(() => {
                    if (axios.isCancel(e)) return;
                }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
            });
        return () => {
            if (intervalId.current) {
                clearTimeout(intervalId.current);
            }
            cancel();
        }

    }, [page.current, searchPhrase, hashtags, productType]);

    return { loading, data, amount, page, searchPhrase, setPage, handleSearchPhraseChange };
};