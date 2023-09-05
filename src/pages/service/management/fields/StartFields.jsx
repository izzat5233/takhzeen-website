import icon from "../../../../assets/icons/normal/management.png";
import forms from "../../../../components/form/Form.module.css";
import React from "react";
import {ContinueButton} from "../../../../components/form/field/Button";
import TextField from "../../../../components/form/field/Text";
import FormStartPage from "../../../../components/page/FormStart";

export default function StartFields() {
    return (
        <FormStartPage
            icon={icon}
            title="ادارة المخازن"
            text="نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلاسة عملياتك التخزينية…"
            form={
                <div className={`${forms.simpleForm} w-dynamic max-w-md`}>
                    <h2 className={forms.simpleTitle}>عرفنا عن نفسك</h2>
                    <TextField name="companyName" label="اسم الشركة" type="text" required/>
                    <TextField name="phoneNumber" label="رقم الهاتف" type="tel" required/>
                    <TextField name="email" label="البريد الاكتروني" type="email"/>
                    <ContinueButton label="ابدأ"/>
                </div>
            }
        />
    );
}

export const startFieldsInitialValues = {
    companyName: '',
    phoneNumber: '',
    email: '',
}