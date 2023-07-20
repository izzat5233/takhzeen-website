import React from "react";
import {Field, useField} from 'formik';

export default function TextField({name, label, type, placeholder, required}) {
    const [field, meta] = useField(name);
    return (
        <div className="flex flex-col gap-2 mb-4">
            {label && <label className="text-gray-800" htmlFor={name}>{label}</label>}
            <Field
                id={name}
                name={name}
                className="
                    px-4 py-1 rounded-md text-gray-700
                    outline-none border-2 focus:border-primary transition-all
                "
                type={type}
                placeholder={placeholder}
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
                                appearance-none w-3 h-3 checked:bg-primary checked:ring-primary rounded-full
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

export function CheckboxField({name, label}) {
    const [field, meta] = useField({name, type: 'checkbox'});
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="inline-flex items-center text-gray-800 gap-4">
                <input
                    id={name}
                    name={name}
                    type="checkbox"
                    className="
                        appearance-none h-5 w-5 ring-2 ring-gray-300 rounded
                        checked:bg-primary checked:ring-primary border-2 border-back
                        mr-2 text-white align-middle transition-all
                    "
                    {...field}
                />
                {label}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export function CheckboxFieldList({names, labels, title}) {
    return (
        <div className="flex flex-col">
            <p className="text-gray-800 mb-4">{title}</p>
            {names.map((name, index) => (
                <CheckboxField
                    name={name}
                    label={labels[index]}
                />
            ))}
        </div>
    );
}
