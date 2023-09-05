import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import LabelButton from "../button/Button";
import {BsArrowRightShort} from "react-icons/bs";
import {PiHeadphonesFill} from "react-icons/pi";
import React from "react";

/**
 * FormFinishedPage is a page shown after finishing a form.
 * It displays several messages, a return button, and a contact button.
 *
 * @param messages - All messages to be displayed
 * @param className
 * @returns {JSX.Element}
 */
export default function FormFinishedPage({messages, className}) {
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