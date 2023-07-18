import {motion} from "framer-motion";
import React, {useState} from "react";
import {BackButton, ContinueButton, FinishButton} from "../../../Util/Button/FormButton";

export default function Template({title, image, header, text, form, progress}) {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
            className="
                flex flex-col overflow-hidden
                bg-back lg:rounded-3xl lg:drop-shadow-2xl
            ">
            <div>
                <div className="flex justify-start py-8 lg:py-4 text-center">
                    <p className="text-primary"></p>
                    <h2 className="flex-grow">{title}</h2>
                </div>
                <hr className="w-full"/>
            </div>
            <div className="p-8 lg:p-20 lg:pt-10 flex flex-col lg:flex-row gap-20 my-auto">
                <div className="flex flex-col gap-12 max-w-screen-md">
                    <img
                        src={image}
                        alt="Storage Image"
                        className="mx-auto h-96 border-4 border-gray-200 rounded-xl"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold">{header}</h1>
                    <p className="text-2xl">{text}</p>
                </div>
                <div className="rounded-3xl bg-gray-100 p-8 h-fit">
                    {form}
                </div>
            </div>
            <motion.div
                className="fixed bottom-0 lg:static w-full h-1 origin-right bg-gradient-orange-blue z-10"
                animate={{scaleX: progress}}
            />
        </motion.div>
    );
}

export function StaticForm({title, image, header, text, fields, onFinish, onReturn}) {
    const [formNumber, setFormNumber] = useState(0);
    const [progress, setProgress] = useState(0);

    const next = () => {
        setFormNumber(formNumber + 1);
        incrementProgress();
    }

    const back = () => {
        setFormNumber(formNumber - 1);
        decrementProgress();
    }

    const incrementProgress = () => {
        setProgress(progress + 1.0 / fields.length);
    }

    const decrementProgress = () => {
        setProgress(progress - 1.0 / fields.length);
    }

    return (
        <Template
            title={title}
            image={image}
            header={header}
            text={text}
            progress={progress}
            form={<>
                {fields[formNumber]}
                <div className="flex flex-row-reverse gap-4 justify-center">
                    {formNumber === fields.length - 1 &&
                        <FinishButton
                            label="انهي"
                            onClick={() => {
                                incrementProgress();
                                onFinish();
                            }}
                        />}
                    {formNumber < fields.length - 1 &&
                        <ContinueButton
                            label="تابع"
                            onClick={next}
                        />}
                    {formNumber > 0 &&
                        <BackButton
                            label="ارجع"
                            onClick={back}
                        />}
                </div>
            </>}
        />
    );
}