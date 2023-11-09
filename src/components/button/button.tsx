import { PropsWithChildren } from "react";
import "./button.css";

interface IProps {
    className?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
    isLoading?: boolean;
}

const Button = ({
    children,
    className,
    onClick,
    isLoading = false,
    ...other
}: PropsWithChildren<IProps>) => {
    const styles = {
        ...other,
        width: other.width,
    };
    delete styles.width;

    return (
        <button
            onClick={() => onClick && onClick()}
            style={other ? styles : {}}
            className={"button" + (className ? ` ${className}` : "")}
            daga-isloading={String(isLoading)}
            type={isLoading ? 'button' : 'submit'}
        >
            {children}
        </button>
    );
};

export default Button;
