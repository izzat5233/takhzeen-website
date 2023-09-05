import {motion} from "framer-motion";
import React from "react";

/**
 * A page presenting multiple choices to the user.
 * Preferably the children should be BigButton's.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The text to be displayed above the choices.
 * @param {JSX.Element} props.children - The choice components to be displayed.
 * @param {string} props.className - Additional CSS classes to apply to the page.
 * @returns {JSX.Element} A Page component that wraps the provided choice components.
 */
export default function BigChoicePage({title, children, className}) {
    return (
        <div className={`${className} ${title && "flex flex-col py-20 text-center"}`}>
            {title &&
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="text-4xl mx-auto px-10"
                >
                    {title}
                </motion.p>}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="justifying lg:flex-row flex-wrap gap-2 mx-auto py-20">
                {children}
            </motion.div>
        </div>
    );
}