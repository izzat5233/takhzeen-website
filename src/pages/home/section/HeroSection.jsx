import {Link} from "react-router-dom";
import storage from "../../../assets/designs/storage.png";
import React from "react";

export default function HeroSection({...rest}) {
    return (
        <section className="page" {...rest}>
            <div className="header section__padding">
                <div className="header-content">
                    <h1 className="gradient__text"> مرحبًا بك في شركة تخزين!</h1>
                    <p> نعمل الى جانب كلاً من المستأجرين والمؤجرين، نواجه ما يعانوه من تحديات من خلال خلقنا لحلول
                        تخزينية مبتكرة.</p>
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
        to: "/owner",
    },
    {
        title: "لِنُدر لك مخزنك",
        to: "/management",
    },
];