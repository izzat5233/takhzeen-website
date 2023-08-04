import {BsArrowUpShort} from "react-icons/bs";
import {animateScroll} from "react-scroll";
import React, {useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";
import {motion} from "framer-motion";

export default function ScrollToTobButton() {
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(true);
    useMotionValueEvent(scrollY, "change", (latest) => {
        setHidden(latest <= 500);
    });

    return (
        <motion.div
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 50}
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ease: "anticipate", duration: 0.4}}
            className="fixed bottom-2 right-3 z-10"
        >
            <button
                type="button"
                onClick={() => animateScroll.scrollToTop()}
                className="
                    border border-black rounded
                    opacity-40 hover:opacity-100 transition-opacity
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                "
            >
                <BsArrowUpShort/>
            </button>
        </motion.div>
    );
}