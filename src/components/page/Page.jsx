import React from "react";
import {motion} from "framer-motion";
import LabelButton from "../button/Button";
import {BsArrowRightShort} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {PiHeadphonesFill} from "react-icons/pi";

/**
 * FormStartPage displays a simple form page with an icon, title, and a text.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.icon - The URL of the icon to be displayed.
 * @param {string} props.title - The title to be displayed on the page.
 * @param {string} props.text - The text to be displayed on the page.
 * @param {React.ReactNode} props.form - The form to be displayed on the page.
 * @returns {JSX.Element} A div element that wraps the icon, title, text, and form.
 */
export function FormStartPage({icon, title, text, form}) {
    return (
        <div className="pt-12 lg:py-32 flex flex-col lg:flex-row gap-10 lg:gap-0">
            <div className="mx-auto flex flex-col gap-6 px-4 md:mr-12 lg:mr-20">
                <div className="mx-auto flex flex-col sm:flex-row gap-4 mb-5 md:mb-10">
                    {icon && <img src={icon} alt="Logo" className="w-32 md:w-40 mx-auto"/>}
                    {title && <h1 className="font-bold text-5xl md:text-6xl my-auto text-center">{title}</h1>}
                </div>
                <p className="text-xl lg:text-2xl max-w-screen-md">{text}</p>
            </div>
            <div className="flex-grow lg:mx-14">
                {form}
            </div>
        </div>
    );
}

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
export function BigChoicePage({title, children, className}) {
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

/**
 * FormFinishedPage is a page shown after finishing a form.
 * It displays several messages, a return button, and a contact button.
 *
 * @param messages - All messages to be displayed
 * @param className
 * @returns {JSX.Element}
 */
export function FormFinishedPage({messages, className}) {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={`
                px-dynamic mx-auto flex flex-col gap-5
                text-start text-base md:text-xl lg:text-2xl
                ${className ? className : ""}
            `}
        >
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
            <div className="justifying items-center sm:flex-row gap-4 flex-wrap">
                <LabelButton
                    label="العودة"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate("/")}
                    className="sm:flex-row flex-col-reverse items-center"
                />
                <LabelButton
                    label="اتصل الآن"
                    icon={<PiHeadphonesFill className="text-4xl mx-auto"/>}
                    onClick={() => navigate("/contact")}
                    className="sm:flex-row flex-col-reverse items-center"
                />
            </div>
        </motion.div>
    );
}
