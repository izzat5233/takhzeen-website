import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import {SimpleWaveBackground} from "../../components/background/Background";
import {MultiStageFormHandler} from "../../utils/form/FormHandler";
import {FormFinishedPage, FormStartPage} from "../../components/page/Page";
import icon from "../../assets/icons/normal/management.png";
import TextField, {BackButton, CheckboxFieldList, ContinueButton, RadioField} from "../../components/field/Field";
import useIsWideScreen from "../../utils/hook/Screen";
import forms from "../../components/form/Form.module.css";
import {DefaultLoader} from "../../components/progress/Loader";

export default function Management() {
    const [finished, setFinished] = useState(false);
    const isWideScreen = useIsWideScreen();

    return (
        <section className="page">
            {isWideScreen && <SimpleWaveBackground/>}
            <AnimatePresence>
                {!finished ?
                    <MultiStageFormHandler
                        name="managementForm"
                        stages={[<Start/>, <Fill/>]}
                        initialValues={initialValues}
                        onSubmit={() => setFinished(true)}
                        loader={<DefaultLoader color="#ff684c"/>}
                    /> :
                    <FormFinishedPage
                        messages={[
                            "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                            "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                        ]}
                    />}
            </AnimatePresence>
        </section>
    );
}

const initialValues = {
    companyName: '',
    phoneNumber: '',
    email: '',
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

function Start() {
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

export function Fill() {
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
