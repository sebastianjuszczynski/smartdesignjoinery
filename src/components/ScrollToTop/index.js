import React, { useEffect, useState } from "react";
import { ArrowUp, Arrow } from "./styled";

const ScrollToTop = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const breakpoint = 650;

    useEffect(() => {
        const handleWindowScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {scrollY > breakpoint &&
                <ArrowUp onClick={scrollToTop}>
                    <Arrow><i className="icon fas fa-chevron-up"></i></Arrow>
                </ArrowUp>}
        </>
    );
};

export default ScrollToTop;