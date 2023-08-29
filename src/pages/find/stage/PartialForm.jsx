import React from "react";
import TextField, {BackButton, ContinueButton} from "../../../components/field/Field";
import {MultiStageFormHandler} from "../../../utils/form/FormHandler";
import forms from "../../../components/form/Form.module.css";
import {basicFormFields} from "../Find";

export default function PartialForm({onSubmit}) {
    return (
        <MultiStageFormHandler
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
                <div className={`${forms.simpleForm} w-dynamic max-w-md`}>
                    {basicFormFields}
                </div>,
                <div className={`${forms.simpleForm} max-w-2xl mx-auto`}>
                    {partialFormFields}
                </div>,
            ]}
        />
    );
}

const partialFormFields =
    <>
        <TextField
            label="نوع المواد المراد تخزينها"
            name="materialType"
            type="text"
        />
        <TextField
            label="المدة المتوقعة للاستئجار"
            name="expectedRentalDuration"
            type="text"
        />
        <TextField
            label="المساحة المراد استئجارها"
            name="requiredStorageSpace"
            type="text"
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
    </>;