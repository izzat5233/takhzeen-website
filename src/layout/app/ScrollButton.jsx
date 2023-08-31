import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import React, {useState} from "react";
import {animateScroll} from "react-scroll";
import buttons from "../../components/button/Button.module.css";
import {BsArrowUpShort} from "react-icons/bs";

/**
 * A square button that scrolls to the top of page on click.
 *
 * @return {JSX.Element}
 */
export default function ScrollToTobButton({visibleAt = 500}) {
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(true);
    useMotionValueEvent(scrollY, "change", (latest) => {
        setHidden(latest <= visibleAt);
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
                className={buttons.contrastSquare}
            >
                <BsArrowUpShort/>
            </button>
        </motion.div>
    );
}