import React, {useState} from 'react';
import Start from "./Stage/Start";
import Fill from "./Stage/Fill";
import {AnimatePresence, motion} from "framer-motion";
import Page from "../../Util/Page/Page";
import {BackHomeButton} from "../../Util/Button/FormButton";
import {TriangleShapeBackground} from "../../Util/Page/Background";
import MultiStageForm from "../../Util/Form/Form";

export default function Management() {
    const [finished, setFinished] = useState(false);

    return (
        <Page background={<TriangleShapeBackground/>}>
            <AnimatePresence>
                {!finished ?
                    <MultiStageForm
                        name="managementForm"
                        stages={[
                            <Start/>,
                            <Fill/>
                        ]}
                        onSubmit={() => setFinished(true)}
                    /> :
                    <FinishedStage/>}
            </AnimatePresence>
        </Page>
    );
}

function FinishedStage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="text-start text-xl lg:text-2xl font-bold flex flex-col gap-5 p-4"
        >
            <p className="mx-auto">نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك
                إدارة مخزنية متميزة…</p>
            <p className="mx-auto"> في حال واجهتك اية استفسارات أو تخوفات اضافية يرجى التواصل معنا.</p>
            <BackHomeButton label="العودة"/>
        </motion.div>
    );
}

