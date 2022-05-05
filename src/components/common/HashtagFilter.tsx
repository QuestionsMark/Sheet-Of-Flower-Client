import { ChangeEvent } from "react";
import { HashtagAPI } from "../../types";
import { Checkbox } from "./Checkbox";

interface Props {
    hashtags: HashtagAPI[];
    choosedHashtags: string[];
    handleHashtagsChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const HashtagFilter = ({ choosedHashtags, hashtags, handleHashtagsChange }: Props) => {

    const checkIsChecked = (hashtag: string) => {
        return choosedHashtags.includes(hashtag);
    };

    const hashtagList = () => {
        return hashtags.map(h => <Checkbox key={h._id} checked={checkIsChecked(h.name)} value={h.name} handleHashtagsChange={handleHashtagsChange} />);
    };

    return (
        <div className="filter">
            <ul className="filter__list">
                {hashtagList()}
            </ul>
        </div>
    );
};