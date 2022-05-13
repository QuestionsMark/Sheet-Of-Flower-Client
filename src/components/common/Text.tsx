import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const Text = ({ children, className }: Props) => {
    return (
        <p className={`text${className ? ' ' + className : ''}`}>{children}</p>
    );
}