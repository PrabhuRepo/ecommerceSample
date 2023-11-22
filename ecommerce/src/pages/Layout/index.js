import React from "react";
import Header from "./appBar";
import Footer from "./footer";
import Content from "./content";

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}

export default AppLayout