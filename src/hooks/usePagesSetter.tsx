import { Dispatch, SetStateAction, useEffect } from "react";
import { Page } from "../components/common/Pagination";

export const usePagesSetter = (page: Page, amount: number, searchPhrase: string, setPage: Dispatch<SetStateAction<Page>>) => {
    useEffect(() => {
        setPage(prev => ({
            current: prev.current,
            next: Math.ceil(amount / 12) >= page.current + 1 ? page.current + 1 : null,
            prev: page.current - 1 > 0 ? page.current - 1 : null,
        }))
    }, [amount, page.current, searchPhrase]);
};