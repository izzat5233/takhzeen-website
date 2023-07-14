import {motion} from "framer-motion";
import React from "react";

export function ExpandedInOutBackground({className}) {
    return (
        <motion.div
            className={`absolute -z-10 origin-right h-full w-full right-0 top-0 ${className}`}
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            exit={{scaleX: 0}}
            transition={{duration: 1, ease: "anticipate"}}
        />
    );
}