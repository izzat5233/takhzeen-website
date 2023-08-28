import {SimpleForm} from "../../../components/form/Form";
import SimpleFormTemplate from "../../../components/form/Template";
import {ContinueButton} from "../../../components/form/FormButton";
import React from "react";
import TextField from "../../../components/form/Field";

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
