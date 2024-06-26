import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "@common/components/semantic/Footer";
import Spotlight from "@common/components/Spotlight";

interface LayoutI {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = (props) => {
    const location = useLocation();

    const { children } = props;

    /* scroll to top when navigating to new page */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="page-layout">
            <Spotlight />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
