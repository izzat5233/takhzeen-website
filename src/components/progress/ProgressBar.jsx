import React from "react";
import {motion, useScroll} from "framer-motion";
import special from "./Progress.module.css";

export default function ProgressBar({progress}) {
    return (
        <motion.div
            className={special.defaultProgressBar}
            style={{scaleX: progress}}
        />
    );
}

export function ScrollBar() {
    const {scrollYProgress} = useScroll();

    return (
        <ProgressBar progress={scrollYProgress}/>
    );
}

export function withScrollBar(Components) {
    return (
        <>
            {Components}
            <ScrollBar/>
        </>
    );
}