import React from "react";
import storage from "../../../../assets/images/img15.png";
import Field from "../../../Util/Form/Field";
import {DynamicForm} from "../../../Util/Form/Page";

export default function TemporalForm({onFinish, onReturn}) {
    return (
        <DynamicForm
            title="ابحث عن مخزن"
            image={storage}
            header="دعنا نجد مخزنك المثالي"
            text="ابحث عن مساحة تخزين مؤقتة لأغراضك بسهولة. سواء كانت لمدة أيام، أسابيع أو أشهر، نحن هنا لنقدم لك المساعدة."
            fields={fields}
            onFinish={onFinish}
            onReturn={onReturn}
        />
    );
}

const fields = [
    <>
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
    </>,
    <>
        <Field
            label="نوع المواد المراد تخزينها"
            type="text"
        />
        <Field
            label="المدة المتوقعة للاستئجار"
            type="number"
        />
        <Field
            label="المساحة المراد استئجارها"
            type="number"
        />
        <Field
            label="المواقع المرغوبة للمخزن"
            type="text"
        />
    </>
]