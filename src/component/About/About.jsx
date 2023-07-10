import React from 'react';
import './about.css';
import about from '../../assets/about.jpeg';

const About = () => {
  return (
    <div>
    <div className="header1 section__padding" id="Home">
      <div className="header-content1" style={{ textAlign: "right" }}>
        <h1 className="gradient__text">من نحن ؟</h1>
        <p >شركة طلابية تأسست عام 2023،مختصة في تقديم خدمات للمستأجرين والمؤجرين،
           وللشركات بهدف تسهيل عملية إيجاد المخازن وتوفير تجربة استئجار مميزة وميسرة وأيضاً تقديم خدمات لوجستية في إدارة المخازن. إذا كنت تبحث عن 
          مساحة للإيجار أو بحاجة إلى خدمات تخزين، نحن نشجعك بشدة على التواصل
           معنا عبر موقعنا الإلكتروني أو عن طريق الأرقام المتاحة على الموقع.</p>

       
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