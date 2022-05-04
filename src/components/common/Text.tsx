import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Text = ({ children }: Props) => {
    return (
        <p className="text">{children}</p>
    );
}