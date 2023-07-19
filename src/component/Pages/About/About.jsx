import React from 'react';
import './about.css';
import about from '../../../assets/images/about.jpeg';

const About = () => {
  const features = [
    {
      title: 'الرؤية',
      description: 'أن نكون الفضل في كل عمل نقوم به ، من خلل سعينا لخلق فرص إستثمارية تقدم الدعم للقطاع التجاري و مساندة اصحاب الشاريع الخلقة لتحقيق أهدافهم برؤية جديدة للمستقبل.',
      imgSrc : ''
    },
    {
      title: 'الرسالة',
      description: 'تتمثل مهمتنا في توفير حلول تخزين ملائمة وآمنة تلبي احتياجات الأفراد والشركات، نحول المساحات الفارغة الى فرص استثمارية،كما ونقدم دعم لامتناهي لعملائنا لتجربة خدماتنا اللوجستية التكاملة بجودة عالية ،وبصورة خالية من المتاعب .',
      imgSrc : ''
    
    },
    {
      title: 'القيم',
      description: 'نحن ملتزمين بتوفير اعلى درجات الأمان، الشفافية والمصداقية، نبني ثقة مستديمة مع عملائنا، نوفر سرعة خدماتية، سلاسة في الإجراءات ، والتزاماً بالمواعيد، تحت ظروف عمل مثالية.',
      imgSrc : ''
    },
    
  ];
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
<div className='About_space'></div>

<section className="About_cards min-h-screen mb-20" id="features">
    <div className="About_content">
      
      {features.map((AboutVal, index) => (
        
        <div className="About_card" key={index}>
 <div className="icon">
                <img src={AboutVal.imgSrc}  />
              </div>
          <div className="About_info">
            <h3>{AboutVal.title}</h3>
            <p>{AboutVal.description.split('\n').map((item, i) => <span key={i}>{item}<br /></span>)}</p>
          </div>
        </div>
      ))}
    </div>
  </section>


  </div>


  
  )
}

export default About