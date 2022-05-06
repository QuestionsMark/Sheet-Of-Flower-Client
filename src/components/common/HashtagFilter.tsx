import { HashtagAPI } from "../../types";
import { FilterItem } from "./FilterItem";

interface Props {
    hashtags: HashtagAPI[];
    choosedHashtags: string[];
    handleChange: (value: string) => void;
}

export const HashtagFilter = ({ choosedHashtags, hashtags, handleChange }: Props) => {

    const checkIsChecked = (hashtag: string) => {
        return choosedHashtags.includes(hashtag);
    };

    const hashtagList = () => {
        return hashtags.map(h => <FilterItem key={h._id} checked={checkIsChecked(h.name)} hashtag value={h.name} handleChange={handleChange} />);
    };

    return (
        <div className="filter">
            <ul className="filter__list">
                {hashtagList()}
            </ul>
        </div>
    );
};