import temporary from "../../../assets/icons/black/temporary.png";
import partial from "../../../assets/icons/black/partial.png";
import mediation from "../../../assets/icons/black/mediation.png";
import {BigChoicePage} from "../../../components/page/Page";
import React from "react";
import {BigButton} from "../../../components/button/Button";

export default function ServiceChoice({choices, onChoice}) {
    return (
        <BigChoicePage text="ما الخدمة التي ترغب بالاستفادة منها ؟" className="py-dynamic lg:w-fit mx-auto">
            <BigButton
                label="التخزين الوجيز"
                icon={temporary}
                onClick={() => onChoice(choices[0])}
            />
            <BigButton
                label="التخزين الجزئي"
                icon={partial}
                onClick={() => onChoice(choices[1])}
            />
            <BigButton
                label="التخزين لفترة طويلة"
                icon={mediation}
                onClick={() => onChoice(choices[2])}
            />
        </BigChoicePage>
    );
}
