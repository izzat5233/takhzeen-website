import {createContext, useContext} from "react";

export const FormStageContext = createContext({
    stage: 0,
    nextStage: () => {
    },
    prevStage: () => {
    },
});

const useFormStage = () => {
    return useContext(FormStageContext);
}

export default useFormStage;
