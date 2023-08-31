import TextField, {ContinueButton} from "../../../components/field/Field";
import React from "react";

export const basicFormFields = (
    <>
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
    </>
);

export const basicFormInitialValues = {
    userName: '',
    phoneNumber: '',
    residenceLocation: '',
}