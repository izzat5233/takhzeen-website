import {motion, useScroll} from "framer-motion";
import React from "react";

export function ScrollProgressBar() {
    const {scrollYProgress} = useScroll();

    return (
        <motion.div
            className={`fixed left-0 bottom-0 w-full h-1 z-20 origin-left bg-gradient-orange-blue`}
            style={{scaleX: scrollYProgress}}
        />
    );
}