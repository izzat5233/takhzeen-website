import icon from "../../../assets/management_system.png";
import Form from "../Form/Form";
import Field from "../Form/Field";
import Button from "../../Util/Button";
import {BsArrowLeftShort} from "react-icons/bs";

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
                            font-bold text-4xl md:text-6xl bg-gradient-primary bg-clip-text my-auto
                        ">ادارة المخازن
                    </h1>
                </div>
                <p className="mx-auto mb-20 text-2xl">
                    يمكننا الآن مساعدتك في الاشراف على مخازنك
                </p>
            </div>
            <div className="mx-auto">
                <Form
                    title="عرفنا عن نفسك"
                    onSubmit={() => {
                    }}
                >
                    <Field label="الاسم" type="text"/>
                    <Field label="رقم الهاتف" type="tel"/>
                    <Field label="البريد الاكتروني" type="email"/>
                    <Field label="اسم الشركة" type="text"/>
                    <Field label="عنوان الموقع الاكتروني" type="url"/>
                    <Button
                        label="ابدأ"
                        icon={<BsArrowLeftShort/>}
                        onClick={() => onSubmit()}
                    />
                </Form>
            </div>
        </div>
    );
}