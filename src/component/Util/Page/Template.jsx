import React from "react";
import {motion} from "framer-motion";

/**
 * FormStartTemplate displays a simple form page with an icon, title, and a text.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.icon - The URL of the icon to be displayed.
 * @param {string} props.title - The title to be displayed on the page.
 * @param {string} props.text - The text to be displayed on the page.
 * @param {React.ReactNode} props.form - The form to be displayed on the page.
 * @returns {JSX.Element} A div element that wraps the icon, title, text, and form.
 */
export function FormStartTemplate({icon, title, text, form}) {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
                <div className="mx-auto flex flex-row gap-10 mb-5 md:mb-10">
                    {icon && <img src={icon} alt="Logo" className="w-24 md:w-40"/>}
                    {title && <h1 className="font-bold text-3xl md:text-6xl my-auto">{title}</h1>}
                </div>
                <p className="mx-auto mb-20 mr-20 ml-20 text-2xl">{text}</p>
            </div>
            <div className="mx-auto">
                {form}
            </div>
        </div>
    );
}

/**
 * BigChoicePage is a React component that serves as a page for presenting multiple choices to the user.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The choice components to be displayed.
 * @param {string} props.className - Additional CSS classes to apply to the page.
 * @param {string} props.text - The text to be displayed above the choices.
 * @returns {JSX.Element} A Page component that wraps the provided choice components.
 */
export function BigChoiceTemplate({children, className, text}) {
    return (
        <div className={text && `flex flex-col py-20`}>
            {text && <p className="text-4xl mx-auto px-10">{text}</p>}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className={`flex flex-col lg:flex-row flex-wrap gap-2 justify-center mx-auto py-20 px-10 ${className}`}>
                {children}
            </motion.div>
        </div>
    );
}
