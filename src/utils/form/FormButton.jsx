import React from "react";
import useFormContext from "./FormContext";
import {useFormikContext} from "formik";

/**
 * A button handler which makes it function as a submit button in a form.
 * Used only inside a form component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A submit button component.
 */
function FormButton({onClick, ...rest}) {
    const {handleSubmit, isSubmitting} = useFormikContext();

    return (
        <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
                if (handleSubmit) {
                    handleSubmit();
                }
                if (onClick) {
                    onClick();
                }
            }}
            {...rest}
        />
    );
}

/**
 * !!This button can only be used inside a form component!!
 * In a MultiStageFormHandler, it will move the form to its next stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A LabelButton component with a left arrow icon.
 */
export default function NextStageButton({onClick, ...rest}) {
    const {nextStage} = useFormContext();

    return (
        <FormButton
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                if (nextStage) {
                    nextStage();
                }
            }}
            {...rest}
        />
    );
}

/**
 * !!This button can only be used inside a form component!!
 * In a MultiStageFormHandler, it will move the form to its previous stage.
 *
 * @param {object} props - The properties passed to the component.
 * @param {function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A LabelButton component with a right arrow icon.
 */
export function PrevStageButton({onClick, ...rest}) {
    const {prevStage} = useFormContext();

    return (
        <FormButton
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                if (prevStage) {
                    prevStage();
                }
            }}
            {...rest}
        />
    );
}
