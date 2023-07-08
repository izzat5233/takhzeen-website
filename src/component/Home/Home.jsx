import React, { useEffect } from 'react'
import storage from '../../assets/storage.png';
import sys from '../../assets/management_system.png';
import Partial from '../../assets/Partial_Storage.png';
import connection from '../../assets/connection.png';
import time from '../../assets/time_storage.png';
import './home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div>
        <div className="header section__padding" id="Home">
          <div className="header-content" style={{ textAlign: "right" }}>
            <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
            <p>  احصل على حلاً مبتكرًا وفعالًا لتحقيق أهدافك المالية من خلال إدارتنا الفعالة لمستودعاتك .</p>

            <div className="header-content__input">

              <button type="button"><Link to="/Management">إدارة المخازن</Link></button>
              <button type="button"><Link to="/Owner">إعلان لمخزنك</Link> </button>
              <button type="button"><Link to="/Search">البحث عن مخزن</Link> </button>
            </div>
          </div>

          <div className="header-image">
            <img src={storage} />
          </div>
        </div>
      </div>
      <div className='space'></div>
      <section className="cards" id="services">
        <h2 className="title">خدماتنا</h2>
        <div className="content">
          <div className="card">
            <div className="icon">
              <img src={sys} />
            </div>
            <div className="info">
              <h3>إدارة المخازن</h3>
              <p>تتمثل هذه الجزئية بتوفير خدمات ادارية وخدمات اشراف على المخازن</p>
              <br />  <p>إقرأ المزيد</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
            <img src={Partial} />      </div>
            <div className="info">
              <h3>تخزين مؤقت</h3>
              <p>تتمثل هذه الخدمة بتوفير مساحات للافراد والعائلات لتخزين معدات او ادوات لا يتم استخدامها لفترة معينة  .</p>

              <br /><p>إقرأ المزيد</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={connection} />        </div>
            <div className="info">
              <h3> الربط بين المؤجر والمستأجر</h3>
              <p>   تتمثل الخدمة بتوفير مساحة الكترونية تسمح للمؤجر بعرض مخزنه ومتطلباته لتأجير هذا المخزن</p>
              <br /> <p>إقرأ المزيد</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              
              <img src={time} /></div>
            <div className="info">
              <h3>تخزين جزئي</h3>
              <p>تتمثل هذه الخدمة بمساعدة كل من المؤجرين والمستأجرين باستغلال المساحات التخزينية المتوفرة بما بتناسب مع حاجة المستأجر ومصلحة المؤجر</p>
              <br />  <p>إقرأ المزيد</p>
            </div>
          </div>
        </div>


      </section>
      <div className='space'></div>

    </div>
  )
}

export default Home

