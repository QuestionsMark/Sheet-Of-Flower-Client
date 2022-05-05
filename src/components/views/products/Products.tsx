import { ProductAPI, ProductTypeAPI } from "../../../types";

import { Loading } from "../../common/Loading";
import { Search } from "../../common/Search";
import { Pagination } from "../../common/Pagination";
import { Text } from "../../common/Text";
import { Galery, GaleryItem } from "../../common/Galery";

import { SearchResult, useSearch } from "../../../hooks/useSearch";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { fetchApiTool } from "../../../utils/fetchHelper";
import { ProductTypesFilter } from "../../common/ProductTypesFilter";

interface ProductSearchResult extends SearchResult {
    data: ProductAPI[];
}

export const Products = () => {

    const componentRef = useRef<HTMLElement>(null);

    const [productTypes, setProductTypes] = useState<ProductTypeAPI[] | null>(null);
    const getProductTypes = async () => {
        const startTime = new Date().valueOf();
        const response = await fetchApiTool('product-types');
        if (!response.status) return console.warn(response.message);
        const endTime = new Date().valueOf();
        setTimeout(() => {
            if (!componentRef.current) return;
            setProductTypes(response.results as ProductTypeAPI[]);
        }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
    };
    const [choosedProductType, setChoosedProductType] = useState<string>('');
    const handleProductTypesChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChoosedProductType(prev => prev === e.target.value ? '' : e.target.value);
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
        'products',
        12,
        null,
        choosedProductType ? choosedProductType : null,
    ) as ProductSearchResult;

    const getGalery = (): GaleryItem[] => {
        return (data as ProductAPI[]).map(({ _id, images, name }) => ({ _id, img: images[0], img2: images[1], title: name }));
    }

    useEffect(() => {
        getProductTypes();
    }, []);

    return (
        <main ref={componentRef} className="main cards">
            {/* <Text></Text> */}
            <Search value={searchPhrase} handleSearch={handleSearchPhraseChange} />
            {productTypes && <ProductTypesFilter choosedProductType={choosedProductType} productTypes={productTypes} handleProductTypesChange={handleProductTypesChange} />}
            {loading || !productTypes ? <Loading /> : <Galery galery={getGalery()} model="products" />}
            {!loading && <Pagination page={page} setPage={setPage} amount={amount} limit={12} />}
        </main>
    );
}