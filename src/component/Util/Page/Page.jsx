import React from "react";

/**
 * Page is a React component that serves as a wrapper for page content.
 * It provides a consistent layout for pages and can include a background element.
 * It's recommended to wrap Template components with Page.
 *
 * @param {React.ReactNode} children - The content to be displayed on the page.
 * @param {React.ReactNode} background - An optional background element that will be placed behind the page content.
 * @param {string} className - A string of class names that will be added to the main div of the page. This is optional.
 * @param {object} rest - Any additional props will be spread onto the main div of the page.
 * @returns {JSX.Element} A div component that wraps the page content and optionally includes a background.
 */
export default function Page({children, background, className, ...rest}) {
    return (
        <div
            dir="rtl"
            className="min-h-screen relative flex flex-col justify-center"
            {...rest}
        >
            {background}
            <div className={`w-full mx-auto lg:py-20 xl:px-32 lg:px-16 px-0 py-4 ${className}`}>
                {children}
            </div>
        </div>
    );
}
