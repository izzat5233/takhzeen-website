import {useState} from "react";

/**
 * useStages is a custom hook that manages the stages of a multi-stage component.
 * It provides the current stage, a function to change the stage, and a function to render the current stage.
 *
 * @param {object} components - An object where each key is a stage name and each value is a React component for that stage.
 * @param {object} initialStage - The initial stage of the component.
 * @returns {{goToStage: (function(object): void), stage: Object, renderCurrentStage: (function(): *|null)}}
 * An object where the first element is the current stage, the second element is a function to change the stage,
 * and the third element is a function to render the current stage.
 */
const useStages = (components, initialStage) => {
    const [stage, setStage] = useState(initialStage);

    /**
     * goToStage changes the current stage to the new stage.
     *
     * @param {string} newStage - The new stage to go to.
     */
    const goToStage = (newStage) => {
        setStage(newStage);
    };

    /**
     * renderCurrentStage renders the React component for the current stage.
     *
     * @returns {React.Component|null} The React component for the current stage, or null if there is no component for the current stage.
     */
    const renderCurrentStage = () => {
        const Component = components[stage];
        return Component ? Component : null;
    };

    return {stage, goToStage, renderCurrentStage};
};

export default useStages;

/**
 * useSequenceStages is a custom hook that manages the stages of a multi-stage component in a sequential manner.
 * It provides the current stage, functions to go to the next and previous stages, a function to go to a specific stage, and a function to render the current stage.
 *
 * @param {Array} components - An array where each index is a stage number and each value is a React component for that stage.
 * @param {number} initialStage - The initial stage of the component. Default is 0.
 * @returns {{stage: number, nextStage: (function(): void), prevStage: (function(): void), goToStage: (function(number): void), renderCurrentStage: (function(): *|null)}}
 * An object where the first element is the current stage, the second and third elements are functions to go to the next and previous stages respectively, the fourth element is a function to go to a specific stage, and the fifth element is a function to render the current stage.
 */
export const useSequenceStages = (components, initialStage = 0) => {
    const [stage, setStage] = useState(initialStage);

    const nextStage = () => {
        if (stage < components.length) {
            setStage(stage + 1);
        }
    };

    const prevStage = () => {
        if (stage > 0) {
            setStage(stage - 1);
        }
    };

    const goToStage = (newStage) => {
        if (newStage >= 0 && newStage < components.length) {
            setStage(newStage);
        }
    };

    const renderCurrentStage = () => {
        const Component = components[stage];
        return Component ? Component : null;
    };

    return {stage, nextStage, prevStage, goToStage, renderCurrentStage};
}
