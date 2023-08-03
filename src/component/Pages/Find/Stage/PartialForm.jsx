import React from "react";
import MultiStageForm from "../../../Util/Form/Form";
import SimpleFormTemplate from "../../../Util/Form/Template";
import {BackButton, ContinueButton} from "../../../Util/Button/FormButton";
import TextField from "../../../Util/Form/Field";

export default function PartialForm({onSubmit}) {
    return (
        <MultiStageForm
            name="partialForm"
            onSubmit={onSubmit}
            initialValues={{
                userName: '',
                phoneNumber: '',
                residenceLocation: '',
                materialType: '',
                expectedRentalDuration: '',
                requiredStorageSpace: '',
                desiredStorageLocation: '',
            }}
            stages={[
                <Start/>,
                <Fill/>
            ]}
        />
    );
}

function Start() {
    return (
        <SimpleFormTemplate className="w-dynamic max-w-md">
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
            <ContinueButton label="ابدأ"/>
        </SimpleFormTemplate>
    );
}

function Fill() {
    return (
        <SimpleFormTemplate className="max-w-2xl mx-auto">
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
            <div className="flex gap-6 justify-center">
                <BackButton label="ارجع"/>
                <ContinueButton label="تابع"/>
            </div>
        </SimpleFormTemplate>
    );
}