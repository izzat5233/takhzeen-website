import React from 'react'
import {BackHomeButton, ContinueButton} from "../../Util/Button/FormButton";
import {AnimatePresence, motion} from "framer-motion";
import partial from "../../../assets/icons/black/partial.png";
import temporary from "../../../assets/icons/black/temporary.png";
import mediation from "../../../assets/icons/black/mediation.png";
import storage from "../../../assets/images/img15.png";
import {IconBigButton} from "../../Util/Button/BigButton";
import Page from "../../Util/Page/Page";
import useStages from "../../Util/Hook/Stages";
import {ExpandedInOutBackground, ImageBackground} from "../../Util/Page/Background";
import ComingSoon from "../Misc/ComingSoon/ComingSoon";
import {BigChoiceTemplate} from "../../Util/Page/Template";
import TextField from "../../Util/Form/Field";
import SimpleFormTemplate from "../../Util/Form/Template";
import Storage from "./Stage/Storage";
import {SimpleForm} from "../../Util/Form/Form";

export default function Find() {
    const choiceStage =
        <Page className="lg:w-fit py-0" background={<ExpandedInOutBackground/>}>
            <BigChoiceTemplate text="ما الخدمة التي ترغب بالاستفادة منها ؟">
                <IconBigButton
                    label="التخزين الوجيز"
                    icon={temporary}
                    onClick={() => goToStage("temporal")}
                />
                <IconBigButton
                    label="التخزين الجزئي"
                    hint="قيد التطوير"
                    icon={partial}
                    onClick={() => goToStage("comingsoon")}
                />
                <IconBigButton
                    label="التخزين لفترة طويلة"
                    hint="قيد التطوير"
                    icon={mediation}
                    onClick={() => goToStage("comingsoon")}
                />
            </BigChoiceTemplate>
        </Page>;

    const {goToStage, renderCurrentStage} = useStages({
        "choice": choiceStage,
        "temporal": <TemporalStage onSubmit={() => goToStage("search")}/>,
        "search": <Storage/>,
        "finished": <FinishedStage/>,
        "comingsoon": <ComingSoon/>
    }, "choice");

    return (
        <AnimatePresence>
            <SimpleForm
                name="findForm"
                initialValues={initialValues}
                onSubmit={() => {
                }}
            >
                {renderCurrentStage()}
            </SimpleForm>
        </AnimatePresence>
    );
}

const initialValues = {
    userName: '',
    phoneNumber: '',
    residenceLocation: '',
};

function TemporalStage({onSubmit}) {
    return (
        <Page className="lg:w-fit py-0" background={<ImageBackground image={storage}/>}>
            <SimpleFormTemplate className="bg-opacity-95 mx-4">
                <TextField
                    label="الاسم"
                    name="userName"
                    type="text"
                />
                <TextField
                    label="رقم الهاتف"
                    name="phoneNumber"
                    type="tel"
                />
                <TextField
                    label="مكان السكن"
                    name="residenceLocation"
                    type="text"
                />
                <ContinueButton
                    label="ابدأ"
                    onClick={onSubmit}
                />
            </SimpleFormTemplate>
        </Page>
    );
}

function FinishedStage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="text-center text-3xl font-bold flex flex-col gap-5 justify-center"
        >
            <p>تم إرسال المعلومات بنجاح</p>
            <p>سيقوم أحد موظفينا بالاتصال بك خلال فترة قصيرة</p>
            <BackHomeButton label="العودة"/>
        </motion.div>
    );
}