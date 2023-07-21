import React, {useState} from 'react';
import Start from "./Stage/Start";
import Fill from "./Stage/Fill";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import Page from "../../Util/Page/Page";
import {BackButton} from "../../Util/Button/FormButton";

export default function Management() {
    const [stage, setStage] = useState("start");
    const navigate = useNavigate();

    return (
        <Page background={<TriangleShape/>}>
            {stage === "finished" &&
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
                </motion.div>}
            {stage === "fill" &&
                <Fill
                    onSubmit={() => setStage("finished")}
                    onBack={() => setStage("start")}
                />}
            {stage === "start" && <Start onSubmit={() => setStage("fill")}/>}
        </Page>
    );
}

function TriangleShape() {
    return (
        <motion.div
            initial={{translateY: 500}}
            animate={{translateY: 0}}
            transition={{duration: 1, ease: "anticipate"}}
            className="absolute bottom-0 left-0 w-full h-full -z-10"
        >
            <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none" className="relative block w-full h-40 lg:h-80 transform scale-x-[-1]">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="fill-primary"></path>
                </svg>
            </div>
        </motion.div>
    );
}
