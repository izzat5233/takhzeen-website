import React from "react";
import {motion} from "framer-motion";
import {GoToContactButton, ReturnHomeButton} from "../Button/SmallButton";

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
        <div className="pt-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div className="mx-auto flex flex-col gap-10 px-4 md:px-8 lg:px-9">
                <div className="mx-auto flex flex-row gap-10 mb-5 md:mb-10">
                    {icon && <img src={icon} alt="Logo" className="w-32 md:w-40"/>}
                    {title && <h1 className="font-bold text-5xl md:text-6xl my-auto">{title}</h1>}
                </div>
                <p className="text-xl lg:text-2xl">{text}</p>
            </div>
            {form}
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
        <div className={`${className} ${text && "flex flex-col py-20 text-center"}`}>
            {text && <p className="text-4xl mx-auto px-10">{text}</p>}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="flex flex-col lg:flex-row flex-wrap gap-2 justify-center mx-auto py-20">
                {children}
            </motion.div>
        </div>
    );
}

/**
 * FormFinishedTemplate is a page shown after finishing a form.
 * It shows the user several messages, a return button, and a contact button.
 *
 * @param messages - All messages to be displayed
 * @returns {Element}
 */
export function FormFinishedTemplate({messages, className}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={`
                px-dynamic mx-auto
                flex flex-col gap-5
                text-start text-md md:text-xl lg:text-2xl
                ${className ? className : ""}
            `}
        >
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
            <div className="flex gap-4 justify-center flex-wrap">
                <ReturnHomeButton label="العودة"/>
                <GoToContactButton label="اتصل الآن"/>
            </div>
        </motion.div>
    );
}
