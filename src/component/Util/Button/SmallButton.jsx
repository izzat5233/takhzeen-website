import React from "react";
import {useNavigate} from "react-router-dom";
import {BsArrowRightShort} from "react-icons/bs";
import {PiHeadphonesFill} from "react-icons/pi";

/**
 * SmallButton is a React component that displays a button with an icon and a label.
 * It can be used anywhere, for example in a form.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {React.ReactNode} props.icon - The icon to be displayed within the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {boolean} props.disabled - Whether the button is disabled. The default is false.
 * @param {string} className - A string of class names that will be added to the button.
 * @returns {JSX.Element} A div element that wraps a button element.
 */
export default function SmallButton({label, icon, onClick, disabled = false, className}) {
    return (
        <div className={`flex flex-row gap-4 justify-center ${className}`}>
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <button
                type="button"
                onClick={onClick}
                className="
                    flex flex-col justify-center
                    text-6xl rounded-full w-16 h-16
                    border-2 border-gray-800 disabled:text-gray-500
                    hover:bg-primary hover:text-white hover:border-primary transition-all
                "
                disabled={disabled}
            >
                <div className="m-auto">
                    {icon}
                </div>
            </button>
        </div>
    );
}

/**
 * A small button that goes back to home screen on click.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @returns {JSX.Element} A SmallButton component with a right arrow icon.
 */
export function ReturnHomeButton({label}) {
    const navigate = useNavigate();

    return (
        <SmallButton
            label={label}
            icon={<BsArrowRightShort/>}
            onClick={() => navigate("/")}
        />
    );
}

/**
 * A small button that goes to contact page.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @returns {JSX.Element} A SmallButton component with a right arrow icon.
 */
export function GoToContactButton({label}) {
    const navigate = useNavigate();

    return (
        <SmallButton
            label={label}
            icon={<PiHeadphonesFill className="text-4xl mx-auto"/>}
            onClick={() => navigate("/contact")}
        />
    );
}