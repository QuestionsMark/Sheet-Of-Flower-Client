import { useRef, useState } from "react";
import { ProductAPI, ProductTypeAPI } from "../../../types";

import { Loading } from "../../common/Loading";
import { Search } from "../../common/Search";
import { Pagination } from "../../common/Pagination";
import { Galery, GaleryItem } from "../../common/Galery";

import { SearchResult, useSearch } from "../../../hooks/useSearch";
import { ProductTypesFilter } from "../../common/ProductTypesFilter";
import { useData } from "../../../hooks/useData";

interface ProductSearchResult extends SearchResult {
    data: ProductAPI[];
}

export const Products = () => {

    const componentRef = useRef<HTMLElement>(null);

    const productTypes = useData('product-types', componentRef) as ProductTypeAPI[];

    const [choosedProductType, setChoosedProductType] = useState<string>('');
    const handleProductTypesChange = (productType: string) => {
        setChoosedProductType(prev => prev === productType ? '' : productType);
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

    return (
        <main ref={componentRef} className="main cards">
            <Search value={searchPhrase} handleSearch={handleSearchPhraseChange} />
            {productTypes && <ProductTypesFilter choosedProductType={choosedProductType} productTypes={productTypes} handleChange={handleProductTypesChange} />}
            {loading || !productTypes ? <Loading /> : <Galery galery={getGalery()} model="products" />}
            {!loading && <Pagination page={page} setPage={setPage} amount={amount} limit={12} />}
        </main>
    );
}