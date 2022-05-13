import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    to: string;
}

export const Link = ({ children, to }: Props) => {
    return <a href={to} className="link" target="_blank" rel="noreferrer">{children}</a>;
}