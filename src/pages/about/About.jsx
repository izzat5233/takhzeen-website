import {FaBox, FaBuilding, FaLightbulb, FaLink} from "react-icons/fa";
import login from "../../assets/designs/about.png";
import React from "react";
import Svg, {SineWavePath} from "../../components/page/Svg";
import {motion} from "framer-motion";

export default function AboutPage({...rest}) {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
        >
            <section className="page items-center" {...rest}>
                <div className="flex flex-col md:flex-row gap-8 items-center py-dynamic mb-8">
                    <img src={login} alt="Takhzeen"/>
                    <h1 className="text-strong text-large-dynamic font-bold w-fit py-2">من نحن ؟</h1>
                </div>
                {paragraphs.map(paragraph => (
                    <div className="
                        w-full flex flex-col sm:flex-row justify-center items-center text-center gap-8
                        even:bg-gray-100 py-16 sm:py-32 xl:py-44 px-dynamic relative group
                    ">
                        <Svg viewBox="0 0 900 50" className="svg-layer -top-0.5 right-0 rotate-180">
                            <SineWavePath fill="#ffffff" stroke="#ffffff"/>
                        </Svg>
                        <p className="
                            absolute-center-x top-0 -translate-y-1/3 bg-back
                            text-medium-dynamic text-strong rounded-full p-4 sm:p-8 border-4 sm:border-8 border-strong
                            only-hover:group-hover:text-back only-hover:group-hover:bg-strong transition-colors
                        ">
                            {paragraph.icon}
                        </p>
                        <p className="text-small-dynamic font-light">
                            {paragraph.description}
                        </p>
                    </div>
                ))}
            </section>
            <section className="page items-center py-dynamic xl:py-44 bg-gray-100">
                <Svg viewBox="0 0 900 50" className="svg-layer -top-0.5 right-0 rotate-180">
                    <SineWavePath fill="#ffffff" stroke="#ffffff"/>
                </Svg>
                <div className="
                    flex flex-col px-dynamic gap-8 lg:gap-16 mt-8 lg:mt-16
                    text-small-dynamic font-light drop-shadow-xl
                ">
                    {features.map((feature, index) => (
                        <div className="
                            px-dynamic py-8 lg:py-16 flex flex-col gap-8 lg:gap-16 text-center
                            bg-back rounded-3xl group transition-all only-hover:hover:bg-primary-800
                        " key={index}>
                            <h2 className="text-medium-dynamic text-strong font-bold only-hover:group-hover:text-back">
                                {feature.title}
                            </h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}

const paragraphs = [
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
]


const features = [
    {
        title: 'رؤيتنا',
        description: 'أن نكون الأفضل في كل عمل نقوم به ، من خلال سعينا لخلق فرص استثمارية تقدم الدعم للقطاع التجاري و تساند أصحاب المشاريع لتحقيق أهدافهم برؤية جديدة للمستقبل.',
    },
    {
        title: 'رسالتنا',
        description: 'تتمثل مهمتنا في توفير حلول تخزين ملائمة وآمنة تلبي احتياجات الأفراد والشركات، نحول المساحات الفارغة الى فرص استثمارية،كما ونقدم دعم لامتناهي لعملائنا لتجربة خدماتنا اللوجستية المتكاملة بجودة عالية ،وبصورة خالية من المتاعب .',
    },
    {
        title: 'قِيَمنا',
        description: 'نحن ملتزمون بتوفير أعلى درجات الأمان، الشفافية والمصداقية، نبني ثقة مستديمة مع عملائنا، نوفر سرعة خدماتية، سلاسة في الإجراءات ، والتزاماً بالمواعيد، تحت ظروف عمل مثالية.',
    },
];