import React from 'react'
import storage from '../../../assets/images/storage.png';
import sys from '../../../assets/icons/normal/management.png';
import Partial from '../../../assets/icons/normal/partial.png';
import connection from '../../../assets/icons/normal/mediation.png';
import time from '../../../assets/icons/normal/temporary.png';
import './home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ScrollProgressBar} from "../../Util/Animation/ProgressBar";


const Home = () => {
  const cardsData = [
    {
      imgSrc: sys,
      title: "إدارة المخازن",
      description: " نضمن لك خدمات ادارية لخازن تتمثل بأعلى مواصفات الجودة والكفاءة لنحقق لك سلاسة العمليات، من بداية سلسلة تجارتك وحتى نهايتها، من:استلام، جرد، تصنيف، تقسيم ، تهيئة... "
    },
    {
      imgSrc: Partial,
      title: "تخزينك الوجيز",
      description: "   نتيح لك الفرصة بتخزين بضاعتك ومقتنياتك في مخازن مختلفة الحجام لفترات زمنية قصيرة ومتراوحة تناسب حاجتك دون ان تشعر بالاضطرار لاستئجار مساحة لفترات زمنية طويلة."
    },
    {
      imgSrc: connection,
      title: "وسيطك",
      description: " مساحتنا اللكترونية تفتح لك آفاق التواصل لايجاد طلبك من مخزن يلائمك او مستأجر تبحث عنه، نضمن لك المصداقية والكفاءة وبساطة الستخدام، وسهولة الحصول على مخزن بمواصفاتك الخاصة ومستأجر بشروطك التعاقدية."
    },
    {
      imgSrc: time,
      title: "تخزين جزئي",
      description: "  نمنحك تجربة استغلال المساحات التخزينية المتوفرة بما يتناسب مع حاجتك كمستأجر ومصلحتك كمؤجر بأساليب تقطيع مبتكرة، مخازن  منفصلة داخل المخزن ذاته مداخل خاصة وكاميرات مراقبة لتضمن  سلامة ممتلكاتك."
    }
  ];
  const features = [
    {
      title: ' خيارات متنوعة',
      description: 'نساعدك في تنظيم المساحة وترتيب البضائع بطريقة تسمح بتخزين أكبر عدد من السلع في مساحة محدودة.',
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
  return (
    <motion.div
      initial={{opacity: 0, x: -10, y: 10}}
      animate={{opacity: 1, x: 0, y: 0}}
      exit={{opacity: 0, x: 10, y: -10}}
      transition={{ease: "easeIn"}}
    >
      <ScrollProgressBar/>
      <div className="min-h-screen">
        <div className="header section__padding" id="Home">
          <div className="header-content" style={{ textAlign: "right" }}>
            <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
            <p>  نعمل الى جانب كلً من الستأجرين والؤجرين، نواجه ما يعانونه من تحديات من خلل خلقنا لحلول تخزينية مبتكرة ، لنرقى
بالكفاءات والخدمات القدمة من قبلهم.</p>

            <div className="header-content__input">

              <button type="button"><Link to="/management"> لِنُدّر لك مخزنك</Link></button>
              <button type="button"><Link to="/owner">اعرض مخزنك</Link> </button>
              <button type="button"><Link to="/find">ابحث عن مخزنك</Link> </button>
            </div>
          </div>

          <div className="header-image">
            <img src={storage} />
          </div>
        </div>
      </div>
      <section className="cards min-h-screen mb-20" id="services">
        <h1 className="title">خـــدمـــاتـــنـــا</h1>
        <h2 className='sub_title'>احصل على حلول تخزينية محسوبة بالّلي لتنهض بالكفاءات والخدمات القدمة من قبلنا
</h2>
        <div className="content">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <img src={card.imgSrc} alt={`Card ${index + 1}`} />
              </div>
              <div className="info">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <br />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="cards min-h-screen mb-20" id="features">
    <h2 className="title">لــمــاذا تــخــزيــن ؟</h2>
    <div className="content">
      {features.map((skill, index) => (
        <div className="card" key={index}>
          <div className="info">
            <h3>{skill.title}</h3>
            <p>{skill.description.split('\n').map((item, i) => <span key={i}>{item}<br /></span>)}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
    </motion.div>
  )
}

export default Home
