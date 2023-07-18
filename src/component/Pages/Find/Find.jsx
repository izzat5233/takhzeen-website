import React, {useState} from 'react'
import {ExpandedInOutBackground} from "../../Util/Animation/Background";
import {BackButton} from "../../Util/Button/FormButton";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import PartialForm from "./Form/PartialForm";
import partial from "../../../assets/icons/black/partial.png";
import temporary from "../../../assets/icons/black/temporary.png";
import TemporalForm from "./Form/TemporalForm";

export default function Find() {
    const [stage, setStage] = useState("choice");
    const navigate = useNavigate();

    return (
        <div dir="rtl"
             className="
            min-h-screen relative flex flex-col justify-center
            lg:py-20 lg:px-32 p-0
        ">
            <ExpandedInOutBackground className="bg-gradient-primary"/>
            <div className="w-fit mx-auto">
                <AnimatePresence>
                    {stage === "finished" &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="text-center text-3xl font-bold flex flex-col gap-5 justify-center"
                        >
                            <p>تم إرسال المعلومات بنجاح</p>
                            <p>سيقوم أحد موظفينا بالاتصال بك خلال فترة قصيرة</p>
                            <BackButton
                                label="العودة"
                                onClick={() => navigate("/")}
                            />
                        </motion.div>}
                    {stage === "partial" &&
                        <PartialForm
                            onFinish={() => setStage("finished")}
                            onReturn={() => setStage("choice")}
                        />}
                    {stage === "temporary" &&
                        <TemporalForm
                            onFinish={() => setStage("finished")}
                            onReturn={() => setStage("choice")}
                        />}
                    {stage === "choice" &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="flex flex-col lg:flex-row gap-2 justify-center mx-auto">
                            <Choice
                                label="أرغب بالتخزين الجزئي"
                                icon={partial}
                                onClick={() => setStage("partial")}
                            />
                            <Choice
                                label="أرغب بالتخزين المؤقت"
                                icon={temporary}
                                onClick={() => setStage("temporary")}
                            />
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
}

function Choice({label, icon, onClick}) {
    return (
        <div className="
            w-96 h-96 bg-back
            flex flex-col justify-center
            duration-300 transition-all
            border-8 border-gray-100 drop-shadow-2xl
            hover:rounded-3xl hover:z-10 hover:scale-90
        ">
            <button
                onClick={onClick}
                className="
                    flex flex-col justify-around
                    gap-5 p-10
                "
            >
                <img src={icon} alt={label} className="w-40 h-40 mx-auto"/>
                <p className="text-3xl">{label}</p>
            </button>
        </div>
    );
}