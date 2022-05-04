import { ChangeEvent } from "react";

interface Props {
    value: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ handleSearch, value }: Props) => {
    return (
        <input type="text" className="search" placeholder="Szukaj" value={value} onChange={handleSearch} />
    );
}