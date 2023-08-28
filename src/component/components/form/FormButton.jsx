import React from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import useFormContext from "../../utils/hook/Form";
import {useFormikContext} from "formik";
import LabelButton from "../button/Button";

/**
 * A small button which makes it function as a submit button in a form.
 * Used only inside a form component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {React.ReactNode} props.icon - The icon to be displayed within the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @param {string} className - A string of class names that will be added to the button. The default class is "mt-8".
 * @returns {JSX.Element} A submit button component.
 */
export default function FormButton({label, icon, onClick, className = "mt-8"}) {
    const {handleSubmit, isSubmitting} = useFormikContext();

    return (
        <LabelButton
            label={label}
            icon={icon}
            disabled={isSubmitting}
            className={className}
            onClick={() => {
                if (handleSubmit) {
                    handleSubmit();
                }
                if (onClick) {
                    onClick();
                }
            }}
        />
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
 * @returns {JSX.Element} A LabelButton component with a left arrow icon.
 */
export function ContinueButton({label, onClick}) {
    const {nextStage} = useFormContext();

    return (
        <FormButton
            label={label}
            icon={<BsArrowLeftShort/>}
            onClick={() => {
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
 * !!This button can only be used inside a form component!!
 * In a MultiStageForm, it will move the form to its previous stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A LabelButton component with a right arrow icon.
 */
export function BackButton({label, onClick}) {
    const {prevStage} = useFormContext();

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
 * FinishButton is a React component that displays a FormButton with a checkmark icon.
 * !!This button can only be used inside a form component!!
 * In a MultiStageForm, it will move the form to its next stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.label - The label to be displayed next to the button.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A LabelButton component with a checkmark icon.
 */
export function FinishButton({label, onClick}) {
    const {nextStage} = useFormContext();

    return (
        <FormButton
            label={label}
            icon={<IoMdCheckmark/>}
            onClick={() => {
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
