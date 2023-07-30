import icon from "../../../../assets/icons/normal/management.png";
import TextField from "../../../Util/Form/Field";
import {ContinueButton} from "../../../Util/Button/FormButton";
import SimpleFormTemplate from "../../../Util/Form/Template";
import {FormStartTemplate} from "../../../Util/Page/Template";

export default function Start() {
    return (
        <FormStartTemplate
            icon={icon}
            title="ادارة المخازن"
            text="نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلاسة عملياتك التخزينية…"
            form={
                <SimpleFormTemplate title="عرفنا عن نفسك">
                    <TextField name="companyName" label="اسم الشركة" type="text" required/>
                    <TextField name="phoneNumber" label="رقم الهاتف" type="tel" required/>
                    <TextField name="email" label="البريد الاكتروني" type="email"/>
                    <TextField name="mobileNumber" label="رقم الجوال" type="tel"/>
                    <ContinueButton label="ابدأ"/>
                </SimpleFormTemplate>
            }
        />
    );
}