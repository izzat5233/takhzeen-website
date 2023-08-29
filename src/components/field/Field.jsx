import React from "react";
import {Field, useField} from 'formik';
import fields from "./Field.module.css";
import NextStageButton, {PrevStageButton} from "../../utils/form/FormButton";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import buttons from "../button/Button.module.css";

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

/**
 * RadioField component renders a set of radio buttons with labels and error message.
 *
 * @param {object} props - The properties that define the RadioField component.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label of the field.
 * @param {Array} props.options - The options for the radio buttons.
 * @param {string} props.className - The CSS classes for the radio buttons.
 * @param {boolean} props.required - Whether the field is required.
 */
export function RadioField({name, label, options, className, required}) {
    const [field, meta] = useField(name);
    return (
        <fieldset className="flex flex-col text-xl">
            <legend className="mb-4">{label}</legend>
            <div className={`flex gap-6 flex-wrap justify-start text-lg ${className}`}>
                {options.map((option, index) => (
                    <label key={index} className="inline-flex gap-4 items-center cursor-pointer">
                        <Field
                            {...field}
                            type="radio"
                            name={name}
                            value={option.value}
                            required={required}
                            className={fields.radio}
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

/**
 * CheckboxField component renders a checkbox with label and error message.
 *
 * @param {object} props - The properties that define the CheckboxField component.
 * @param {string} props.name - The name of the field.
 * @param {string} props.label - The label of the field.
 */
export function CheckboxField({name, label}) {
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

export function ContinueButton({label, ...rest}) {
    return (
        <div className="flex flex-row gap-4 justify-center">
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <NextStageButton className={buttons.smallRound} {...rest}>
                <BsArrowLeftShort/>
            </NextStageButton>
        </div>
    );
}

export function BackButton({label, ...rest}) {
    return (
        <div className="flex flex-row gap-4 justify-center">
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <PrevStageButton className={buttons.smallRound} {...rest}>
                <BsArrowRightShort/>
            </PrevStageButton>
        </div>
    );
}