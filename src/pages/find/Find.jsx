import React from 'react'
import useStages from "../../utils/hook/Stages";
import Search from "../search/Search";
import ServiceChoice from "./stage/ServiceChoice";
import BasicForm from "./stage/BasicForm";
import PartialForm from "./stage/PartialForm";
import {ExpandedInOutBackground, ImageBackground} from "../../components/page/Background";
import storage from "../../assets/images/storage2.png";
import {useNavigate} from "react-router-dom";
import {FormFinishedTemplate} from "../../components/page/Template";

const background1 = <ExpandedInOutBackground/>;
const background2 = <ImageBackground image={storage}/>;

export default function Find() {
    const navigate = useNavigate();

    const {stage, goToStage, renderCurrentStage} = useStages({
        "choice":
            <ServiceChoice
                onChoice={(choice) => goToStage(choice)}
                choices={["temporal", "partial", "mediation"]}
            />,
        "temporal": <BasicForm name="temporalForm" onSubmit={() => navigate("/search")}/>,
        "partial": <PartialForm onSubmit={() => goToStage("finished")}/>,
        "mediation": <BasicForm name="mediationForm" onSubmit={() => navigate("/search")}/>,
        "search": <Search/>,
        "finished":
            <FormFinishedTemplate
                messages={[
                    "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                    "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                ]}
            />,
    }, "choice");

    return (
        <section className="page">
            {stage === "choice" || stage === "finished" ? background1 : background2}
            {renderCurrentStage()}
        </section>
    );
}
