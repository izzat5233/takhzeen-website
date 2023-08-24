import {SimpleForm} from "../../../utils/form/Form";
import SimpleFormTemplate from "../../../utils/form/Template";
import {ContinueButton} from "../../../utils/button/FormButton";
import React from "react";
import TextField from "../../../utils/form/Field";

export default function BasicForm({name, onSubmit}) {
    return (
        <SimpleForm
            name={name}
            onSubmit={onSubmit}
            initialValues={{
                userName: '',
                phoneNumber: '',
                residenceLocation: '',
            }}
        >
            <BasicFormTemplate/>
        </SimpleForm>
    );
}

export function BasicFormTemplate() {
    return (
        <SimpleFormTemplate className="w-dynamic max-w-md">
            <TextField
                label="الاسم"
                name="userName"
                type="text"
            />
            <TextField
                label="رقم الهاتف"
                name="phoneNumber"
                type="text"
            />
            <TextField
                label="مكان السكن"
                name="residenceLocation"
                type="text"
            />
            <ContinueButton label="ابدأ"/>
        </SimpleFormTemplate>
    );
}
