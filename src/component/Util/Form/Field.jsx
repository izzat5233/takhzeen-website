import React from "react";
import {Field, useField} from 'formik';

export default function TextField({name, label, type, required}) {
    const [field, meta] = useField(name);
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-gray-800" htmlFor={name}>
                {label}
            </label>
            <Field
                id={name}
                name={name}
                className="
                    px-4 py-1 rounded-md text-gray-700
                    outline-none border-2 focus:border-primary transition-all
                "
                type={type}
                required={required}
                {...field}
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export function RadioField({name, label, options, required}) {
    const [field, meta] = useField(name);
    return (
        <fieldset className="flex flex-col">
            <legend className="text-gray-800 mb-4">{label}</legend>
            <div className="flex gap-6 flex-wrap justify-start text-xl">
                {options.map((option, index) => (
                    <label key={index} className="inline-flex gap-4 items-center text-gray-700">
                        <Field
                            type="radio"
                            name={name}
                            value={option.value}
                            required={required}
                            className="
                            appearance-none w-3 h-3 checked:bg-primary rounded-full
                            mr-2 text-primary ring-2 ring-gray-300 ring-offset-2 outline-none
                        "
                            {...field}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </fieldset>
    );
}
