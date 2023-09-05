import React from "react";
import {motion, useScroll} from "framer-motion";

export function ScrollBar() {
    const {scrollYProgress} = useScroll();

    return (
        <motion.div
            className="fixed right-0 bottom-0 w-full h-1 z-20 origin-right bg-gradient-orange-blue"
            style={{scaleX: scrollYProgress}}
        />
    );
}

export default function withScrollBar(Components) {
    return (
        <>
            {Components}
            <ScrollBar/>
        </>
    );
}