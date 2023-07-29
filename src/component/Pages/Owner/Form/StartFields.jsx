import TextField from "../../../Util/Form/Field";
import {ContinueButton} from "../../../Util/Button/FormButton";
import React from "react";

export default function StartFields(onSubmit) {
    return (
        <>
            <TextField label="الاسم" name="userName" type="text"/>
            <TextField label="رقم الهاتف" name="phoneNumber" type="tel"/>
            <TextField label="مكان السكن" name="residenceLocation" type="text"/>
            <ContinueButton
                label="تابع"
                onClick={onSubmit}
            />
        </>
    );
}