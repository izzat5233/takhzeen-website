import {Field, useField} from "formik";
import fields from "./Field.module.css";
import React from "react";

/**
 * TextField component renders a text input field with label and error message.
 *
 * @param {object} props - The properties that define the TextField component.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label of the field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.placeholder - The placeholder of the input field.
 * @param {boolean} props.required - Whether the field is required.
 */
export default function TextField({name, label, type, placeholder, required}) {
    const [field, meta] = useField(name);
    return (
        <div className="flex flex-col gap-2 mb-4 text-xl">
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                {...field}
                id={name}
                name={name}
                className={fields.text}
                type={type}
                placeholder={placeholder}
                required={required}
            />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}