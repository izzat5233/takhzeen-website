import React from "react";

export default function Form({title, onSubmit, children}) {
    return (
        <div className="
                p-10 max-w-sm w-full
                flex flex-col gap-4
                bg-white drop-shadow-2xl rounded-md transition-all
            ">
            {title && <h2 className="text-center text-4xl mb-8">{title}</h2>}
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
}
