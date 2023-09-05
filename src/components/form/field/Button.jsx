import NextStageButton, {PrevStageButton} from "../../../utils/form/FormButton";
import buttons from "../../button/Button.module.css";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import React from "react";

/**
 * A label button that functions as 'Next' button in a form.
 * It contains a left arrow icon.
 *
 * @param {object} props - The properties that define the ContinueButton component.
 * @param {string} props.label - Label displayed next to the button
 * @return {JSX.Element}
 */
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

/**
 * A label button that functions as 'Back' button in a form.
 * It contains a right arrow icon.
 *
 * @param {object} props - The properties that define the BackButton component.
 * @param {string} props.label - Label displayed next to the button
 */
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