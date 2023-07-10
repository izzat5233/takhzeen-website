import Form from "../Form/Form";
import Field from "../Form/Field";
import {BackButton, ContinueButton} from "../../Util/Button";

export default function Continue({onSubmit, onBack}) {
    return (
        <div className="mx-auto">
            <Form
                title="نحتاج منك بعض المعلومات"
                onSubmit={() => {
                }}
            >
                <div className="grid grid-rows-5 gap-5">
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="ما هي مساحة مخزنك ؟" type="number"/>
                        <Field label="ما مدى تشطيب مخزنك ؟" type="text"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="هل تحتاج تمديدات كهرباء وماء ؟" type="email"/>
                        <Field label="هل يحتوي مخزنك على وسائل سلامة عامة ؟ (كاميرات, أداة اطفاء حريق...)" type="text"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="هل تمتلك تأمين دائم على بضاعتك ؟" type=""/>
                        <Field label="ما طبيعة البضاعة التي تقوم بتخزينها ؟" type=""/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="ما مدى تكرار تجديد المخزون لديك ؟" type=""/>
                        <Field label="كم المدة الزمنية بين كل عملية تفريغ للمخزن ؟" type=""/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="ما طبيعة الخدمات التي ترغب أن نوفرها لك ؟" type=""/>
                        <Field label="(اختياري) كيف توصلت للموقع الخاص بنا ؟" type=""/>
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
            </Form>
        </div>
    );
}