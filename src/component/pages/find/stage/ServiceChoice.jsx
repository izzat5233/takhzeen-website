import {IconBigButton} from "../../../utils/button/BigButton";
import temporary from "../../../../assets/icons/black/temporary.png";
import partial from "../../../../assets/icons/black/partial.png";
import mediation from "../../../../assets/icons/black/mediation.png";
import {BigChoiceTemplate} from "../../../utils/page/Template";
import React from "react";

export default function ServiceChoice({choices, onChoice}) {
    return (
        <BigChoiceTemplate text="ما الخدمة التي ترغب بالاستفادة منها ؟" className="py-dynamic lg:w-fit mx-auto">
            <IconBigButton
                label="التخزين الوجيز"
                icon={temporary}
                onClick={() => onChoice(choices[0])}
            />
            <IconBigButton
                label="التخزين الجزئي"
                icon={partial}
                onClick={() => onChoice(choices[1])}
            />
            <IconBigButton
                label="التخزين لفترة طويلة"
                icon={mediation}
                onClick={() => onChoice(choices[2])}
            />
        </BigChoiceTemplate>
    );
}
