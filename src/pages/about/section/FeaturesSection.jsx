import Svg, {SineWavePath} from "../../../components/background/Svg";
import about from "../About.module.css";

export default function FeaturesSection({...rest}) {
    return (
        <section className="page items-center py-dynamic xl:py-44 bg-gray-100" {...rest}>
            <Svg viewBox="0 0 900 50" className={about.svgLayer}>
                <SineWavePath fill="#ffffff" stroke="#ffffff"/>
            </Svg>
            <div className={about.featuresContainer}>
                {features.map((feature, index) => (
                    <div className={`${about.featureBox} group`} key={index}>
                        <h2 className={`${about.strongTitle} only-hover:group-hover:text-back`}>
                            {feature.title}
                        </h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export const features = [
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