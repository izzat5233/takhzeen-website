import React from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import useFormStage from "../Hook/Form";
import {useFormikContext} from "formik";
import {useNavigate} from "react-router-dom";

/**
 * FormButton is a React component that displays a button with an icon and a label.
 * Its designed to fit in a form.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {React.ReactNode} props.icon - The icon to be displayed within the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} className - A string of class names that will be added to the button. The default class is "mt-8".
 * @returns {JSX.Element} A div element that wraps a button element.
 */
export default function FormButton({label, icon, onClick, className = "mt-8"}) {
    return (
        <div className={`flex flex-row gap-4 justify-center ${className}`}>
            {label && <p className="text-xl md:text-2xl my-auto">{label}</p>}
            <button
                type="button"
                onClick={onClick}
                className="
                    text-5xl lg:text-6xl rounded-full
                    border-2 border-gray-800
                    hover:bg-primary hover:text-white hover:border-primary transition-all
                "
            >
                {icon}
            </button>
        </div>
    );
}

/**
 * ContinueButton is a React component that displays a FormButton with a left arrow icon.
 * !!This button can only be used inside a form component!!
 * In a MultiStageForm, it will move the form to its next stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a left arrow icon.
 */
export function ContinueButton({label, onClick}) {
    const {handleSubmit} = useFormikContext();
    const {nextStage} = useFormStage();

    return (
        <FormButton
            label={label}
            icon={<BsArrowLeftShort/>}
            onClick={() => {
                if (handleSubmit) {
                    handleSubmit();
                }
                if (onClick) {
                    onClick();
                }
                if (nextStage) {
                    nextStage();
                }
            }}
        />
    );
}

/**
 * BackButton is a React component that displays a FormButton with a right arrow icon.
 * In a MultiStageForm, it will move the form to its previous stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a right arrow icon.
 */
export function BackButton({label, onClick}) {
    const {prevStage} = useFormStage();

    return (
        <FormButton
            label={label}
            icon={<BsArrowRightShort/>}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                if (prevStage) {
                    prevStage();
                }
            }}
        />
    );
}

/**
 * A special BackButton that is used outside a form.
 * The purpose of it is to go back to home page.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @returns {JSX.Element} A FormButton component with a right arrow icon.
 */
export function BackHomeButton({label}) {
    const navigate = useNavigate();

    return (
        <FormButton
            label={label}
            icon={<BsArrowRightShort/>}
            onClick={() => navigate("/")}
        />
    );
}

/**
 * FinishButton is a React component that displays a FormButton with a checkmark icon.
 * !!This button can only be used inside a form component!!
 * In a MultiStageForm, it will move the form to its next stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A FormButton component with a checkmark icon.
 */
export function FinishButton({label, onClick}) {
    const {handleSubmit} = useFormikContext();
    const {nextStage} = useFormStage();

    return (
        <FormButton
            label={label}
            icon={<IoMdCheckmark/>}
            onClick={() => {
                if (handleSubmit) {
                    handleSubmit();
                }
                if (onClick) {
                    onClick();
                }
                if (nextStage) {
                    nextStage();
                }
            }}
        />
    );
}
