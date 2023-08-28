import {Form, Formik} from "formik";
import {finishForm, createForm, startForm, updateForm} from "../../utils/api/FormApi";
import React, {useState} from "react";
import {useSequenceStages} from "../../utils/hook/Stages";
import {FormStageContext} from "../../utils/hook/Form";
import {SyncLoader} from "react-spinners";

/**
 * SimpleForm component renders a single Formik form with no styles.
 *
 * @param {object} props - The properties that define the component.
 * @param {string} props.name - The name of the form.
 * @param {Array} props.children - The children of the component.
 * @param {object} props.initialValues - The initial values of the fields.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export function SimpleForm({name, children, initialValues, onSubmit, loaderColor = "white"}) {
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
                <Form>
                    {isSubmitting
                        ? <div className="flex justify-center mt-5"><SyncLoader color={loaderColor} size={14}/></div>
                        : <>{children}</>}
                </Form>
            )}
        </Formik>
    );
}

/**
 * MultiStageForm component renders a Formik form with multiple stages.
 * Moving between stages will submit the form to the server.
 * But onSubmit is called only at the final submit (after last stage).
 *
 * @param {object} props - The properties that define the MultiStageForm component.
 * @param {string} props.name - The name of the form.
 * @param {Array} props.stages - The stages of the form. Wrapped in any way.
 * @param {object} props.initialValues - The initial values of the fields.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export default function MultiStageForm({name, stages, initialValues, onSubmit, loaderColor = "white"}) {
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
                    <Form>
                        {isSubmitting
                            ? <div className="flex justify-center"><SyncLoader color={loaderColor} size={14}/></div>
                            : renderCurrentStage()
                        }
                    </Form>
                )}
            </Formik>
        </FormStageContext.Provider>
    );
}