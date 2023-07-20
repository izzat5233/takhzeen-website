import React from "react";

export default function Field({label, type, required }) {
    const id = label + type;
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-gray-800" htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                className="
                    px-4 py-1 rounded-md text-gray-700
                    outline-none border-2 focus:border-primary transition-all
                "
                type={type}
                required={required}
            />
        </div>
    );
}