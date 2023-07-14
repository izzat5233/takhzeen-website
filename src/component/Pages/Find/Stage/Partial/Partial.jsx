import Form from "../../../../Util/Form/Form";
import Field from "../../../../Util/Form/Field";
import partial from "../../../../../assets/icons/black/partial.png";
import {ContinueButton} from "../../../../Util/Button/FormButton";
import {motion} from "framer-motion";

export default function Partial() {
    return (
        <div dir="rtl" className="
            min-h-screen pt-24 relative
            flex justify-center
            bg-transparent
        ">
            <motion.div
                className="absolute -z-10 origin-right h-full w-full right-0 top-0 bg-gradient-primary"
                initial={{scaleX: 0}}
                animate={{scaleX: 1}}
                exit={{scaleX: 0}}
                transition={{duration: 0.6}}
            ></motion.div>
            <div className="
                flex flex-col lg:flex-row justify-around
                mt-20 w-full px-10
            ">
                <div className="flex flex-col gap-20 mb-20">
                    <div className="flex justify-around gap-10 flex-wrap">
                        <img src={partial} alt="Partial Storage" className="w-44 h-44"/>
                        <h1 className="my-auto text-5xl md:text-6xl font-bold">التخزين الجزئي</h1>
                    </div>
                    <p className="text-3xl">أصبح بإمكانك الآن تخزين كميات صغيرة بكفائة المخازن الكبيرة.</p>
                </div>
                <Form
                    className="h-fit"
                    onSubmit={() => {
                    }}
                >
                    {fields1}
                    <ContinueButton
                        label="تابع"
                        onClick={() => {
                        }}
                    />
                </Form>
            </div>
        </div>
    );
}

const fields1 =
    <>
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
    </>

const fields2 =
    <>
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
    </>