import {useState} from "react";

/**
 * useStages is a custom hook that manages the stages of a multi-stage component.
 * It provides the current stage, a function to change the stage, and a function to render the current stage.
 *
 * @param {object} components - An object where each key is a stage name and each value is a React component for that stage.
 * @param {string} initialStage - The initial stage of the component.
 * @returns {Array} An array where the first element is the current stage, the second element is a function to change the stage, and the third element is a function to render the current stage.
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

    return [stage, goToStage, renderCurrentStage];
};

export default useStages;
