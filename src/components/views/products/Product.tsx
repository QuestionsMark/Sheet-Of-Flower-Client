import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { ProductAPI } from "../../../types";
import { fetchApiTool } from "../../../utils/fetchHelper";
import { Slide } from "../../common/CarouselItem";
import { Link } from "../../common/Link";
import { Loading } from "../../common/Loading";

import { MyCarousel } from "../../common/MyCarousel";
import { SpecificationItem } from "../../common/SpecificationItem";
import { Text } from "../../common/Text";

export const Product = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();

    const [product, setProduct] = useState<ProductAPI | null>(null);
    console.log(product);

    const getProduct = async () => {
        const startTime = new Date().valueOf();
        const response = await fetchApiTool(`products/${id}`);
        if (!response.status || !componentRef.current) return;
        const endTime = new Date().valueOf();
        setTimeout(() => {
            if (!componentRef.current) return;
            setProduct(response.results as ProductAPI);
        }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
    };

    const getSlides = (): Slide[] => {
        return (product as ProductAPI).images.map(i => ({ _id: i._id as string, alt: i.alt, src: i.src }));
    };

    const specificationList = () => {
        return (product as ProductAPI).specifications.map(s => <SpecificationItem key={s._id} specification={s} />);
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <main ref={componentRef} className="main product">
            {product ?
                <div className="product__wrapper">
                    <section className="product__content">
                        <SRLWrapper>
                            <MyCarousel slides={getSlides()} showThumbs className="product__carousel" />
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
                            <Link to={product.shopLink}>kup teraz</Link>
                        </div>
                    </aside>
                </div> : <Loading />}
        </main>
    );
};