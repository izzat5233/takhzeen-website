import {Field, useField} from "formik";
import fields from "./Field.module.css";
import React from "react";

/**
 * CheckboxField component renders a checkbox with label and error message.
 *
 * @param {object} props - The properties that define the CheckboxField component.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label of the field.
 */
export default function CheckboxField({name, label, ...rest}) {
    const [field, meta] = useField({name, type: 'checkbox'});
    return (
        <div className="flex flex-col gap-2 mb-4 text-xl">
            <label className="inline-flex items-center gap-4 cursor-pointer">
                <Field
                    {...field}
                    id={name}
                    name={name}
                    type="checkbox"
                    className={fields.checkbox}
                    {...rest}
                />
                {label}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

/**
 * CheckboxFieldList component renders a list of checkboxes with labels.
 *
 * @param {object} props - The properties that define the CheckboxFieldList component.
 * @param {Array} props.names - The names of the fields.
 * @param {Array} props.labels - The labels of the fields.
 * @param {Array} props.descriptions - The descriptions of the fields.
 * @param {boolean} props.separate - Whether fields should be seperated with <hr> or not.
 * @param {string} props.title - The title of the field list.
 */
export function CheckboxFieldList({names, labels, descriptions, separate, title}) {
    return (
        <div className="flex flex-col text-xl">
            <p className="text-gray-800 mb-4">{title}</p>
            {names.map((name, index) => (
                <div className="flex flex-col" key={index}>
                    <CheckboxField
                        name={name}
                        label={labels[index]}
                    />
                    {descriptions && descriptions[index] &&
                        <p className="mb-4 px-8 text-base">{descriptions[index]}</p>}
                    {separate && index !== names.length - 1 && <hr className="mb-4"/>}
                </div>
            ))}
        </div>
    );
}