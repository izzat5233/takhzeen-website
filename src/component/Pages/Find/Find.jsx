import React, {useState} from 'react'
import {BackButton} from "../../Util/Button/FormButton";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import PartialForm from "./Form/PartialForm";
import partial from "../../../assets/icons/black/partial.png";
import temporary from "../../../assets/icons/black/temporary.png";
import TemporalForm from "./Form/TemporalForm";
import {FormPage} from "../../Util/Form/Page";
import {ChoiceWrapper, IconChoice} from "../../Util/Form/Choice";

export default function Find() {
    const [stage, setStage] = useState("choice");
    const navigate = useNavigate();

    return (
        <FormPage className="w-fit mx-auto">
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
                    <ChoiceWrapper>
                        <IconChoice
                            label="أرغب بالتخزين الجزئي"
                            icon={partial}
                            onClick={() => setStage("partial")}
                        />
                        <IconChoice
                            label="أرغب بالتخزين المؤقت"
                            icon={temporary}
                            onClick={() => setStage("temporary")}
                        />
                    </ChoiceWrapper>}
            </AnimatePresence>
        </FormPage>
    );
}
