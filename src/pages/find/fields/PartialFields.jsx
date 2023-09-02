import TextField, {BackButton, ContinueButton} from "../../../components/field/Field";
import React from "react";

export default function PartialFields() {
    return (
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
        </>
    );
}

export const partialFieldsInitialValues = {
    materialType: '',
    expectedRentalDuration: '',
    requiredStorageSpace: '',
    desiredStorageLocation: '',
}