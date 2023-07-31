import React, {useState} from "react";
import {motion} from "framer-motion";
import {BsArrowRight} from "react-icons/bs";
import {BackButton, ContinueButton, FinishButton} from "../Button/FormButton";
import {Formik, Form} from 'formik';

/**
 * SimpleFormTemplate component renders a form shape with a title and children components.
 *
 * @param {object} props - The properties that define the SimpleFormTemplate component.
 * @param {string} props.title - The title of the form.
 * @param {React.ReactNode} props.children - The child components of the form.
 * @param {string} props.className - The CSS classes for the form.
 */
export default function SimpleFormTemplate({title, children, className}) {
    return (
        <div className={`
            p-10 flex flex-col gap-4
            bg-white drop-shadow-2xl rounded-md
            transition-all duration-150
            ${className}
        `}>
            {title && <h2 className="text-center text-4xl mb-8">{title}</h2>}
            {children}
        </div>
    );
}

/**
 * ExplanatoryForm component renders a form with a title, image, header, text, and progress bar.
 *
 * @param {object} props - The properties that define the ExplanatoryForm component.
 * @param {string} props.title - The title of the form.
 * @param {string} props.image - The URL of the image to display.
 * @param {string} props.header - The header of the form.
 * @param {string} props.text - The text of the form.
 * @param {React.ReactNode} props.form - The form component to render.
 * @param {number} props.progress - The progress of the form.
 * @param {function} props.onReturn - The function to call when the return button is clicked.
 */
export function ExplanatoryForm({title, image, header, text, form, progress = 0, onReturn}) {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
            className="
                flex flex-col overflow-hidden relative
                bg-back lg:rounded-3xl lg:drop-shadow-2xl
            ">
            <div>
                <div className="flex justify-center gap-5 py-8 lg:py-2 px-2 text-center">
                    {onReturn &&
                        <button
                            onClick={onReturn}
                            className="
                            flex gap-2 text-primary transition-transform hover:translate-x-1
                            border-2 border-primary p-1 rounded-full
                            lg:static absolute top-5 right-16 z-50
                        ">
                            <BsArrowRight className="my-auto text-2xl"/>
                        </button>}
                    {title && <h2 className="lg:flex-grow my-auto">{title}</h2>}
                </div>
                {(title || onReturn) && <hr className="w-full"/>}
            </div>
            <div className="p-8 lg:p-20 lg:pt-10 flex flex-col lg:flex-row gap-20 my-auto">
                <div className="flex flex-col gap-12 max-w-screen-md">
                    {image &&
                        <img
                            src={image}
                            alt="Storage Image"
                            className="mx-auto h-96 rounded-xl"
                        />}
                    {header && <h1 className="text-5xl md:text-6xl font-bold">{header}</h1>}
                    {text && <p className="text-2xl">{text}</p>}
                </div>
                {form && <div className="rounded-3xl bg-gray-100 p-8 h-fit">{form}</div>}
            </div>
            <motion.div
                className="fixed bottom-0 lg:static w-full h-1 origin-right bg-gradient-orange-blue z-10"
                animate={{scaleX: progress}}
            />
        </motion.div>
    );
}

/**
 * DynamicExplanatoryForm component renders a form with a title, image, header, text, and fields that can be dynamically changed.
 *
 * @param {object} props - The properties that define the DynamicExplanatoryForm component.
 * @param {string} props.title - The title of the form.
 * @param {string} props.image - The URL of the image to display.
 * @param {string} props.header - The header of the form.
 * @param {string} props.text - The text of the form.
 * @param {Array} props.fields - The fields of the form.
 * @param {object} props.initialValues - The initial values of the form fields.
 * @param {function} props.onFinish - The function to call when the form is finished.
 * @param {function} props.onReturn - The function to call when the return button is clicked.
 */
export function DynamicExplanatoryForm({title, image, header, text, fields, initialValues, onFinish, onReturn}) {
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
        <ExplanatoryForm
            title={title}
            image={image}
            header={header}
            text={text}
            progress={progress}
            onReturn={onReturn}
            form={
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => {
                    }}>
                    <Form>
                        {fields[formNumber]}
                        <div className="flex flex-row-reverse gap-4 justify-center">
                            {formNumber === fields.length - 1 &&
                                <FinishButton
                                    label="تابع"
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
                    </Form>
                </Formik>}
        />
    );
}