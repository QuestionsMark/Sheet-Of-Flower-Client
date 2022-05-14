import { CardAPI, PictureAPI, ProductAPI } from "../../types";
import { Link } from "./Link";
import { SpecificationItem } from "./SpecificationItem";
import { Text } from "./Text";

interface Props {
    product: CardAPI | PictureAPI | ProductAPI;
    linkText: string;
}

export const ProductAsideInfo = ({ product, linkText }: Props) => {

    const specificationList = () => {
        return (product as CardAPI).specifications.map(s => <SpecificationItem key={s._id} specification={s} />);
    };

    return (
        <aside className="product__aside">
            <div className="product__aside-section">
                <h2 className="product__title">{product.name}</h2>
                <h3 className="product__subtitle">{product.productType}</h3>
                <Text className="product__description">{product.description}</Text>
            </div>
            {product.specifications.length > 0 && <div className="product__aside-section specifications">
                <ul className="specifications__list">
                    {specificationList()}
                </ul>
            </div>}
            <div className="product__aside-section">
                <Link to={product.shopLink}>{linkText}</Link>
            </div>
        </aside>
    );
};