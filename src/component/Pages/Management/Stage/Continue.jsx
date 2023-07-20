import Field from "../../../Util/Form/Field";
import {BackButton, ContinueButton} from "../../../Util/Button/FormButton";
import SimpleForm from "../../../Util/Form/Form";

export default function Continue({onSubmit, onBack}) {
    return (
        <div className="mx-auto max-w-3xl w-full">
            <SimpleForm
                title="زودنا بمعلوماتك لنحدد حاجتك
                "
                onSubmit={() => {
                }}
            >
                <div className="grid grid-rows-5 gap-5">
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="ما هي مساحة مخزنك ؟" type="number"/>
                        <Field label="ما درجة تشطيب مخزنك ؟" type="text"/>
                    </div>
                  
                    <div className="grid grid-cols-2 gap-4">
                    <Field label="ما طبيعة البضاعة التي تقوم بتخزينها ؟" type=""/>
                        <Field label="هل تمتلك تأمين دائم على بضاعتك ؟" type=""/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="ما مدى تكرار تجديد المخزون لديك ؟" type=""/>
                        <Field label="ما طبيعة الخدمات التي ترغب أن نوفرها لك ؟" type=""/>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="(اختياري) كيف توصلت لشركة تخزين ؟" type=""/>
                    </div>
                </div>
                <div className="flex gap-6 justify-center">
                    <BackButton
                        label="ارجع"
                        onClick={() => onBack()}
                    />
                    <ContinueButton
                        label="تابع"
                        onClick={() => onSubmit()}
                    />
                </div>
            </SimpleForm>
        </div>
    );
}