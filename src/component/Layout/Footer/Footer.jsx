import React from 'react';
import './footer.css';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="w-full relative text-white flex justify-start items-center flex-col z-1 pt-0 pr-0 pb-0.5 pl-0 section__padding footer bg-[#031B34] mt-auto py-3" id="login">
      <div className="footer-links  w-full flex justify-between items-start mt-20 pt-0 pb-0 pl-0 pr-0 ">
        <div className="footer-links_work1 m-4 text-center flex-1">
          <h1 className="footer-headtext  text-white font-normal capitalize text-3xl mb-4 tracking-normal leading-normal  md:text-4xl lg:text-4xl">شركة تخزين</h1>
          <a href="#"><p className="text-xl mb-4 p__opensans">اتفاقية الاستخدام</p></a>
          <a href="#"><p className="text-xl mb-4 p__opensans">سياسية الخصوصية</p></a>
          <a href="#"><p className="text-xl mb-4 p__opensans">الاسئلة الشائعة</p></a>
          <a href="#"><p className="text-xl mb-4 p__opensans">انضم لفريق تخزين</p></a>
        </div>

        <div className="footer-links_logo m-4 text-center flex-1 w-56 mb-3 order-2 text-2xl md:order-1   md:text-3xl lg:text-3xl">
          <h1 className="mb-4"> تخزين منصة فلسطينية تطرح حلول تخزينية مبتكرة، كما وتقدم دعم لوجستياً لامتناهي يناسب العملاء </h1>
          <div className="footer-links_icons mt-2 flex justify-center space-x-2">
            <a className="flex items-center mr-2" href="https://www.facebook.com/ta5zeen" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a className="flex items-center mr-2" href="https://twitter.com/TakhzeenPS" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a className="flex items-center mr-2" href="https://www.instagram.com/ta5zeen.ps/" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
            <a className="flex items-center mr-2" href="https://www.linkedin.com/company/takhzeen-ps/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-links_work m-4 text-center flex-1 order-3">
          <h1 className="footer-headtext text-white font-normal capitalize text-3xl mb-4 tracking-normal leading-normal  md:text-4xl lg:text-4xl lg:leading-10	">تواصل معنا</h1>
          <a href="#"><p className="text-xl mb-4 p__opensans">نابلس - فلسطين</p></a>
          <a href="#"><p className="text-xl mb-4 p__opensans"> +970 59-285-4228</p></a>
          <a href="#"><p className="text-xl mb-4 p__opensans"> +972 593-456-7852</p></a>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="text-xl p__opensans">تخزين 2023 ، كل الحقوق محفوظة</p>
      </div>
    </div>
  );
};

export default Footer;
