import TextField, {CheckboxField, CheckboxFieldList, RadioField} from "../../../Util/Form/Field";
import {BackButton, ContinueButton} from "../../../Util/Button/FormButton";
import SimpleForm from "../../../Util/Form/Form";
import React from "react";

export default function Fill({onSubmit, onBack}) {
    return (
        <div className="mx-auto max-w-screen-md w-full">
            <SimpleForm
                title="زودنا بمعلوماتك لنحدد حاجتك"
                onSubmit={() => {
                }}
            >
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
                    <BackButton
                        label="ارجع"
                        onClick={onBack}
                    />
                    <ContinueButton
                        label="تابع"
                        onClick={onSubmit}
                    />
                </div>
            </SimpleForm>
        </div>
    );
}
