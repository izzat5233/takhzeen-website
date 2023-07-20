import React, {useState} from 'react'
import {BackButton} from "../../Util/Button/FormButton";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import PartialForm from "./Form/PartialForm";
import partial from "../../../assets/icons/black/partial.png";
import temporary from "../../../assets/icons/black/temporary.png";
import TemporalForm from "./Form/TemporalForm";
import {ChoiceWrapper, IconChoice} from "../../Util/Form/Choice";

import {FormPage} from "../../Util/Page/Page";

export default function Find() {
    const [stage, setStage] = useState("choice");
    const navigate = useNavigate();

    return (
        <FormPage>
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
                    <ChoiceWrapper text="ما الخدمة التي ترغب بالاستفادة منها ؟">
                        <IconChoice
                            label="التخزين الجزئي"
                            icon={partial}
                            onClick={() => setStage("partial")}
                        />
                        <IconChoice
                            label="التخزين الوجيز"
                            icon={temporary}
                            onClick={() => setStage("temporary")}
                        />
                    </ChoiceWrapper>}
            </AnimatePresence>
        </FormPage>
    );
}
