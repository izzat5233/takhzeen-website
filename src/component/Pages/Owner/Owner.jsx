import React from 'react'
import {FormPage} from "../../Util/Form/Page";
import {AnimatePresence} from "framer-motion";
import {ChoiceWrapper, TextChoice} from "../../Util/Form/Choice";

export default function Owner() {
    return (
        <FormPage className="w-fit mx-auto py-20 px-10">
            <AnimatePresence>
                <div className="flex flex-col gap-16">
                    <p className="text-4xl mx-auto">ما الخدمة التي تناسب رغبتك في تاجير مخزنك؟</p>
                    <ChoiceWrapper>
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
                </div>
            </AnimatePresence>
        </FormPage>
    );
}
