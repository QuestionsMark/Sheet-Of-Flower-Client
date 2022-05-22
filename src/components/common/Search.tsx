interface Props {
    value: string;
    handleSearch: (text: string) => void;
}

export const Search = ({ handleSearch, value }: Props) => {
    return (
        <input type="text" className="search" placeholder="Szukaj" value={value} onChange={e => handleSearch(e.target.value)} />
    );
}