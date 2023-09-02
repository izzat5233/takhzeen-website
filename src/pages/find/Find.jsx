import React from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import StartFormStage from "./stage/StartFormStage";
import PartialFormStage from "./stage/PartialFormStage";
import InitialChoiceStage from "./stage/InitialChoiceStage";
import FormFinishedStage from "./stage/FormFinishedStage";
import NotFound from "../misc/NotFound";

export default function Find() {
    const navigate = useNavigate();

    const search = () => {
        navigate("/search");
    }

    const finish = () => {
        navigate("./finished");
    }

    return (
        <section className="page">
            <Routes>
                <Route path="/" element={<InitialChoiceStage navigate={navigate}/>}/>
                <Route path="temporal" element={<StartFormStage name="temporalForm" onSubmit={search}/>}/>
                <Route path="partial" element={<PartialFormStage onSubmit={finish}/>}/>
                <Route path="mediation" element={<StartFormStage name="mediationForm" onSubmit={search}/>}/>
                <Route path="finished" element={<FormFinishedStage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    );
}
