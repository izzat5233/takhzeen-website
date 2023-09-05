import forms from "../../../../components/form/Form.module.css";
import React from "react";
import {BackButton, ContinueButton} from "../../../../components/form/field/Button";
import TextField from "../../../../components/form/field/Text";
import RadioField from "../../../../components/form/field/Radio";
import {CheckboxFieldList} from "../../../../components/form/field/Checkbox";

export default function ManagementFields() {
    return (
        <div className={`${forms.simpleForm} gap-8 mx-auto py-16 lg:py-10 lg:my-28 w-full lg:max-w-screen-md`}>
            <h2 className={forms.simpleTitle}>زودنا بمعلوماتك لنحدد حاجتك</h2>
            <div className="flex flex-col gap-5">
                <TextField name="storageSize" label="ما هي مساحة مخزنك ؟" type="number"/>
                <TextField name="storageFinish" label="ما درجة تشطيب مخزنك ؟" type="text"/>
                <TextField name="goodsNature" label="ما طبيعة البضاعة التي تقوم بتخزينها ؟" type="text"/>
                <RadioField
                    name="insurance"
                    label="هل تمتلك تأمين دائم على بضاعتك ؟"
                    required={true}
                    options={[
                        {value: 'yes', label: 'نعم'},
                        {value: 'no', label: 'لا'},
                    ]}
                />
                <TextField name="stockRenewalFrequency" label="ما مدى تكرار تجديد المخزون لديك ؟" type="text"/>
                <CheckboxFieldList
                    title="ما طبيعة الخدمات التي ترغب ان نوفرها لك؟"
                    names={[
                        "servicesPreparation",
                        "servicesReceipt",
                        "servicesArrangement",
                        "servicesClassification",
                        "servicesInventory",
                        "servicesDelivery",
                    ]}
                    labels={[
                        "تهيئة المخزن (تنظيف وصيانة)",
                        "استلام البضاعة",
                        "ترتيب البضاعة",
                        "تصنيف البضاعة",
                        "جرد البضاعة",
                        "تسليم البضاعة",
                    ]}
                />
                <TextField name="desiredServices" placeholder="غيرها" type="text"/>
                <TextField name="howDidYouFindUs" label="(اختياري) كيف توصلت لشركة تخزين ؟" type="text"/>
                <RadioField
                    name="contactMethod"
                    label="ما الطريقة التي ترغب بأن نتواصل بها معك ؟"
                    required={true}
                    options={[
                        {value: 'phone', label: 'الهاتف'},
                        {value: 'email', label: 'البريد الإلكتروني'},
                    ]}
                />
            </div>
            <div className="flex gap-6 justify-center">
                <BackButton label="ارجع"/>
                <ContinueButton label="تابع"/>
            </div>
        </div>
    );
}

export const managementFieldsInitialValues = {
    storageSize: '',
    storageFinish: '',
    goodsNature: '',
    insurance: '',
    stockRenewalFrequency: '',
    servicesPreparation: false,
    servicesReceipt: false,
    servicesArrangement: false,
    servicesClassification: false,
    servicesInventory: false,
    servicesDelivery: false,
    desiredServices: '',
    howDidYouFindUs: '',
    contactMethod: '',
};