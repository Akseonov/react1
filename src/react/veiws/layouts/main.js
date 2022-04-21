import React from "react";
import Header from "./header";

import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>
                <Outlet />
            </div>
        </>
    );
};

export default Main;
