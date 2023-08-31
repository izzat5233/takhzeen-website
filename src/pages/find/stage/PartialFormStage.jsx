import React from "react";
import {MultiStageFormHandler} from "../../../utils/form/FormHandler";
import forms from "../../../components/form/Form.module.css";
import {ImageBackground, withBackground} from "../../../components/background/Background";
import storage from "../../../assets/images/storage2.png";
import {basicFormFields, basicFormInitialValues} from "../content/basicFormFields";
import {partialFormFields, partialFormInitialValues} from "../content/partialFormFields";

function PartialFormStage({onSubmit}) {
    return (
        <MultiStageFormHandler
            name="partialForm"
            onSubmit={onSubmit}
            initialValues={{
                ...basicFormInitialValues,
                ...partialFormInitialValues,
            }}
            stages={[
                <div className={`${forms.simpleForm} w-dynamic max-w-md`}>
                    {basicFormFields}
                </div>,
                <div className={`${forms.simpleForm} max-w-2xl mx-auto`}>
                    {partialFormFields}
                </div>,
            ]}
        />
    );
}

export default withBackground(PartialFormStage, <ImageBackground image={storage}/>);