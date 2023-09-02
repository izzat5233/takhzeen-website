import {FormFinishedPage} from "../../../components/page/Page";
import {ExpandedInOutBackground, withBackground} from "../../../components/background/Background";
import React from "react";

function FormFinishedStage() {
    return (
        <FormFinishedPage
            messages={[
                "نشكرك على ثقتك بنا، سنتواصل معك بأقرب وقت خلال اليومين القادمين؛ لنحقق لك إدارة مخزنية متميزة…",
                "في حال واجهتك اية استفسارات يرجى التواصل معنا."
            ]}
        />
    );
}

export default withBackground(FormFinishedStage, <ExpandedInOutBackground/>);