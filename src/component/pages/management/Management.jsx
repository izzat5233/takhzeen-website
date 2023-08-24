import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import Page from "../../utils/page/Page";
import {BackButton, ContinueButton} from "../../utils/button/FormButton";
import {SimpleWaveBackground} from "../../utils/page/Background";
import MultiStageForm from "../../utils/form/Form";
import {FormFinishedTemplate, FormStartTemplate} from "../../utils/page/Template";
import icon from "../../../assets/icons/normal/management.png";
import SimpleFormTemplate from "../../utils/form/Template";
import TextField, {CheckboxFieldList, RadioField} from "../../utils/form/Field";
import useIsWideScreen from "../../utils/hook/Screen";

export default function Management() {
    const [finished, setFinished] = useState(false);
    const isWideScreen = useIsWideScreen();

    return (
        <Page background={isWideScreen && <SimpleWaveBackground/>}>
            <AnimatePresence>
                {!finished ?
                    <MultiStageForm
                        name="managementForm"
                        stages={[<Start/>, <Fill/>]}
                        initialValues={initialValues}
                        onSubmit={() => setFinished(true)}
                        loaderColor="#ff684c" // primary color
                    /> :
                    <FormFinishedTemplate
                        messages={[
                            "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                            "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                        ]}
                    />}
            </AnimatePresence>
        </Page>
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
        <FormStartTemplate
            icon={icon}
            title="ادارة المخازن"
            text="نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلاسة عملياتك التخزينية…"
            form={
                <SimpleFormTemplate title="عرفنا عن نفسك" className="w-dynamic max-w-md">
                    <TextField name="companyName" label="اسم الشركة" type="text" required/>
                    <TextField name="phoneNumber" label="رقم الهاتف" type="tel" required/>
                    <TextField name="email" label="البريد الاكتروني" type="email"/>
                    <ContinueButton label="ابدأ"/>
                </SimpleFormTemplate>
            }
        />
    );
}

export function Fill() {
    return (
        <SimpleFormTemplate
            title="زودنا بمعلوماتك لنحدد حاجتك"
            className="mx-auto py-16 lg:py-10 lg:my-28 w-full lg:max-w-screen-md"
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
                <BackButton label="ارجع"/>
                <ContinueButton label="تابع"/>
            </div>
        </SimpleFormTemplate>
    );
}
