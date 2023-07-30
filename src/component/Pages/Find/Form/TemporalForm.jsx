import React from "react";
import storage from "../../../../assets/images/img15.png";
import TextField from "../../../Util/Form/Field";
import {DynamicExplanatoryForm} from "../../../Util/Form/Template";

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
    </>,
    <>
        <TextField
            label="نوع المواد المراد تخزينها"
            name="materialType"
            type="text"
        />
        <TextField
            label="المدة المتوقعة للاستئجار"
            name="expectedRentalDuration"
            type="number"
        />
        <TextField
            label="المساحة المراد استئجارها"
            name="requiredStorageSpace"
            type="number"
        />
        <TextField
            label="المواقع المرغوبة للمخزن"
            name="desiredStorageLocation"
            type="text"
        />
    </>
]
