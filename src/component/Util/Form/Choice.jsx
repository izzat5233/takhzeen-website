import React from "react";
import {motion} from "framer-motion";

export default function Choice({children, onClick, className}) {
    return (
        <div className="
            w-96 h-96 bg-back
            flex flex-col justify-center
            duration-300 transition-all
            border-8 border-gray-100 drop-shadow-2xl
            hover:rounded-3xl hover:z-10 hover:scale-90
        ">
            <button
                onClick={onClick}
                className={`flex-grow ${className}`}
            >
                {children}
            </button>
        </div>
    );
}

export function ChoiceWrapper({children, className}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={`flex flex-col lg:flex-row gap-2 justify-center mx-auto py-20 px-10 ${className}`}>
            {children}
        </motion.div>
    );
}

export function IconChoice({icon, label, onClick}) {
    return (
        <Choice onClick={onClick} className="flex flex-col justify-around gap-5 p-10">
            <img src={icon} alt={label} className="w-40 h-40 mx-auto"/>
            <p className="text-3xl">{label}</p>
        </Choice>
    );
}

export function TextChoice({title, text, onClick}) {
    return (
        <Choice onClick={onClick} className="flex flex-col justify-start gap-5 p-6">
            <p className="text-4xl my-6 font-bold mx-auto">{title}</p>
            <p className="text-xl mx-auto">{text}</p>
        </Choice>
    );
}
