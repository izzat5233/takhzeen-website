import icon from "../../../../assets/icons/normal/mediation.png";
import forms from "../../../../components/form/Form.module.css";
import React from "react";
import {ContinueButton} from "../../../../components/form/field/Button";
import TextField from "../../../../components/form/field/Text";
import FormStartPage from "../../../../components/page/FormStart";

export default function StartFields() {
    return (
        <FormStartPage
            icon={icon}
            title="اعرض مخزنك"
            text="مساحتنا الالكترونية تفتح لك آفاق التواصل؛ لايجاد طلبك من مخزن يلائمك أو مستأجر تبحث عنه."
            form={
                <div className={`${forms.simpleForm} w-dynamic max-w-md`}>
                    <TextField label="الاسم" name="userName" type="text"/>
                    <TextField label="رقم الهاتف" name="phoneNumber" type="tel"/>
                    <TextField label="مكان السكن" name="residenceLocation" type="text"/>
                    <ContinueButton label="تابع"/>
                </div>
            }
        />
    );
}

export const startFieldsInitialValues = {
    userName: '',
    phoneNumber: '',
    residenceLocation: '',
}