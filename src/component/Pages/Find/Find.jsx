import React, {useState} from 'react'
import {ExpandedInOutBackground} from "../../Util/Animation/Background";
import storage from "../../../assets/images/storage1.png";
import {BackButton, ContinueButton} from "../../Util/Button/FormButton";
import Field from "../../Util/Form/Field";
import {motion} from "framer-motion";

export default function Find() {
    const [isWideScreen] = useState(window.innerWidth > 1024); // lg
    const [formNumber, setFormNumber] = useState(0);

    return (
        <div dir="rtl"
             className="
            min-h-screen relative flex justify-center
            lg:py-20 lg:px-32 p-0
        ">
            {isWideScreen && <ExpandedInOutBackground className="bg-gradient-primary"/>}
            <motion.div
                initial={{opacity: 0, x: -10, y: 10}}
                animate={{opacity: 1, x: 0, y: 0}}
                exit={{opacity: 0, x: 10, y: -10}}
                transition={{ease: "easeIn"}}
                className="
                flex flex-col
                bg-back lg:rounded-3xl lg:drop-shadow-2xl
            ">
                <div>
                    <h2 className="py-8 lg:py-4 text-center">البحث عن مخزن</h2>
                    <hr className="w-full"/>
                </div>
                <div className="p-8 lg:p-20 flex flex-col lg:flex-row gap-20 my-auto">
                    <div className="flex flex-col gap-10">
                        <motion.img
                            src={storage}
                            alt="Storage Image"
                            className="w-[100] mx-auto"
                            animate={{
                                y: ["0%", "-10%", "0%"],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                        <h1 className="text-5xl md:text-6xl font-bold">دعنا نجد مخزنك المثالي</h1>
                        <p className="text-3xl">أصبح بإمكانك الآن تخزين كميات صغيرة بكفائة المخازن الكبيرة.</p>
                    </div>
                    <div className="rounded-3xl bg-gray-100 p-8 h-fit">
                        {fields[formNumber]}
                        <div className="flex flex-row-reverse gap-4 justify-center">
                            {formNumber < fields.length - 1 &&
                                <ContinueButton
                                    label="تابع"
                                    onClick={() => {
                                        setFormNumber(formNumber + 1)
                                    }}
                                />}
                            {formNumber > 0 &&
                                <BackButton
                                    label="ارجع"
                                    onClick={() => {
                                        setFormNumber(formNumber - 1)
                                    }}
                                />}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const fields = [
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
    </>,
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
]
