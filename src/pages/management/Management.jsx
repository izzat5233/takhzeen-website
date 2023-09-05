import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import {SimpleWaveBackground} from "../../components/background/Background";
import {MultiStageFormHandler} from "../../utils/form/FormHandler";
import useIsWideScreen from "../../utils/hook/Screen";
import DefaultLoader from "../../components/form/Loader";
import StartForm, {startFormInitialValues} from "./form/StartForm";
import DetailsForm, {detailsFormInitialValues} from "./form/DetailsForm";
import FormFinishedPage from "../../components/page/FormFinish";

export default function Management() {
    const [finished, setFinished] = useState(false);
    const isWideScreen = useIsWideScreen();

    return (
        <section className="page">
            {isWideScreen && <SimpleWaveBackground/>}
            <AnimatePresence>
                {!finished ?
                    <MultiStageFormHandler
                        name="managementForm"
                        stages={[
                            <StartForm/>,
                            <DetailsForm/>
                        ]}
                        initialValues={{
                            ...startFormInitialValues,
                            ...detailsFormInitialValues
                        }}
                        onSubmit={() => setFinished(true)}
                        loader={<DefaultLoader color="#ff684c"/>}
                    /> :
                    <FormFinishedPage
                        messages={[
                            "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                            "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                        ]}
                    />}
            </AnimatePresence>
        </section>
    );
}
