import SimpleForm from "../../../components/form/Form";
import StartFields, {startFieldsInitialValues} from "../fields/StartFields";
import React from "react";
import {ImageBackground, withBackground} from "../../../components/background/Background";
import storage from "../../../assets/images/storage2.png";

function StartFormStage({name, onSubmit, ...rest}) {
    return (
        <SimpleForm
            name={name}
            onSubmit={onSubmit}
            initialValues={startFieldsInitialValues}
            className="w-dynamic max-w-md"
            {...rest}
        >
            <StartFields/>
        </SimpleForm>
    );
}

export default withBackground(StartFormStage, <ImageBackground image={storage}/>);
