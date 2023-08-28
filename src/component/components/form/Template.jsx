import React from "react";

/**
 * SimpleFormTemplate component renders a form shape with a title and children components.
 *
 * @param {object} props - The properties that define the SimpleFormTemplate component.
 * @param {string} props.title - The title of the form.
 * @param {React.ReactNode} props.children - The child components of the form.
 * @param {string} props.className - The CSS classes for the form.
 */
export default function SimpleFormTemplate({title, children, className}) {
    return (
        <div className={`
            px-4 sm:px-10 py-10 flex flex-col
            bg-white drop-shadow-2xl rounded-sm sm:rounded-md
            transition-all duration-150
            ${className}
        `}>
            {title && <h2 className="text-center text-4xl mb-10">{title}</h2>}
            {children}
        </div>
    );
}
