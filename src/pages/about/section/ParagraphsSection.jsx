import login from "../../../assets/designs/about.png";
import Svg, {SineWavePath} from "../../../components/background/Svg";
import {FaBox, FaBuilding, FaLightbulb, FaLink} from "react-icons/fa";
import about from "../About.module.css";
import React from "react";

export default function ParagraphsSection({...rest}) {
    return (
        <section className="page items-center" {...rest}>
            <div className="flex flex-col md:flex-row gap-8 items-center py-dynamic mb-8">
                <img src={login} alt="Takhzeen"/>
                <h1 className="text-strong text-large-dynamic font-bold w-fit py-2">من نحن ؟</h1>
            </div>
            {paragraphs.map(paragraph => (
                <div className={`${about.paragraphBox} group`}>
                    <Svg viewBox="0 0 900 50" className={about.svgLayer}>
                        <SineWavePath fill="#ffffff" stroke="#ffffff"/>
                    </Svg>
                    <p className={`${about.paragraphIcon} only-hover:group-hover:text-back only-hover:group-hover:bg-strong transition-colors`}>
                        {paragraph.icon}
                    </p>
                    <p className="text-small-dynamic font-light">
                        {paragraph.description}
                    </p>
                </div>
            ))}
        </section>
    );
}

export const paragraphs = [
    {
        icon: <FaBuilding/>,
        description: "تخزين هي شركة محلية فلسطينية المنشأ، نطرح خدمات متنوعة عبر موقعنا الاكتروني، تستهدف مختلف فئات المستأجرين واصحاب المخازن."
    },
    {
        icon: <FaLink/>,
        description: "نعمل كحلقة وصل بين كلا المستأجر والمؤجر لنحقق الفائدة القصوى لكليهما."
    },
    {
        icon: <FaBox/>,
        description: "نتيح فرصة الاستئجار الجزئي لمخزن، او استئجار مخزن بشكل مؤقت، او تقديم خدمة ادارة المخازن تبعا لحاجة المتوجه لنا."
    },
    {
        icon: <FaLightbulb/>,
        description: "نهدف في تخزين الى خلق حلول لمختلف المشاكل التي تواجه المستأجرين واصحاب المخازن عن طريق تقديم خدمات مبتكرة وفريدة تخدم كلا الطرفين."
    },
];