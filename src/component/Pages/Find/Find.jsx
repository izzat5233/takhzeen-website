import React from 'react'
import {BackButton} from "../../Util/Button/FormButton";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import PartialForm from "./Form/PartialForm";
import partial from "../../../assets/icons/black/partial.png";
import temporary from "../../../assets/icons/black/temporary.png";
import TemporalForm from "./Form/TemporalForm";
import {BigButtonsWrapper, IconBigButton} from "../../Util/Button/BigButton";
import {FormPage} from "../../Util/Page/Page";
import useStages from "../../Util/Hook/Stages";

export default function Find() {
    const [stage, goToStage, renderCurrentStage] = useStages({
        "choice":
            <BigButtonsWrapper text="ما الخدمة التي ترغب بالاستفادة منها ؟">
                <IconBigButton
                    label="التخزين الجزئي"
                    icon={partial}
                    onClick={() => goToStage("partial")}
                />
                <IconBigButton
                    label="التخزين الوجيز"
                    icon={temporary}
                    onClick={() => goToStage("temporary")}
                />
            </BigButtonsWrapper>,
        "partial":
            <PartialForm
                onFinish={() => goToStage("finished")}
                onReturn={() => goToStage("choice")}
            />,
        "temporary":
            <TemporalForm
                onFinish={() => goToStage("finished")}
                onReturn={() => goToStage("choice")}
            />,
        "finished":
            <FinishedStage/>
    }, "choice");

    return (
        <FormPage>
            <AnimatePresence>
                {renderCurrentStage()}
            </AnimatePresence>
        </FormPage>
    );
}

function FinishedStage() {
    const navigate = useNavigate();

    return (
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
        </motion.div>
    );
}