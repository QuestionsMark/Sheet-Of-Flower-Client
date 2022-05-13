import { Specification } from "../../types";

interface Props {
    specification: Specification;
}

export const SpecificationItem = ({ specification }: Props) => {
    const { description, name } = specification;
    return (
        <li className="specifications__item">
            {name} : {description}
        </li>
    );
};