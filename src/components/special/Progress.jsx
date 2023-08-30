import {SyncLoader} from "react-spinners";
import React from "react";
import {motion, useScroll} from "framer-motion";
import special from "./Special.module.css";

export const DefaultLoader = ({color = "white", size = 14}) => (
    <div className="flex justify-center">
        <SyncLoader color={color} size={size}/>
    </div>
);

export default function ProgressBar({progress}) {
    return (
        <motion.div
            className={special.progressBar}
            style={{scaleX: progress}}
        />
    );
}

export function withScrollBar(Components, ProgressBarComponent = ProgressBar) {
    const {scrollYProgress} = useScroll();

    return (
        <>
            {Components}
            <ProgressBarComponent progress={scrollYProgress}/>
        </>
    );
}