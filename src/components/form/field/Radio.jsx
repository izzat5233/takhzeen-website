import {Field, useField} from "formik";
import fields from "./Field.module.css";
import React from "react";

/**
 * RadioField component renders a set of radio buttons with labels and error message.
 *
 * @param {object} props - The properties that define the RadioField component.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label of the field.
 * @param {Array} props.options - The options for the radio buttons.
 */
export default function RadioField({name, label, options, ...rest}) {
    const [field, meta] = useField(name);
    return (
        <fieldset className="flex flex-col text-xl">
            <legend className="mb-4">{label}</legend>
            <div className="flex gap-6 flex-wrap justify-start text-lg">
                {options.map((option, index) => (
                    <label key={index} className="inline-flex gap-4 items-center cursor-pointer">
                        <Field
                            {...field}
                            type="radio"
                            name={name}
                            value={option.value}
                            className={fields.radio}
                            {...rest}
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