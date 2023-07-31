import {createContext, useContext} from "react";

/**
 * FormStageContext is a React context that provides the current stage of a form and functions to go to the next and previous stages.
 * The default value is an object with a stage of 0 and no-op functions for nextStage and prevStage.
 */
export const FormStageContext = createContext({
    stage: 0,
    nextStage: () => {
    },
    prevStage: () => {
    },
});

/**
 * useFormContext is a custom hook that provides the value of the FormStageContext.
 * It can be used within a component that is a descendant of a FormStageContext.Provider to access the current stage and functions to go to the next and previous stages.
 *
 * @returns {{stage: number, prevStage: (function(): void), nextStage: (function(): void)}} An object containing the current stage and functions to go to the next and previous stages.
 */
const useFormContext = () => {
    return useContext(FormStageContext);
}

export default useFormContext;
