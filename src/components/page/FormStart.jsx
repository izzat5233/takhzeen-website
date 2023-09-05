import React from "react";

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
export default function FormStartPage({icon, title, text, form}) {
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