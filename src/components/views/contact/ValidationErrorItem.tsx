interface Props {
    error: string;
}

export const ValidationErrorItem = ({ error }: Props) => {
    return <li className="form__validation-item">{error}</li>;
}