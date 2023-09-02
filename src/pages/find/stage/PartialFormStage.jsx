import React from "react";
import {MultiStageFormHandler} from "../../../utils/form/FormHandler";
import forms from "../../../components/form/Form.module.css";
import {ImageBackground, withBackground} from "../../../components/background/Background";
import storage from "../../../assets/images/storage2.png";
import StartFields, {startFieldsInitialValues} from "../fields/StartFields";
import PartialFields, {partialFieldsInitialValues} from "../fields/PartialFields";

function PartialFormStage({onSubmit}) {
    return (
        <MultiStageFormHandler
            name="partialForm"
            onSubmit={onSubmit}
            initialValues={{
                ...startFieldsInitialValues,
                ...partialFieldsInitialValues,
            }}
            stages={[
                <div className={`${forms.simpleForm} w-dynamic max-w-md`}>
                    <StartFields/>
                </div>,
                <div className={`${forms.simpleForm} max-w-2xl mx-auto`}>
                    <PartialFields/>
                </div>,
            ]}
        />
    );
}

export default withBackground(PartialFormStage, <ImageBackground image={storage}/>);