import { useRef } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { useData } from "../../../hooks/useData";
import { CardAPI } from "../../../types";
import { makeSlidesFromImages } from "../../../utils/getSlides";
import { Link } from "../../common/Link";
import { Loading } from "../../common/Loading";
import { MyCarousel } from "../../common/MyCarousel";
import { SpecificationItem } from "../../common/SpecificationItem";
import { Text } from "../../common/Text";

export const Card = () => {

    const componentRef = useRef<HTMLElement>(null);
    const { id } = useParams();

    const card = useData(`cards/${id}`, componentRef) as CardAPI;

    const specificationList = () => {
        return (card as CardAPI).specifications.map(s => <SpecificationItem key={s._id} specification={s} />);
    };

    return (
        <main ref={componentRef} className="main product">
            {card ?
                <div className="product__wrapper">
                    <section className="product__content">
                        <SRLWrapper>
                            <MyCarousel slides={makeSlidesFromImages(card.images)} showThumbs className="product__carousel" />
                        </SRLWrapper>
                    </section>
                    <aside className="product__aside">
                        <div className="product__aside-section">
                            <h2 className="product__title">{card.name}</h2>
                            <h3 className="product__subtitle">{card.productType}</h3>
                            <Text className="product__description">{card.description}</Text>
                        </div>
                        {card.specifications.length > 0 && <div className="product__aside-section specifications">
                            <ul className="specifications__list">
                                {specificationList()}
                            </ul>
                        </div>}
                        <div className="product__aside-section">
                            <Link to={card.shopLink}>zamów kartkę</Link>
                        </div>
                    </aside>
                </div> : <Loading />}
        </main>
    );
};