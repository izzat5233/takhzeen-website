import React from 'react';
import './footer.css';
import {FiFacebook, FiTwitter, FiInstagram, FiLinkedin} from 'react-icons/fi';
import {Link} from "react-router-dom";
import {navbarLinks} from "../navbar/navbarLinks";

const Footer = () => {
    return (
        <div className="
            w-full relative text-white font-light
            flex justify-start items-center flex-col
            z-1 pt-0 pr-0 pb-0.5 pl-0 mt-auto py-3
            section__padding footer bg-[#031B34]
        ">
            <div className="footer-links  w-full flex justify-between items-start mt-20 pt-0 pb-0 pl-0 pr-0 ">
                <div className="footer-links_work1 m-4 text-center flex-1">
                    <h1 className="
                        footer-headtext font-normal capitalize mb-4
                        text-3xl tracking-normal leading-normal md:text-4xl lg:text-4xl
                    ">
                        شركة تخزين
                    </h1>
                    {navbarLinks.map((link, index) => (
                        <Link to={link.to} key={index}>
                            <p className="text-xl mb-4 p__opensans">{link.title}</p>
                        </Link>
                    ))}
                </div>
                <div
                    className="footer-links_logo m-4 text-center flex-1 w-56 mb-3 order-2 text-2xl md:order-1 md:text-3xl lg:text-3xl">
                    <h1 className="
                        footer-headtext font-normal capitalize mb-4
                        text-3xl tracking-normal leading-normal md:text-4xl lg:text-4xl
                    ">
                        تخزين
                    </h1>
                    <p className="text-xl mb-4 p__opensans">
                        منصة فلسطينية تطرح حلول تخزينية مبتكرة، كما وتقدم دعم لوجستياً لامتناهي يناسب العملاء
                    </p>
                    <div className="footer-links_icons mt-2 flex justify-center space-x-2">
                        <a href="https://www.facebook.com/ta5zeen" target="_blank" rel="noopener noreferrer">
                            <FiFacebook/>
                        </a>
                        <a href="https://twitter.com/TakhzeenPS" target="_blank" rel="noopener noreferrer">
                            <FiTwitter/>
                        </a>
                        <a href="https://www.instagram.com/takhzeen.ps/" target="_blank" rel="noopener noreferrer">
                            <FiInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/company/takhzeen-ps/" target="_blank"
                           rel="noopener noreferrer">
                            <FiLinkedin/>
                        </a>
                    </div>
                </div>
                <div className="footer-links_work m-4 text-center flex-1 order-3">
                    <h1 className="
                        footer-headtext font-normal capitalize text-3xl mb-4
                        tracking-normal leading-normal  md:text-4xl lg:text-4xl lg:leading-10
                    ">
                        تواصل معنا
                    </h1>
                    <p className="text-xl mb-4 p__opensans">نابلس - فلسطين</p>
                    <p className="text-xl mb-4 p__opensans">+972-593-456-7852</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="text-xl p__opensans">تخزين 2023 ، كل الحقوق محفوظة</p>
            </div>
        </div>
    );
};

export default Footer;
