import { ChangeEvent } from "react";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    value: string;
    checked: boolean;
    handleHashtagsChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ checked, value, handleHashtagsChange }: Props) => {
    return (
        <li className="filter__item">
            <label className="filter__label">
                <input id="checkbox" type="checkbox" value={value} checked={checked} onChange={handleHashtagsChange} className="filter__inp" />
                <div className="filter__checkbox">
                    {checked ? <FontAwesomeIcon icon={faXmark} className="filter__checkbox-icon" /> : null}
                </div>
                {value}
            </label>
        </li>
    );
};