import React from "react";

/**
 * BigButton is a React component that displays a large clickable button.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.className - Additional CSS classes to apply to the button.
 * @returns {JSX.Element} A div element that wraps a button element.
 */
export default function BigButton({children, onClick, className}) {
    return (
        <div className="
            w-96 h-96 bg-back rounded
            flex flex-col justify-center
            duration-300 transition-all
            border-8 border-gray-200 drop-shadow-2xl
            hover:rounded-3xl hover:scale-95 active:scale-90
        ">
            <button onClick={onClick} className={`flex-grow ${className}`}>
                {children}
            </button>
        </div>
    );
}

/**
 * IconBigButton is a React component that displays a BigButton with an icon and a label.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.icon - The source URL of the icon to be displayed.
 * @param {string} props.label - The label to be displayed below the icon.
 * @param {string} props.hint - The small text to be displayed below the label.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A BigButton component with an icon and a label.
 */
export function IconBigButton({icon, label, hint, onClick}) {
    return (
        <BigButton onClick={onClick} className="relative flex flex-col justify-around gap-1 p-10">
            <img src={icon} alt={label} className="w-40 h-40 mx-auto"/>
            <p className="text-3xl mx-auto">{label}</p>
            {hint && <p className="absolute bottom-0 left-0 mb-4 text-center w-full text-md text-gray-800">{hint}</p>}
        </BigButton>
    );
}

/**
 * TextBigButton is a React component that displays a BigButton with a title and a text.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title to be displayed at the top of the button.
 * @param {string} props.text - The text to be displayed below the title.
 * @param {string} props.hint - The small text to be displayed below the label.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A BigButton component with a title and a text.
 */
export function TextBigButton({title, text, hint, onClick}) {
    return (
        <BigButton onClick={onClick} className="flex flex-col justify-start gap-5 p-6">
            <p className="text-4xl my-6 font-bold mx-auto">{title}</p>
            <p className="text-xl mx-auto">{text}</p>
            {hint && <p className="text-md text-gray-800 mx-auto">{hint}</p>}
        </BigButton>
    );
}
