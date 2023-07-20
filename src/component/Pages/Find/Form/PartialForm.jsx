import React from "react";
import storage from "../../../../assets/images/background.jpeg";
import Field from "../../../Util/Form/Field";
import {DynamicExplanatoryForm} from "../../../Util/Form/Form";

export default function PartialForm({onFinish, onReturn}) {
    return (
        <DynamicExplanatoryForm
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
            name="userName"
            type="text"
        />
        <Field
            label="رقم الهاتف"
            name="phoneNumber"
            type="tel"
        />
        <Field
            label="مكان السكن"
            name="residenceLocation"
            type="text"
        />
    </>,
    <>
        <Field
            label="نوع المواد المراد تخزينها"
            name="materialType"
            type="text"
        />
        <Field
            label="المدة المتوقعة للاستئجار"
            name="expectedRentalDuration"
            type="number"
        />
        <Field
            label="المساحة المراد استئجارها"
            name="requiredStorageSpace"
            type="number"
        />
        <Field
            label="المواقع المرغوبة للمخزن"
            name="desiredStorageLocation"
            type="text"
        />
    </>
]
