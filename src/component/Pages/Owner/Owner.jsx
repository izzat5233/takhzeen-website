import React, {useState} from 'react'
import {AnimatePresence, motion} from "framer-motion";
import warehouse from "../../../assets/images/background.jpeg";
import SimpleForm from "../../Util/Form/Form";
import TextField, {CheckboxFieldList, RadioField} from "../../Util/Form/Field";
import {BackButton, ContinueButton} from "../../Util/Button/FormButton";
import Page from "../../Util/Page/Page";
import {ImageBackground} from "../../Util/Page/Background";
import {useNavigate} from "react-router-dom";

export default function Owner() {
    const [stage, setStage] = useState("start");

    return (
        <Page className="mx-auto" background={<ImageBackground image={warehouse}/>}>
            <AnimatePresence>
                <div hidden={stage !== "start"}>
                    {startForm(() => setStage("continue"))}
                </div>
                <div hidden={stage !== "continue"}>
                    {fillForm(() => setStage("finished"), () => setStage("start"))}
                </div>
                <div hidden={stage !== "finished"}>
                    <FinishedStage/>
                </div>
            </AnimatePresence>
        </Page>
    );
}

const startForm = (onSubmit) =>
    <SimpleForm
        name="ownerStartForm"
        className="w-fit mx-auto"
        onSubmit={() => {
        }}
    >
        <TextField label="الاسم" name="userName" type="text"/>
        <TextField label="رقم الهاتف" name="phoneNumber" type="tel"/>
        <TextField label="مكان السكن" name="residenceLocation" type="text"/>
        <ContinueButton
            type="submit"
            label="تابع"
            onClick={onSubmit}
        />
    </SimpleForm>

const fillForm = (onSubmit, onReturn) =>
    <div className="mx-auto max-w-screen-md w-full">
        <SimpleForm
            name="ownerContinueForm"
            onSubmit={() => {
            }}
        >
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
                <BackButton
                    label="ارجع"
                    onClick={onReturn}
                />
                <ContinueButton
                    type="submit"
                    label="تابع"
                    onClick={onSubmit}
                />
            </div>
        </SimpleForm>
    </div>;

export function FinishedStage() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="
                text-center text-3xl font-bold flex flex-col gap-5 justify-center
                bg-back bg-opacity-95 rounded-xl p-8 w-fit mx-auto
            "
        >
            <p className="mx-auto">نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين</p>
            <p className="mx-auto"> في حال واجهتك اية استفسارات أو تخوفات اضافية يرجى التواصل معنا.</p>
            <BackButton
                label="العودة"
                onClick={() => navigate("/")}
            />
        </motion.div>
    );
}