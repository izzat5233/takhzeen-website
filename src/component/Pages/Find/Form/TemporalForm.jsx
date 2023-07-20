import React from "react";
import storage from "../../../../assets/images/img15.png";
import Field from "../../../Util/Form/Field";
import {DynamicExplanatoryForm} from "../../../Util/Form/Form";

export default function TemporalForm({onFinish, onReturn}) {
    return (
        <DynamicExplanatoryForm
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
