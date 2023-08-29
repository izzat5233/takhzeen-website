import {Form, Formik} from "formik";
import {finishForm, createForm, startForm, updateForm} from "../api/FormApi";
import React, {useState} from "react";
import {useSequenceStages} from "../hook/Stages";
import {FormStageContext} from "./FormContext";

/**
 * A simple single-stage form handler.
 *
 * @param {object} props - The properties that define the component.
 * @param {string} props.name - The name of the form.
 * @param {JSX.Element} props.loader - The react component rendered during the loading stage.
 * @param {object} props.initialValues - The initial values of the fields.
 * @param {Array} props.children - The children of the component.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export default function FormHandler({name, initialValues, onSubmit, loader, children, ...rest}) {
    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            await createForm(name, values);
            await resetForm();
            await onSubmit();
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form {...rest}>
                    {isSubmitting ? (loader && loader) : <>{children}</>}
                </Form>
            )}
        </Formik>
    );
}

/**
 * MultiStageFormHandler handles a form with multiple stages.
 * Moving between stages will submit the form to the server.
 * But onSubmit is called only at the final submit (after last stage).
 *
 * @param {object} props - The properties that define the MultiStageFormHandler component.
 * @param {string} props.name - The name of the form.
 * @param {Array} props.stages - The stages of the form. Wrapped in any way.
 * @param {JSX.Element} props.loader - The react component rendered during loading stage.
 * @param {object} props.initialValues - The initial values of the fields.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export function MultiStageFormHandler({name, stages, initialValues, onSubmit, loader, ...rest}) {
    const {stage, nextStage, prevStage, renderCurrentStage} = useSequenceStages(stages, 0);
    const [hasStarted, setHasStarted] = useState(false);

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            if (stage === 1 && !hasStarted) {
                await startForm(name, values);
                setHasStarted(true);
            } else if (stage === stages.length) {
                await finishForm(name, values);
                await resetForm();
                await onSubmit();
            } else {
                await updateForm(name, values);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <FormStageContext.Provider value={{stage, nextStage, prevStage}}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form {...rest}>
                        {isSubmitting ? (loader && loader) : renderCurrentStage()}
                    </Form>
                )}
            </Formik>
        </FormStageContext.Provider>
    );
}