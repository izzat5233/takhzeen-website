import {useState} from 'react';

const useStages = (components, initialStage) => {
    const [stage, setStage] = useState(initialStage);

    const goToStage = (newStage) => {
        setStage(newStage);
    };

    const renderCurrentStage = () => {
        const Component = components[stage];
        return Component ? Component : null;
    };

    return [stage, goToStage, renderCurrentStage];
};

export default useStages;
