import React from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";

/**
 * FormButton is a React component that displays a button with an icon and a label.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {React.ReactNode} props.icon - The icon to be displayed within the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} className - A string of class names that will be added to the button. The default class is "mt-8".
 * @returns {JSX.Element} A div element that wraps a button element.
 */
export default function FormButton({label, icon, onClick, className = "mt-8"}) {
    return (
        <div className={`flex flex-row gap-4 justify-center ${className}`}>
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <button
                onClick={onClick}
                className="
                    text-5xl lg:text-6xl rounded-full
                    border-2 border-gray-800
                    hover:bg-primary hover:text-white hover:border-primary transition-all
                "
            >
                {icon}
            </button>
        </div>
    );
}

/**
 * ContinueButton is a React component that displays a FormButton with a left arrow icon.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a left arrow icon.
 */
export function ContinueButton({label, onClick}) {
    return (
        <FormButton
            label={label}
            icon={<BsArrowLeftShort/>}
            onClick={onClick}
        />
    );
}

/**
 * BackButton is a React component that displays a FormButton with a right arrow icon.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a right arrow icon.
 */
export function BackButton({label, onClick}) {
    return (
        <FormButton
            label={label}
            icon={<BsArrowRightShort/>}
            onClick={onClick}
        />
    );
}

/**
 * FinishButton is a React component that displays a FormButton with a checkmark icon.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a checkmark icon.
 */
export function FinishButton({label, onClick}) {
    return (
        <FormButton
            label={label}
            icon={<IoMdCheckmark/>}
            onClick={onClick}
        />
    );
}
