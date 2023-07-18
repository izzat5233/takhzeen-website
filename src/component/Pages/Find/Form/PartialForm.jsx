import React from "react";
import storage from "../../../../assets/images/background.jpeg";
import Field from "../../../Util/Form/Field";
import {DynamicForm} from "./FormTemplate";

export default function PartialForm({onFinish, onReturn}) {
    return (
        <DynamicForm
            title="ابحث عن مخزن"
            image={storage}
            header="دعنا نجد مخزنك المثالي"
            text="لا داعي للقلق بشأن تخزين كميات صغيرة بعد الآن. نحن نقدم لك كفاءة التخزين الكبير في مساحات صغيرة لتلبية احتياجاتك الفردية."
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