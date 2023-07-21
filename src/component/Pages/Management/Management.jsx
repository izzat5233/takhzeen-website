import React from 'react';
import Start from "./Stage/Start";
import Fill from "./Stage/Fill";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import Page from "../../Util/Page/Page";
import {BackButton} from "../../Util/Button/FormButton";
import useStages from "../../Util/Hook/Stages";
import {TriangleShapeBackground} from "../../Util/Page/Background";

export default function Management() {
    const [stage, goToStage, renderCurrentStage] = useStages({
        "start": <Start onSubmit={() => goToStage("fill")}/>,
        "fill":
            <Fill
                onSubmit={() => goToStage("finished")}
                onBack={() => goToStage("start")}
            />,
        "finished": <FinishedStage/>
    }, "start");

    return (
        <Page background={<TriangleShapeBackground/>}>
            {renderCurrentStage()}
        </Page>
    );
}

function FinishedStage() {
    const navigate = useNavigate();

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
            <BackButton
                label="العودة"
                onClick={() => navigate("/")}
            />
        </motion.div>
    );
}

