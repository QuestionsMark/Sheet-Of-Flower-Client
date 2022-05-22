import { useRef } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { useData } from "../../../hooks/useData";
import { ProductAPI } from "../../../types";
import { makeSlidesFromImages } from "../../../utils/getSlides";
import { Loading } from "../../common/Loading";

import { MyCarousel } from "../../common/MyCarousel";
import { ProductAsideInfo } from "../../common/ProductAsideInfo";

export const Product = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();
    const product = useData(`products/${id}`, componentRef) as ProductAPI;

    return (
        <main ref={componentRef} className="main product">
            {product ?
                <div className="product__wrapper slide-animation">
                    <section className="product__content">
                        <SRLWrapper>
                            <MyCarousel slides={makeSlidesFromImages(product.images)} showThumbs className="product__carousel" />
                        </SRLWrapper>
                    </section>
                    <ProductAsideInfo linkText="zamów produkt" product={product} />
                </div> : <Loading />}
        </main>
    );
};