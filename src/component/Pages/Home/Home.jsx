import React from 'react'
import storage from '../../../assets/images/storage.png';
import sys from '../../../assets/icons/normal/management.png';
import Partial from '../../../assets/icons/normal/partial.png';
import connection from '../../../assets/icons/normal/mediation.png';
import time from '../../../assets/icons/normal/temporary.png';
import './home.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ScrollProgressBar} from "../../Util/Animation/ProgressBar";
import Page from "../../Util/Page/Page";
import {SineWaveSvg} from "../../Util/Page/Svg";
import {FaTh, FaComments, FaShieldAlt, FaClipboardList, FaBoxOpen, FaHeadset} from 'react-icons/fa';

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
        description: " نضمن لك خدمات ادارية لمخازنك تتمثل بأعلى مواصفات الجودة والكفاءة؛ لنحقق لك السلالة في عملياتك التخزينية، من بداية سلسلة تجارتك وحتى نهايتها، من:استلام، جرد، تصنيف، تقسيم ، تهيئة... "
    },
];

const features = [
    {
        icon: <FaTh/>,
        title: ' خيارات متنوعة',
        description: ''/*'نساعدك في تنظيم المساحة وترتيب البضائع بطريقة تسمح بتخزين أكبر عدد من السلع في مساحة محدودة.'*/,
    },
    {
        icon: <FaComments/>,
        title: 'تواصل مجدي',
        description: '',
    },
    {
        icon: <FaShieldAlt/>,
        title: 'الأمان والحماية ',
        description: ''
    },
    {
        icon: <FaClipboardList/>,
        title: 'إدارة المخزون',
        description: '',
    },
    {
        icon: <FaBoxOpen/>,
        title: 'تخزين ملائم',
        description: ''
    },
    {
        icon: <FaHeadset/>,
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
        >
            <ScrollProgressBar/>
            <Page>
                <div className="header section__padding" id="Home">
                    <div className="header-content" style={{textAlign: "right"}}>
                        <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
                        <p> نعمل الى جانب كلاً من المستأجرين والمؤجرين، نواجه ما يعانوه من تحديات من خلال خلقنا لحلول
                            تخزينية مبتكرة.</p>
                        <div className="header-content__input">
                            <button type="button"><Link to="/find">ابحث عن مخزنك</Link></button>
                            <button type="button"><Link to="/owner">اعرض مخزنك</Link></button>
                            <button type="button"><Link to="/management"> لِنُدر لك مخزنك</Link></button>
                        </div>
                    </div>
                    <div className="header-image">
                        <img src={storage} alt="Storage Company"/>
                    </div>
                </div>
            </Page>
            <Page id="services" className="gap-10 py-20 md:py-28 lg:py-36 bg-gradient-primary text-center">
                <div className="absolute -top-0.5 right-0 min-w-full overflow-hidden rotate-180">
                    <SineWaveSvg shadowOffset="3"/>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black drop-shadow-xl">خـــدمـــاتـــنـــا</h1>
                <h2 className="sub_title px-4 text-md lg:text-2xl">احصل على حلول تخزينية محسوبة بالملّي؛ لتنهض بالكفاءات
                    والخدمات المقدمة من
                    قبلنا</h2>
                <div className="content">
                    {cardsData.map((card, index) => (
                        <div className="card border-4 border-gray-200 flex flex-col gap-3" key={index}>
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
                <div className="absolute -bottom-0.5 right-0 min-w-full overflow-hidden">
                    <SineWaveSvg fill="rgb(249 250 251)"/>
                </div>
            </Page>
            <Page id="features" className="bg-gray-50 text-center py-dynamic px-dynamic gap-4">
                <h2 className="title">لــمــاذا تــخــزيــن؟</h2>
                <div className="content">
                    {features.map((skill, index) => (
                        <div className="card card-rounded" key={index}>
                            <div className="info">
                                <div className="flex flex-wrap gap-2 justify-center text-strong">
                                    <div className="text-2xl my-auto">{skill.icon}</div>
                                    <h3>{skill.title}</h3>
                                </div>
                                {/*<p>{skill.description.split('\n').map((item, i) => <span
                                    key={i}>{item}<br/></span>)}</p>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </Page>
        </motion.div>
    );
}

export default Home;
