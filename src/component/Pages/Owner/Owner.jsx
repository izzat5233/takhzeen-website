import React, {useState} from 'react'
import {DynamicForm, FormPage} from "../../Util/Form/Page";
import {AnimatePresence} from "framer-motion";
import {ChoiceWrapper, TextChoice} from "../../Util/Form/Choice";
import warehouse from "../../../assets/images/warehouse.png";
import Form from "../../Util/Form/Form";
import Field from "../../Util/Form/Field";
import {ContinueButton} from "../../Util/Button/FormButton";

export default function Owner() {
    const [stage, setStage] = useState("choice");

    return (
        <FormPage className="w-fit mx-auto">
            <AnimatePresence>
                {stage === "choice" &&
                    <ChoiceWrapper text="ما الخدمة التي تناسب رغبتك في تأجير مخزنك؟">
                        <TextChoice
                            title="تخزينك الوجيز"
                            text="نوفر لك فرصة استغلال شاغر المساحة في مخزنك لفترات قصيرة تتراوح ما بين يوم وشهر تبعا لحاجة المستأجر ضمن متابعة من قبلنا"
                            onClick={() => setStage("start")}
                        />
                        <TextChoice
                            title="التخزين الجزئي"
                            text="نتيح الفرصة امامك للتغلب على مشكلة عدم ملائمة مساحتك مع حاجة المستأجر من خلال قيامنا بتقطيع مخزنك بمادة قابلة للازالة لاحقا وايجاد اكثر من مستاجر لك داخل هذه المساحة بطريقة فعالة"
                            onClick={() => setStage("start")}
                        />
                        <TextChoice
                            title="وسيطك"
                            text="نعمل الى جانبك لفتح افاق التواصل مع المستأجرين لايجاد المستأجر الانسب لمواصفات مساحتك التخزينية"
                            onClick={() => setStage("start")}
                        />
                    </ChoiceWrapper>}
                {stage === "start" &&
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-40">
                        <img src={warehouse} alt="Warehouse" className="w-96 h-fit my-auto"/>
                        <Form
                            title="عرفنا عن نفسك"
                            onSubmit={() => {
                            }}
                        >
                            <Field
                                label="الاسم"
                                type="text"
                            />
                            <Field
                                label="رقم الهاتف"
                                type="tel"
                            />
                            <Field
                                label="مكان السكن"
                                type="text"
                            />
                            <ContinueButton
                                label="المتابعة"
                            />
                        </Form>
                    </div>}
            </AnimatePresence>
        </FormPage>
    );
}
