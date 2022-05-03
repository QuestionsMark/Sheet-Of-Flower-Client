import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    title: string;
    text: string;
    icon: IconProp;
}

export const ContactInfo = ({ title, text, icon }: Props) => {
    return (
        <div className="contact__info">
            <FontAwesomeIcon icon={icon} className="contact__icon" />
            <h3 className="contact__info-title">{title}</h3>
            <p className="contact__info-text">{text}</p>
        </div>
    );
}