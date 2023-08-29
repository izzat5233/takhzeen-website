import React from "react";
import buttons from "./Button.module.css";

/**
 * A small round button with an icon and a label.
 * It can be used anywhere, for example in a form.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {React.ReactNode} props.icon - The icon to be displayed within the button.
 * @param {string} className - A string of class names that will be added to the whole component.
 * @returns {JSX.Element} A div element that wraps a button element.
 */
export default function LabelButton({label, icon, className, ...rest}) {
    return (
        <div className={`flex flex-row gap-4 justify-center ${className}`}>
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <button className={buttons.smallRound} {...rest}>
                {icon}
            </button>
        </div>
    );
}

/**
 * A big button with an icon and a label.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.icon - The source URL of the icon to be displayed.
 * @param {string} props.label - The label to be displayed below the icon.
 * @returns {JSX.Element} A BigButton component with an icon and a label.
 */
export function BigButton({icon, label, ...rest}) {
    return (
        <button className={buttons.bigSquare} {...rest}>
            <div className="flex-grow relative justifying gap-8 p-10">
                <img src={icon} alt={label} className="w-40 h-40 mx-auto"/>
                <p className="text-3xl mx-auto">{label}</p>
            </div>
        </button>
    );
}
