import React from 'react'
import storage from '../../../assets/images/storage.png';
import sys from '../../../assets/icons/black/management.png';
import Partial from '../../../assets/icons/black/partial.png';
import connection from '../../../assets/icons/black/mediation.png';
import time from '../../../assets/icons/black/temporary.png';
import './home.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ScrollProgressBar} from "../../Util/Animation/ProgressBar";

const cardsData = [
    {
        imgSrc: connection,
        title: "وسيطك",
        description: " مساحتنا الالكترونية تفتح لك آفاق التواصل؛ لايجاد طلبك من مخزن يلائمك أو مستأجر تبحث عنه، نضمن لك المصداقية والكفاءة وبساطة الاستخدام وسهولة الحصول على مخزن بمواصفاتك الخاصة ومستأجر بشروطك التعاقدية."
    },
    {
        imgSrc: time,
        title: "تخزين جزئي",
        description: "  نمنحك تجربة استغلال المساحات التخزينية المتوفرة بما يتناسب مع حاجتك كمستأجر ومصلحتك كمؤجر بأساليب تقطيع مبتكرة، مخازن  منفصلة داخل المخزن ذاته مداخل خاصة وكاميرات مراقبة لتضمن  سلامة ممتلكاتك."
    },
    {
        imgSrc: Partial,
        title: "تخزينك الوجيز",
        description: "   نتيح لك الفرصة لتخزين بضاعتك ومقتنياتك في مخازن مختلفة الأحجام لفترات زمنية قصيرة ومتراوحة تناسب حاجتك دون أن تشعر بالاضطرار لاستئجار مساحة لفترات زمنية طويلة."
    },
    {
        imgSrc: sys,
        title: "إدارة المخازن",
        description: " نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك سلالة عملياتك التخزينية، من بداية سلسلة تجارتك وحتى نهايتها، من:استلام، جرد، تصنيف، تقسيم ، تهيئة... "
    },
];

const features = [
    {
        title: ' خيارات متنوعة',
        description: ''/*'نساعدك في تنظيم المساحة وترتيب البضائع بطريقة تسمح بتخزين أكبر عدد من السلع في مساحة محدودة.'*/,
    },
    {
        title: 'تواصل مجدي',
        description: '',
    },
    {
        title: 'الأمان والحماية ',
        description: ''
    },
    {
        title: 'إدارة المخزون',
        description: '',
    },
    {
        title: 'تخزين ملائم',
        description: ''
    },
    {
        title: 'خدمة عملاء فعالة',
        description: ''
    }
];

const Home = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
            className="flex flex-col gap-10 snap-y snap-mandatory overflow-y-hidden min-h-full"
        >
            <ScrollProgressBar/>
            <section className="min-h-screen flex flex-col justify-center pb-20 snap-start">
                <div className="header section__padding" id="Home">
                    <div className="header-content" style={{textAlign: "right"}}>
                        <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
                        <p> نعمل الى جانب كلاً من المستأجرين والمؤجرين، نواجه ما يعانونه من تحديات من خلال خلقنا لحلول
                            تخزينية مبتكرة ، لنرقى
                            بالكفاءات والخدمات المقدمة من قبلهم.</p>
                        <div className="header-content__input">
                            <button type="button"><Link to="/management"> لِنُدّر لك مخزنك</Link></button>
                            <button type="button"><Link to="/owner">اعرض مخزنك</Link></button>
                            <button type="button"><Link to="/find">ابحث عن مخزنك</Link></button>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src={storage} alt="Storage Company"/>
                    </div>
                </div>
            </section>
            <section
                className="
                    min-h-screen flex flex-col justify-center text-center gap-10 py-20
                    bg-gradient-primary snap-start
                "
                id="services"
            >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">خـــدمـــاتـــنـــا</h1>
                <h2 className="sub_title px-4">احصل على حلول تخزينية محسوبة بالملّي؛ لتنهض بالكفاءات والخدمات المقدمة من قبلنا</h2>
                <div className="content">
                    {cardsData.map((card, index) => (
                        <div className="card flex flex-col gap-3" key={index}>
                            <div className="icon mx-auto">
                                <img src={card.imgSrc} alt={`Card ${index + 1}`}/>
                            </div>
                            <div className="info flex flex-col gap-4">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="cards min-h-screen flex flex-col justify-center text-center pb-20 snap-start" id="features">
                <h2 className="title lg:text">لــمــاذا تــخــزيــن؟</h2>
                <div className="content">
                    {features.map((skill, index) => (
                        <div className="card card-rounded" key={index}>
                            <div className="info">
                                <h3 className="text-strong">{skill.title}</h3>
                                <p>{skill.description.split('\n').map((item, i) => <span
                                    key={i}>{item}<br/></span>)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    )
}

export default Home;
