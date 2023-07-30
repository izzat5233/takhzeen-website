import {Form, Formik} from "formik";
import {Persist} from "formik-persist";
import {useSequenceStages} from "../Hook/Stages";
import {FormStageContext} from "../Hook/FormStage";
import {useEffect} from "react";

/**
 * SimpleForm component renders a single Formik form with no styles.
 *
 * @param {object} props - The properties that define the component.
 * @param {Array} props.children - The children of the component.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export function SimpleForm({name, children, onSubmit}) {
    return (
        <Formik
            initialValues={{}}
            onSubmit={onSubmit}
        >
            <Form>
                {children}
                <Persist name={name}/>
            </Form>
        </Formik>
    );
}

/**
 * MultiStageForm component renders a Formik form with multiple stages.
 * Moving between stages will submit the form to the server.
 * But onSubmit is called only at the final submit (after last stage).
 *
 * @param {object} props - The properties that define the MultiStageForm component.
 * @param {Array} props.stages - The stages of the form. Wrapped in any way.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 */
export default function MultiStageForm({name, stages, onSubmit}) {
    const {stage, nextStage, prevStage, renderCurrentStage} = useSequenceStages(stages, 0);

    const handleSubmit = async (values, {setSubmitting}) => {
        if (stage === 1) {
            // after first stage, create the form...
            setSubmitting(false);
        } else if (stage === stages.length) {
            // after last stage, clear the form...
            setSubmitting(false);
        } else {
            // update the form...
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (stage === stages.length && onSubmit) {
            onSubmit();
        }
    }, [stage]);

    return (
        <FormStageContext.Provider value={{stage, nextStage, prevStage}}>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                <Form>
                    {renderCurrentStage()}
                    <Persist name={name}/>
                </Form>
            </Formik>
        </FormStageContext.Provider>
    );
}