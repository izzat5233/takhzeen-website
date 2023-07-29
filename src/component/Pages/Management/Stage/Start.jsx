import icon from "../../../../assets/icons/normal/management.png";
import TextField from "../../../Util/Form/Field";
import {ContinueButton} from "../../../Util/Button/FormButton";
import SimpleForm from "../../../Util/Form/Form";
import {FormStartTemplate} from "../../../Util/Page/Template";

export default function Start({onSubmit}) {
    return (
        <FormStartTemplate
            icon={icon}
            title="ادارة المخازن"
            text="نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلاسة عملياتك التخزينية…"
            form={
                <SimpleForm
                    name="managementStartForm"
                    title="عرفنا عن نفسك"
                    onSubmit={() => {
                    }}
                >
                    <TextField name="companyName" label="اسم الشركة" type="text" required/>
                    <TextField name="phoneNumber" label="رقم الهاتف" type="tel" required/>
                    <TextField name="email" label="البريد الاكتروني" type="email"/>
                    <TextField name="mobileNumber" label="رقم الجوال" type="tel"/>
                    <ContinueButton
                        label="ابدأ"
                        onClick={onSubmit}
                    />
                </SimpleForm>
            }
        />
    );
}