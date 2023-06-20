import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;