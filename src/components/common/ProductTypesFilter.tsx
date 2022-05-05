import { ChangeEvent } from "react";
import { ProductTypeAPI } from "../../types";
import { Checkbox } from "./Checkbox";

interface Props {
    productTypes: ProductTypeAPI[];
    choosedProductType: string;
    handleProductTypesChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ProductTypesFilter = ({ choosedProductType, productTypes, handleProductTypesChange }: Props) => {

    const checkIsChecked = (choosed: string) => {
        return choosedProductType === choosed;
    };

    const productTypesList = () => {
        return productTypes.map(h => <Checkbox key={h._id} checked={checkIsChecked(h.name)} value={h.name} handleHashtagsChange={handleProductTypesChange} />);
    };

    return (
        <div className="filter">
            <ul className="filter__list">
                {productTypesList()}
            </ul>
        </div>
    );
};