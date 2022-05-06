import { ProductTypeAPI } from "../../types";
import { FilterItem } from "./FilterItem";

interface Props {
    productTypes: ProductTypeAPI[];
    choosedProductType: string;
    handleChange: (value: string) => void;
}

export const ProductTypesFilter = ({ choosedProductType, productTypes, handleChange }: Props) => {

    const checkIsChecked = (choosed: string) => {
        return choosedProductType === choosed;
    };

    const productTypesList = () => {
        return productTypes.map(h => <FilterItem key={h._id} checked={checkIsChecked(h.name)} value={h.name} handleChange={handleChange} />);
    };

    return (
        <div className="filter">
            <ul className="filter__list">
                {productTypesList()}
            </ul>
        </div>
    );
};