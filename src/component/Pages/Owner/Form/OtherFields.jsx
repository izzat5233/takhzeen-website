import TextField, {CheckboxFieldList, RadioField} from "../../../Util/Form/Field";
import {BackButton, FinishButton} from "../../../Util/Button/FormButton";
import React from "react";

export default function OtherFields(onSubmit, onReturn) {
    return (
        <>
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
                <FinishButton
                    label="تابع"
                    onClick={onSubmit}
                />
            </div>
        </>
    );
}