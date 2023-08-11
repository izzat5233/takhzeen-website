import {SimpleForm} from "../../../Util/Form/Form";
import SimpleFormTemplate from "../../../Util/Form/Template";
import {ContinueButton} from "../../../Util/Button/FormButton";
import React from "react";
import TextField from "../../../Util/Form/Field";

export default function TemporalForm({onSubmit}) {
    return (
        <SimpleForm
            name="temporalForm"
            onSubmit={onSubmit}
            initialValues={{
                userName: '',
                phoneNumber: '',
                residenceLocation: '',
            }}
        >
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
        </SimpleForm>
    );
}
