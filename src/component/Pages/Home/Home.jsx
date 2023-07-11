import React, { useEffect } from 'react'
import storage from '../../../assets/images/storage.png';
import sys from '../../../assets/icons/normal/management.png';
import Partial from '../../../assets/icons/normal/partial.png';
import connection from '../../../assets/icons/normal/mediation.png';
import time from '../../../assets/icons/normal/temporary.png';
import './home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const cardsData = [
    {
      imgSrc: sys,
      title: "إدارة المخازن",
      description: "تتمثل هذه الجزئية بتوفير خدمات ادارية وخدمات اشراف على المخازن"
    },
    {
      imgSrc: Partial,
      title: "تخزين مؤقت",
      description: "تتمثل هذه الخدمة بتوفير مساحات للافراد والعائلات لتخزين معدات او ادوات لا يتم استخدامها لفترة معينة."
    },
    {
      imgSrc: connection,
      title: "الربط بين المؤجر والمستأجر",
      description: "تتمثل الخدمة بتوفير مساحة الكترونية تسمح للمؤجر بعرض مخزنه ومتطلباته لتأجير هذا المخزن"
    },
    {
      imgSrc: time,
      title: "تخزين جزئي",
      description: "تتمثل هذه الخدمة بمساعدة كل من المؤجرين والمستأجرين باستغلال المساحات التخزينية المتوفرة بما بتناسب مع حاجة المستأجر ومصلحة المؤجر"
    }
  ];
  const features = [
    {
      title: 'تخزين فعال',
      description: 'نساعدك في تنظيم المساحة وترتيب البضائع بطريقة تسمح بتخزين أكبر عدد من السلع في مساحة محدودة.',
    },
    {
      title: 'توفير الوقت والجهد',
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
  ];
  return (
    <div>
      <div className="min-h-screen">
        <div className="header section__padding" id="Home">
          <div className="header-content" style={{ textAlign: "right" }}>
            <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
            <p>  احصل على حلاً مبتكرًا وفعالًا لتحقيق أهدافك المالية من خلال إدارتنا الفعالة لمستودعاتك .</p>

            <div className="header-content__input">

              <button type="button"><Link to="/management">إدارة المخازن</Link></button>
              <button type="button"><Link to="/Owner">إعلان لمخزنك</Link> </button>
              <button type="button"><Link to="/Search">البحث عن مخزن</Link> </button>
            </div>
          </div>

          <div className="header-image">
            <img src={storage} />
          </div>
        </div>
      </div>
      <section className="cards min-h-screen mb-20" id="services">
        <h1 className="title">خـــدمـــاتـــنـــا</h1>
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
                <p>إقرأ المزيد</p>
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
    </div>
  )
}

export default Home
