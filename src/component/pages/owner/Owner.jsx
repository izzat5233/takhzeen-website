import React, {useState} from 'react'
import {AnimatePresence} from "framer-motion";
import SimpleFormTemplate from "../../components/form/Template";
import TextField, {CheckboxFieldList, RadioField} from "../../components/form/Field";
import {BackButton, ContinueButton} from "../../components/form/FormButton";
import Page from "../../components/page/Page";
import {SimpleWaveBackground} from "../../components/page/Background";
import MultiStageForm from "../../components/form/Form";
import {FormFinishedTemplate, FormStartTemplate} from "../../components/page/Template";
import icon from "../../../assets/icons/normal/mediation.png";
import useIsWideScreen from "../../utils/hook/Screen";

export default function Owner() {
    const [finished, setFinished] = useState(false);
    const isWideScreen = useIsWideScreen();

    return (
        <Page background={isWideScreen && <SimpleWaveBackground/>}>
            <AnimatePresence>
                {!finished ?
                    <MultiStageForm
                        name="ownerForm"
                        stages={[<Start/>, <Fill/>]}
                        initialValues={initialValues}
                        onSubmit={() => setFinished(true)}
                        loaderColor="#ff684c"
                    /> :
                    <FormFinishedTemplate
                        messages={[
                            "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                            "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                        ]}
                    />
                }
            </AnimatePresence>
        </Page>
    );
}

const initialValues = {
    userName: '',
    phoneNumber: '',
    residenceLocation: '',
    storageSize: '',
    storageFinish: '',
    servicesTemporal: false,
    servicesPartial: false,
    servicesMediation: false,
    contactMethod: '',
};

function Start() {
    return (
        <FormStartTemplate
            icon={icon}
            title="اعرض مخزنك"
            text="مساحتنا الالكترونية تفتح لك آفاق التواصل؛ لايجاد طلبك من مخزن يلائمك أو مستأجر تبحث عنه."
            form={
                <SimpleFormTemplate className="w-dynamic max-w-md">
                    <TextField label="الاسم" name="userName" type="text"/>
                    <TextField label="رقم الهاتف" name="phoneNumber" type="tel"/>
                    <TextField label="مكان السكن" name="residenceLocation" type="text"/>
                    <ContinueButton label="تابع"/>
                </SimpleFormTemplate>
            }
        />
    );
}

function Fill() {
    return (
        <SimpleFormTemplate className="mx-auto py-16 lg:py-10 lg:my-28 w-full lg:max-w-screen-md">
            <div className="flex flex-col gap-5 mb-8">
                <TextField name="storageSize" label="ما هي مساحة مخزنك ؟" type="number"/>
                <TextField name="storageFinish" label="ما درجة تشطيب مخزنك ؟" type="text"/>
                <div className="mb-4"/>
                <CheckboxFieldList
                    title="ما الخدمات التي تناسب رغبتك في تأجير مخزنك؟"
                    names={[
                        "servicesTemporal",
                        "servicesPartial",
                        "servicesMediation",
                    ]}
                    labels={[
                        "تخزينك الوجيز",
                        "التخزين الجزئي",
                        "وسيطك",
                    ]}
                    descriptions={[
                        "نوفر لك فرصة استغلال شاغر المساحة في مخزنك لفترات قصيرة تتراوح ما بين يوم وشهر تبعا لحاجة المستأجر ضمن متابعة من قبلنا.",
                        "نتيح الفرصة امامك للتغلب على مشكلة عدم ملائمة مساحتك مع حاجة المستأجر من خلال قيامنا بتقطيع مخزنك بمادة قابلة للازالة لاحقا وايجاد اكثر من مستاجر لك داخل هذه المساحة بطريقة فعالة.",
                        "نعمل الى جانبك لفتح افاق التواصل مع المستأجرين لايجاد المستأجر الانسب لمواصفات مساحتك التخزينية."
                    ]}
                    separate={true}
                />
                <div className="mb-4"/>
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