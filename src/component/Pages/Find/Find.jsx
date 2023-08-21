import React, {useEffect, useState} from 'react'
import useStages from "../../Util/Hook/Stages";
import Search from "../Search/Search";
import ServiceChoice from "./Stage/ServiceChoice";
import BasicForm from "./Stage/BasicForm";
import PartialForm from "./Stage/PartialForm";
import Page from "../../Util/Page/Page";
import {ExpandedInOutBackground, ImageBackground} from "../../Util/Page/Background";
import storage from "../../../assets/images/img15.png";
import {useNavigate} from "react-router-dom";
import {FormFinishedTemplate} from "../../Util/Page/Template";

const background1 = <ExpandedInOutBackground/>;
const background2 = <ImageBackground image={storage}/>;

export default function Find() {
    const navigate = useNavigate();
    const [background, setBackground] = useState(background1);

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

    useEffect(() => {
        setBackground(stage === "choice" || stage === "finished" ? background1 : background2);
    }, [stage]);

    return (
        <Page background={background}>
            {renderCurrentStage()}
        </Page>
    );
}
