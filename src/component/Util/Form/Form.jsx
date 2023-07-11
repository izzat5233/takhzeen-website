import React from "react";

export default function Form({title, onSubmit, children, className = ""}) {
    return (
        <div className={`
            p-10 flex flex-col gap-4
            bg-white drop-shadow-2xl rounded-md
            transition-all duration-150
            ${className}
        `}>
            {title && <h2 className="text-center text-4xl mb-8">{title}</h2>}
            <form onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}>
                {children}
            </form>
        </div>
    );
}
