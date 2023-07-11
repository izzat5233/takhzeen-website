import Form from "../../../Util/Form/Form";
import Field from "../../../Util/Form/Field";

export default function PartialForm() {
    return (
        <div dir="rtl" className="
            min-h-screen pt-24
            flex justify-center
            bg-gray-100
        ">
            <Form
                className="h-fit"
                title="المعلومات الأساسية"
                onSubmit={() => {
                }}
            >
                <Field
                    label="الاسم"
                    type="text"
                />
                <Field
                    label="رقم الهاتف"
                    type="tel"
                />
                <Field
                    label="مكان السكن"
                    type="text"
                />
                <hr className="my-8"/>
                <Field
                    label="نوع المواد المراد تخزينها"
                    type="text"
                />
                <Field
                    label="المدة المتوقعة للاستئجار"
                    type="number"
                />
                <Field
                    label="المساحة المراد استئجارها"
                    type="number"
                />
                <Field
                    label="المواقع المرغوبة للمخزن"
                    type="text"
                />
            </Form>
        </div>
    );
}