import Page from "../../../Util/Page/Page";
import {FaBox, FaBuilding, FaLightbulb, FaLink} from "react-icons/fa";
import about2 from "../../../../assets/images/about2.jpg";
import about1 from "../../../../assets/images/about1.jpg";
import about from "../../../../assets/images/about.jpeg";
import login from "../../../../assets/images/login.png";
import React from "react";

export default function AboutPage() {
    return (
        <Page className="items-center">
            <div className="flex flex-col md:flex-row gap-8 items-center py-dynamic mb-8">
                <img src={login} alt="Takhzeen"/>
                <h1 className="text-strong text-big-dynamic font-bold w-fit py-2">من نحن ؟</h1>
            </div>
            {paragraphs.map(paragraph => (
                <div className="
                    w-full flex flex-col sm:flex-row justify-center items-center text-center gap-8
                    even:bg-gray-100 py-16 sm:py-32 xl:py-44 px-dynamic relative group
                ">
                    <p className="
                        absolute-center-x top-0 -translate-y-1/3 bg-back
                        text-medium-dynamic text-strong rounded-full p-4 sm:p-8 border-4 sm:border-8 border-strong
                        only-hover:group-hover:text-back only-hover:group-hover:bg-strong transition-colors
                    ">
                        {paragraph.icon}
                    </p>
                    <p className="text-small-dynamic">
                        {paragraph.description}
                    </p>
                </div>
            ))}
        </Page>
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
        description: "نهدف في تخزين الى خلق حلول لمختلف المشاكل التي قد تواجه المستأجرين واصحاب المخازن عن طريق تقديم خدمات مبتكرة وفريدة من نوعها تخدم كلا الطرفين."
    },
]


const features = [
    {
        title: 'رؤيتنا',
        description: 'أن نكون الأفضل في كل عمل نقوم به ، من خلال سعينا لخلق فرص استثمارية تقدم الدعم للقطاع التجاري و تساند أصحاب المشاريع لتحقيق أهدافهم برؤية جديدة للمستقبل.',
        imgSrc: about2
    },
    {
        title: 'رسالتنا',
        description: 'تتمثل مهمتنا في توفير حلول تخزين ملائمة وآمنة تلبي احتياجات الأفراد والشركات، نحول المساحات الفارغة الى فرص استثمارية،كما ونقدم دعم لامتناهي لعملائنا لتجربة خدماتنا اللوجستية المتكاملة بجودة عالية ،وبصورة خالية من المتاعب .',
        imgSrc: about1
    },
    {
        title: 'قِيَمنا',
        description: 'نحن ملتزمون بتوفير أعلى درجات الأمان، الشفافية والمصداقية، نبني ثقة مستديمة مع عملائنا، نوفر سرعة خدماتية، سلاسة في الإجراءات ، والتزاماً بالمواعيد، تحت ظروف عمل مثالية.',
        imgSrc: about
    },
];