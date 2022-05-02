interface Props {
    src: string;
}

export const GaleryItem = ({ src }: Props) => {
    return (
        <li className="galery__item">
            <a href={src}>
                <img src={src} alt="siema" className="img" />
            </a>
        </li>
    );
};