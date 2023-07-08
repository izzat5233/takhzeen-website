import React from 'react'
import './footer.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer section__padding  footer mt-auto py-3" id="login">
    <div className="footer-links">
    <div className="footer-links_contact">
        <h1 className="footer-headtext">تواصل معنا</h1>
        <a><p className="p__opensans">نابلس - فلسطين</p></a>
        <a><p className="p__opensans">+970 59-285-4228</p></a>
        <a><p className="p__opensans">+972 593-456-7852</p></a>
      </div>
      <div className="footer-links_logo">
        <h1>تخزين هي منصة فلسطينية لتسهيل عملية إيجاد مخازن، نعمل على تطوير دعم لوجستي متكامل ليتناسب مع عملائنا</h1>
        <div className="footer-links_icons">
        <a href="https://www.facebook.com/" target="_blank">
        <FiFacebook />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
        <FiTwitter />
        </a>
        <a href="https://www.instagram.com/ta5zeen.ps/" target="_blank">
        <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
        <FiLinkedin />
        </a>
        </div>
      </div>
      <div className="footer-links_work">
        <h1 className="footer-headtext">شركة تخزين</h1>
        <a href=""><p className="p__opensans">اتفاقية الاستخدام</p></a>
        <a href=""><p className="p__opensans">سياسية الخصوصية</p></a>
        <a href=""><p className="p__opensans">الاسئلة الشائعة</p></a>
        <a href=""><p className="p__opensans">انضم لفريق تخزين</p></a>
      </div>
    
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> تخزين 2023 ، كل الحقوق محفوظة</p>
    </div>
  </div>
  )
}

export default Footer