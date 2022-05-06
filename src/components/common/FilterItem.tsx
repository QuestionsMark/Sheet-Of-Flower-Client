interface Props {
    checked: boolean;
    hashtag?: boolean;
    value: string;
    handleChange: (value: string) => void;
}

export const FilterItem = ({ checked, hashtag, value, handleChange }: Props) => {
    return (
        <li className={`filter__item${checked ? ' checked' : ''}`} onClick={() => handleChange(value)}>
            {hashtag && '#'}{value}
        </li>
    );
};