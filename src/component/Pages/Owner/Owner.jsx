import React from 'react'
import {FormPage} from "../../Util/Form/Page";
import {AnimatePresence} from "framer-motion";
import {ChoiceWrapper, TextChoice} from "../../Util/Form/Choice";

export default function Owner() {
    return (
        <FormPage className="w-fit mx-auto">
            <AnimatePresence>
                <ChoiceWrapper text="ما الخدمة التي تناسب رغبتك في تأجير مخزنك؟">
                    <TextChoice
                        title="تخزينك الوجيز"
                        text="نوفر لك فرصة استغلال شاغر المساحة في مخزنك لفترات قصيرة تتراوح ما بين يوم وشهر تبعا لحاجة المستأجر ضمن متابعة من قبلنا"
                        onClick={() => {
                        }}
                    />
                    <TextChoice
                        title="التخزين الجزئي"
                        text="نتيح الفرصة امامك للتغلب على مشكلة عدم ملائمة مساحتك مع حاجة المستأجر من خلال قيامنا بتقطيع مخزنك بمادة قابلة للازالة لاحقا وايجاد اكثر من مستاجر لك داخل هذه المساحة بطريقة فعالة"
                        onClick={() => {
                        }}
                    />
                    <TextChoice
                        title="وسيطك"
                        text="نعمل الى جانبك لفتح افاق التواصل مع المستأجرين لايجاد المستأجر الانسب لمواصفات مساحتك التخزينية"
                        onClick={() => {
                        }}
                    />
                </ChoiceWrapper>
            </AnimatePresence>
        </FormPage>
    );
}
