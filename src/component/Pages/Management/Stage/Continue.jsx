import TextField, {CheckboxField, RadioField} from "../../../Util/Form/Field";
import {BackButton, ContinueButton} from "../../../Util/Button/FormButton";
import SimpleForm from "../../../Util/Form/Form";

export default function Continue({onSubmit, onBack}) {
    return (
        <div className="mx-auto max-w-3xl w-full">
            <SimpleForm
                title="زودنا بمعلوماتك لنحدد حاجتك"
                onSubmit={() => {
                }}
            >
                <div className="grid grid-rows-5 gap-5">
                    <div className="grid grid-cols-2 gap-4">
                        <TextField name="storageSize" label="ما هي مساحة مخزنك ؟" type="number"/>
                        <TextField name="storageFinish" label="ما درجة تشطيب مخزنك ؟" type="text"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <TextField name="goodsNature" label="ما طبيعة البضاعة التي تقوم بتخزينها ؟" type="text"/>
                        <RadioField
                            name="insurance"
                            label="هل تمتلك تأمين دائم على بضاعتك ؟"
                            required={true}
                            options={[
                                {value: 'yes', label: 'نعم'},
                                {value: 'no', label: 'لا'},
                            ]}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <TextField name="stockRenewalFrequency" label="ما مدى تكرار تجديد المخزون لديك ؟" type="text"/>
                        <TextField name="desiredServices" label="ما طبيعة الخدمات التي ترغب أن نوفرها لك ؟"
                                   type="text"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <TextField name="howDidYouFindUs" label="(اختياري) كيف توصلت لشركة تخزين ؟" type="text"/>
                    </div>
                </div>
                <div className="flex gap-6 justify-center">
                    <BackButton
                        label="ارجع"
                        onClick={onBack}
                    />
                    <ContinueButton
                        label="تابع"
                        onClick={onSubmit}
                    />
                </div>
            </SimpleForm>
        </div>
    );
}