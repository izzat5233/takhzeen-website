import {motion} from "framer-motion";
import React from "react";
import Svg, {ShadowFilter, SimpleWavePath} from "./Svg";
import backgrounds from "./Background.module.css";

/**
 * A HOC wrapper that adds a background to the component.
 * Alternatively you could wrap the component with Page and specify a background prop to it.
 *
 * @param WrappedComponent - The component or page to be wrapped.
 * @param Background - The background element.
 * It's recommended to use one of the exported backgrounds.
 * @returns {function(*): *}
 */
export function withBackground(WrappedComponent, Background) {
    return function (props) {
        return (
            <>
                {Background}
                <WrappedComponent {...props}/>
            </>
        );
    };
}

/**
 * An image as a fixed, full-screen background.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the image to be displayed as the background.
 * @returns {JSX.Element} A motion.img element from the framer-motion library, which provides animation capabilities.
 */
export function ImageBackground({image}) {
    return (
        <motion.img
            src={image}
            alt="Backround"
            className={backgrounds.cover}
            initial={{scale: 1.05}}
            animate={{scale: 1}}
            transition={{duration: 0.5}}
        />
    );
}

/**
 * An animated background.
 * The background starts from a scale of 0 (fully contracted) and expands to a scale of 1 (fully expanded).
 *
 * @param {string} className - The style classNames of the background. Default is "bg-gradient-primary".
 * @returns {JSX.Element} A `motion.div` component that represents the animated background.
 */
export function ExpandedInOutBackground({className = "bg-gradient-primary"}) {
    return (
        <motion.div
            className={`origin-right right-0 ${backgrounds.exact} ${className}`}
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            exit={{scaleX: 0}}
            transition={{duration: 1, ease: "anticipate"}}
        />
    );
}

/**
 * An animated triangle shape background.
 * The triangle shape starts from a translateY of 500 (fully down) and moves to a translateY of 0 (fully up).
 *
 * @returns {JSX.Element} A `motion.div` component that represents the animated triangle shape background.
 */
export function SimpleWaveBackground() {
    return (
        <motion.div
            initial={{translateY: 500}}
            animate={{translateY: 0}}
            transition={{duration: 1, ease: "anticipate"}}
            className={`${backgrounds.exact} min-h-screen bottom-0 left-0`}
        >
            <Svg className="absolute bottom-0"
                 viewBox="0 0 1600 450" defs={<ShadowFilter id="shadow" offset="2"/>}>
                <SimpleWavePath fill="#ff684c" filter="url(#shadow)"/>
            </Svg>
        </motion.div>
    );
}
