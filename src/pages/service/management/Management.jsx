import React, {useState} from 'react';
import {AnimatePresence} from "framer-motion";
import {SimpleWaveBackground} from "../../../components/background/Background";
import {MultiStageFormHandler} from "../../../utils/form/FormHandler";
import useIsWideScreen from "../../../utils/hook/Screen";
import DefaultLoader from "../../../components/form/Loader";
import StartFields, {startFieldsInitialValues} from "./fields/StartFields";
import ManagementFields, {managementFieldsInitialValues} from "./fields/ManagementFields";
import FormFinishedPage from "../../../components/page/FormFinish";

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
                            <StartFields/>,
                            <ManagementFields/>
                        ]}
                        initialValues={{
                            ...startFieldsInitialValues,
                            ...managementFieldsInitialValues
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
