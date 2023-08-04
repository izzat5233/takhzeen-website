import {motion} from "framer-motion";
import React from "react";
import {SimpleWaveSvg} from "./Svg";

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
 * ImageBackground is a React component that displays an image as a fixed, full-screen background.
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
            className="-z-10 fixed top-0 min-h-screen w-screen object-cover"
            initial={{scale: 1.05}}
            animate={{scale: 1}}
            transition={{duration: 0.5}}
        />
    );
}

/**
 * ExpandedInOutBackground is a React component that renders an animated background.
 * The background starts from a scale of 0 (fully contracted) and expands to a scale of 1 (fully expanded).
 * The animation is controlled by framer-motion's `motion.div` component.
 *
 * @param {string} className - A string of class names that will be added to the background. The default class is "bg-gradient-primary".
 * @returns {JSX.Element} A `motion.div` component that represents the animated background.
 */
export function ExpandedInOutBackground({className = "bg-gradient-primary"}) {
    return (
        <motion.div
            className={`absolute -z-10 origin-right w-full right-0 h-full ${className}`}
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            exit={{scaleX: 0}}
            transition={{duration: 1, ease: "anticipate"}}
        />
    );
}

/**
 * SimpleWaveBackground is a React component that renders an animated triangle shape background.
 * The triangle shape starts from a translateY of 500 (fully down) and moves to a translateY of 0 (fully up).
 * The animation is controlled by framer-motion's `motion.div` component.
 *
 * @returns {JSX.Element} A `motion.div` component that represents the animated triangle shape background.
 */
export function SimpleWaveBackground() {
    return (
        <motion.div
            initial={{translateY: 500}}
            animate={{translateY: 0}}
            transition={{duration: 1, ease: "anticipate"}}
            className="absolute min-h-screen bottom-0 left-0 w-full h-full -z-10"
        >
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <SimpleWaveSvg/>
            </div>
        </motion.div>
    );
}
