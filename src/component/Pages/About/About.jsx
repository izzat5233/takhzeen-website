import React from 'react';
import './about.css';
import about from '../../../assets/images/about.jpeg';

const About = () => {
  return (
    <div className="min-h-screen">
    <div className="header1 section__padding" id="Home">
      <div className="header-content1" style={{ textAlign: "right" }}>
        <h1 className="gradient__text">من نحن ؟</h1>
        <p > شركة تخزين هي شركة محلية فلسطينية المنشأ، نطرح خدمات متنوعة عبر موقعنا الاكتروني، تستهدف مختلف فئات المستأجرين
واصحاب المخازن، بحيث نتيح فرصة الاستئجار الجزئي لمخزن، او استئجار مخزن بشكل مؤقت، او تقديم خدمة ادارة المخازن تبعا
لحاجة المتوجه لنا، كما ونعمل كحلقة وصل بين كلا المستأجر والمؤجر لنحقق الفائدة القصوى لكليهما.
نهدف في تخزين الى خلق حلول لمختلف المشاكل التي قد تواجه المستأجرين واصحاب المخازن عن طريق تقديم خدمات مبتكرة
وفريدة من نوعها تخدم كلا الطرفين، لنعزز قطاع التجارة والاقتصاد الفلسطيني عن طريق الاستفادة من امكانياته على اكمل وجه.</p>

       
      </div>

      <div className="header-image1">
        <img src={about} />
      </div>
    
    </div>
<div className='space'></div>



  </div>


  
  )
}

export default About