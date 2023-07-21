import React from 'react'
import {AnimatePresence} from "framer-motion";
import {TextBigButton} from "../../Util/Button/BigButton";
import warehouse from "../../../assets/images/warehouse.png";
import SimpleForm from "../../Util/Form/Form";
import TextField from "../../Util/Form/Field";
import {ContinueButton} from "../../Util/Button/FormButton";
import Page from "../../Util/Page/Page";
import useStages from "../../Util/Hook/Stages";
import {ExpandedInOutBackground} from "../../Util/Page/Background";
import {BigChoiceTemplate} from "../../Util/Page/Template";

export default function Owner() {
    const [stage, goToStage, renderCurrentStage] = useStages({
        "choice":
            <BigChoiceTemplate text="ما الخدمة التي تناسب رغبتك في تأجير مخزنك؟">
                <TextBigButton
                    title="تخزينك الوجيز"
                    text="نوفر لك فرصة استغلال شاغر المساحة في مخزنك لفترات قصيرة تتراوح ما بين يوم وشهر تبعا لحاجة المستأجر ضمن متابعة من قبلنا"
                    onClick={() => goToStage("start")}
                />
                <TextBigButton
                    title="التخزين الجزئي"
                    text="نتيح الفرصة امامك للتغلب على مشكلة عدم ملائمة مساحتك مع حاجة المستأجر من خلال قيامنا بتقطيع مخزنك بمادة قابلة للازالة لاحقا وايجاد اكثر من مستاجر لك داخل هذه المساحة بطريقة فعالة"
                    onClick={() => goToStage("start")}
                />
                <TextBigButton
                    title="وسيطك"
                    text="نعمل الى جانبك لفتح افاق التواصل مع المستأجرين لايجاد المستأجر الانسب لمواصفات مساحتك التخزينية"
                    onClick={() => goToStage("start")}
                />
            </BigChoiceTemplate>,
        "start":
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-40">
                <img src={warehouse} alt="Warehouse" className="w-96 h-fit my-auto"/>
                <SimpleForm
                    title="عرفنا عن نفسك"
                    onSubmit={() => {
                    }}
                >
                    <TextField
                        label="الاسم"
                        name="userName"
                        type="text"
                    />
                    <TextField
                        label="رقم الهاتف"
                        name="phoneNumber"
                        type="tel"
                    />
                    <TextField
                        label="مكان السكن"
                        name="residenceLocation"
                        type="text"
                    />
                    <ContinueButton
                        label="المتابعة"
                    />
                </SimpleForm>
            </div>
    }, "choice");

    return (
        <Page background={<ExpandedInOutBackground/>} className="w-fit mx-auto">
            <AnimatePresence>
                {renderCurrentStage()}
            </AnimatePresence>
        </Page>
    );
}
