import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { ProductAPI } from "../../../types";
import { getData } from "../../../utils/getData";
import { makeSlidesFromImages } from "../../../utils/getSlides";
import { Link } from "../../common/Link";
import { Loading } from "../../common/Loading";
import { MyCarousel } from "../../common/MyCarousel";
import { SpecificationItem } from "../../common/SpecificationItem";
import { Text } from "../../common/Text";

export const Picture = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();

    const [product, setProduct] = useState<ProductAPI | null>(null);

    const specificationList = () => {
        return (product as ProductAPI).specifications.map(s => <SpecificationItem key={s._id} specification={s} />);
    };

    useEffect(() => {
        getData(`pictures/${id}`, setProduct, componentRef);
    }, []);

    return (
        <main ref={componentRef} className="main product">
            {product ?
                <div className="product__wrapper">
                    <section className="product__content">
                        <SRLWrapper>
                            <MyCarousel slides={makeSlidesFromImages(product.images)} showThumbs className="product__carousel" />
                        </SRLWrapper>
                    </section>
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
                            <Link to={product.shopLink}>zamów obraz</Link>
                        </div>
                    </aside>
                </div> : <Loading />}
        </main>
    );
};