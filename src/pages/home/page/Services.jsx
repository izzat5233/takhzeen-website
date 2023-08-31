import React from "react";
import {motion} from "framer-motion";
import connection from "../../../assets/icons/normal/mediation.png";
import time from "../../../assets/icons/normal/temporary.png";
import Partial from "../../../assets/icons/normal/partial.png";
import sys from "../../../assets/icons/normal/management.png";
import {FaArrowLeftLong} from "react-icons/fa6";
import {Link} from "react-router-dom";
import Svg, {ShadowFilter, SineWavePath} from "../../../components/background/Svg";

const ServicesPage = ({...rest}) => {
    return (
        <section className="page py-20 md:py-32 lg:py-44 xl:py-48 bg-gradient-primary text-center" {...rest}>
            <Svg viewBox="0 0 900 50" defs={<ShadowFilter id="shadow" offset="3"/>}
                 className="absolute-layer -top-0.5 right-0 rotate-180">
                <SineWavePath fill="#ffffff" filter="url(#shadow)" stroke="#ffffff"/>
            </Svg>
            <div className="flex flex-col justify-center gap-10 lg:gap-14 xl:gap-16">
                <div className="flex flex-col justify-center gap-10 lg:gap-14 xl:gap-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-xl">خـــدمـــاتـــنـــا</h1>
                    <h2 className="sub_title px-4 text-md lg:text-2xl">
                        احصل على حلول تخزينية محسوبة بالملّي؛ لتنهض بالكفاءات والخدمات المقدمة من قبلنا
                    </h2>
                </div>
                <div className="
                    flex flex-col justify-center font-light
                    gap-2 sm:gap-8 lg:gap-12 xl:gap-16 mx-auto
                    px-2 sm:px-8 lg:px-16 xl:px-32 2xl:px-48
                    text-sm sm:text-lg lg:text-xl xl:text-2xl
                ">
                    {cardsData.map((card, index) => (
                        <Card card={card} index={index}/>
                    ))}
                </div>
            </div>
            <Svg viewBox="0 0 900 50" defs={<ShadowFilter id="shadow" offset="5"/>}
                 className="absolute-layer -bottom-0.5 right-0">
                <SineWavePath fill="#ffffff" filter="url(#shadow)" stroke="#ffffff"/>
            </Svg>
        </section>
    );
}

export default ServicesPage;

const cardsData = [
    {
        imgSrc: connection,
        title: "وسيطك",
        description: " مساحتنا الالكترونية تفتح لك آفاق التواصل؛ لايجاد طلبك من مخزن يلائمك أو مستأجر تبحث عنه، نضمن لك المصداقية والكفاءة وبساطة الاستخدام وسهولة الحصول على مخزن بمواصفاتك الخاصة ومستأجر بشروطك التعاقدية.",
        readMoreLabel: "اعلن عن مخزنك",
        readMoreURL: "/owner",
    },
    {
        imgSrc: time,
        title: "تخزين جزئي",
        description: "  نمنحك تجربة استغلال المساحات التخزينية المتوفرة بما يتناسب مع حاجتك كمستأجر ومصلحتك كمؤجر بأساليب تقطيع مبتكرة، مخازن  منفصلة داخل المخزن ذاته مداخل خاصة وكاميرات مراقبة لتضمن  سلامة ممتلكاتك.",
        readMoreLabel: "استفد من التخزين الجزئي",
        readMoreURL: "/find",
    },
    {
        imgSrc: Partial,
        title: "تخزينك الوجيز",
        description: "   نتيح لك الفرصة لتخزين بضاعتك ومقتنياتك في مخازن مختلفة الأحجام لفترات زمنية قصيرة ومتراوحة تناسب حاجتك دون أن تشعر بالاضطرار لاستئجار مساحة لفترات زمنية طويلة.",
        readMoreLabel: "استفد من التخزين الوجيز",
        readMoreURL: "/find",
    },
    {
        imgSrc: sys,
        title: "إدارة المخازن",
        description: " نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك السلالة في عملياتك التخزينية، من بداية سلسلة تجارتك وحتى نهايتها، من:استلام، جرد، تصنيف، تقسيم ، تهيئة... ",
        readMoreLabel: "دعنا نُدر مخزنك",
        readMoreURL: "/management",
    },
];

function Card({card, index}) {
    return (
        <motion.div
            initial={{opacity: 0, y: '20vh'}}
            whileInView={{opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeOut"}}}
            viewport={{once: true, amount: 0}}
            className="
                rounded-2xl bg-back drop-shadow-lg items-center
                py-4 sm:py-8 lg:py-12
                px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-20
                gap-8 lg:gap-16 xl:gap-32 2xl:gap-20
                flex flex-col md:flex-row even:md:flex-row-reverse
                border-4 border-gray-200
            "
            key={index}
        >
            <div className="flex flex-col gap-8 mx-auto">
                <img src={card.imgSrc} alt={`Card ${index + 1}`} className="mx-auto w-36 sm:w-64 md:w-96"/>
                <h3 className="font-extrabold text-3xl lg:text-4xl sm:whitespace-nowrap">
                    {card.title}
                </h3>
            </div>
            <div className="flex flex-col gap-8 lg:gap-12 xl:gap-14">
                <p className="text-start">{card.description}</p>
                <Link to={card.readMoreURL} className="w-fit mx-auto">
                    <p className="
                        flex flex-wrap gap-2
                        font-bold text-primary hover:text-strong
                        cursor-pointer items-center
                    ">
                        {card.readMoreLabel}
                        <FaArrowLeftLong/>
                    </p>
                </Link>
            </div>
        </motion.div>
    )
}