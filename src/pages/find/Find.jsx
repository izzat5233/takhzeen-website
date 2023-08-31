import React from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import BasicFormStage from "./stage/BasicFormStage";
import PartialFormStage from "./stage/PartialFormStage";
import InitialChoiceStage from "./stage/InitialChoiceStage";
import NotFound from "../misc/NotFound";
import {FormFinishedPage} from "../../components/page/Page";
import {ExpandedInOutBackground} from "../../components/background/Background";

export default function Find() {
    const navigate = useNavigate();

    return (
        <section className="page">
            <Routes>
                <Route path="/" element={<InitialChoiceStage navigate={navigate}/>}/>
                <Route path="temporal" element={
                    <BasicFormStage name="temporalForm" onSubmit={() => navigate("/search")}/>
                }/>
                <Route path="partial" element={
                    <PartialFormStage onSubmit={() => navigate("./finished")}/>
                }/>
                <Route path="mediation" element={
                    <BasicFormStage name="mediationForm" onSubmit={() => navigate("/search")}/>
                }/>
                <Route path="finished" element={<FormFinishedStage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    );
}

function FormFinishedStage() {
    return (
        <>
            <FormFinishedPage
                messages={[
                    "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                    "في حال واجهتك اية استفسارات يرجى التواصل معنا."
                ]}
            />
            <ExpandedInOutBackground/>
        </>
    );
}