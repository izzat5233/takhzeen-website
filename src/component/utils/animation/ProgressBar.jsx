import {motion, useScroll} from "framer-motion";
import React from "react";

/**
 * ScrollProgressBar is a React component that displays a progress bar at the bottom of the page.
 * The progress bar's width is determined by the scroll position of the page.
 * It uses the framer-motion library for animations and the useScroll hook to track the scroll position.
 *
 * @returns {JSX.Element} A motion.div component that represents the progress bar.
 * The scaleX style property of the progress bar is bound to the scrollYProgress value from useScroll,
 * which ranges from 0 to 1 as the user scrolls from the top to the bottom of the page.
 */
export function ScrollProgressBar() {
    const {scrollYProgress} = useScroll();

    return (
        <motion.div
            className={`fixed right-0 bottom-0 w-full h-1 z-20 origin-right bg-gradient-orange-blue`}
            style={{scaleX: scrollYProgress}}
        />
    );
}
