import { PropsWithChildren } from "react";
import "./container.css";

interface Props {
    className?: string;
}

const Container = ({ children, className }: PropsWithChildren<Props>) => {
    return (
        <div className={"container" + (className ? ` ${className}` : '')}>{children}</div>
    );
};

export default Container;