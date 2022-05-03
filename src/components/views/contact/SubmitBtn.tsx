interface Props {
    errors: string[];
    value: string;
}

export const SubmitBtn = ({ errors, value }: Props) => {
    return (
        <input type="submit" className="form__submit" value={value} disabled={errors.length !== 0} />
    );
}