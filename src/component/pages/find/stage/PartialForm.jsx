import React from "react";
import MultiStageForm from "../../../utils/form/Form";
import SimpleFormTemplate from "../../../utils/form/Template";
import {BackButton, ContinueButton} from "../../../utils/button/FormButton";
import TextField from "../../../utils/form/Field";
import {BasicFormTemplate} from "./BasicForm";

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
                <BasicFormTemplate/>,
                <Fill/>
            ]}
        />
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
        </SimpleFormTemplate>
    );
}