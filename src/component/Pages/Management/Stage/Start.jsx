import icon from "../../../../assets/icons/normal/management.png";
import Form from "../../../Util/Form/Form";
import Field from "../../../Util/Form/Field";
import {ContinueButton} from "../../../Util/Button/FormButton";

export default function Start({onSubmit}) {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-10">
                <div className="mx-auto flex flex-row gap-10 mb-5 md:mb-10">
                    <img
                        src={icon}
                        alt="Management Logo"
                        className="w-24 md:w-40"
                    />
                    <h1 className="
                            font-bold text-3xl md:text-6xl bg-gradient-primary bg-clip-text my-auto
                        ">ادارة المخازن
                    </h1>
                </div>
                <p className="mx-auto mb-20 mr-20 ml-20 text-2xl">
                نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلاسة عملياتك التخزينية…
                              </p>
            </div>
            <div className="mx-auto">
                <Form
                    title="عرفنا عن نفسك"
                    onSubmit={() => {
                    }}
                >
                    <Field label="اسم الشركة" type="text"  required />
                    <Field label="رقم الهاتف" type="tel" required />
                    <Field label="البريد الاكتروني" type="email"/>
                    <Field label="رقم الجوال" type="tel"/>
                    <ContinueButton
                        label="ابدأ"
                        onClick={() => onSubmit()}
                    />
                </Form>
            </div>
        </div>
    );
}