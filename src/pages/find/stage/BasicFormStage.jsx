import SimpleForm from "../../../components/form/Form";
import {basicFormFields, basicFormInitialValues} from "../content/basicFormFields";
import React from "react";
import {ImageBackground, withBackground} from "../../../components/background/Background";
import storage from "../../../assets/images/storage2.png";

function BasicFormStage({name, onSubmit, ...rest}) {
    return (
        <SimpleForm
            name={name}
            onSubmit={onSubmit}
            initialValues={basicFormInitialValues}
            className="w-dynamic max-w-md"
            {...rest}
        >
            {basicFormFields}
        </SimpleForm>
    );
}

export default withBackground(BasicFormStage, <ImageBackground image={storage}/>);
