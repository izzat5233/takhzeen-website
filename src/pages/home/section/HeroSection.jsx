import {Link} from "react-router-dom";
import storage from "../../../assets/designs/storage.png";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function HeroSection({...rest}) {
    const { t } = useTranslation();
    
    const heroLinks = [
        {
            title: t('hero.findStorage'),
            to: "/find",
        },
        {
            title: t('hero.displayStorage'),
            to: "/service/owner",
        },
        {
            title: t('hero.manageStorage'),
            to: "/service/management",
        },
    ];
    
    return (
        <section className="page" {...rest}>
            <div className="header section__padding">
                <div className="header-content">
                    <h1 className="gradient__text">{t('hero.welcome')}</h1>
                    <p>{t('hero.description')}</p>
                    <div className="header-content__input">
                        {heroLinks.map((link, index) => (
                            <button type="button" key={index}>
                                <Link to={link.to}>{link.title}</Link>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="header-image">
                    <img src={storage} alt="Storage Company"/>
                </div>
            </div>
        </section>
    );
}

export const heroLinks = [
    {
        title: "ابحث عن مخزنك",
        to: "/find",
    },
    {
        title: "اعرض مخزنك",
        to: "/service/owner",
    },
    {
        title: "لِنُدر لك مخزنك",
        to: "/service/management",
    },
];