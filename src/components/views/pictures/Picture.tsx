import { useRef } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { useData } from "../../../hooks/useData";
import { PictureAPI } from "../../../types";
import { makeSlidesFromImages } from "../../../utils/getSlides";
import { Loading } from "../../common/Loading";
import { MyCarousel } from "../../common/MyCarousel";
import { ProductAsideInfo } from "../../common/ProductAsideInfo";

export const Picture = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();

    const picture = useData(`pictures/${id}`, componentRef) as PictureAPI;

    return (
        <main ref={componentRef} className="main product">
            {picture ?
                <div className="product__wrapper">
                    <section className="product__content">
                        <SRLWrapper>
                            <MyCarousel slides={makeSlidesFromImages(picture.images)} showThumbs className="product__carousel" />
                        </SRLWrapper>
                    </section>
                    <ProductAsideInfo linkText="zamów obraz" product={picture} />
                </div> : <Loading />}
        </main>
    );
};