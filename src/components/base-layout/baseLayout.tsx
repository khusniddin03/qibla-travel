import { FC, PropsWithChildren, ReactNode } from "react";
import "./baseLayout.css";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
    children: ReactNode;
}

export const BaseLayout: FC<Props> = ({
    children,
}: PropsWithChildren<Props>) => {
    return (
        <div className="baselayout">
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};