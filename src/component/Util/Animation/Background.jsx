import {motion} from "framer-motion";
import React from "react";

export function ExpandedInOutBackground({className = "bg-gradient-primary", height = "full"}) {
    return (
        <motion.div
            className={`
                absolute -z-10 origin-right w-full right-0 
                ${"h-" + height} ${className}
            `}
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            exit={{scaleX: 0}}
            transition={{duration: 1, ease: "anticipate"}}
        />
    );
}