import React from "react";
import {FaBoxOpen, FaClipboardList, FaComments, FaHeadset, FaShieldAlt, FaTh} from "react-icons/fa";

export default function SkillsSection({...rest}) {
    return (
        <section className="page text-center py-dynamic px-dynamic gap-4" {...rest}>
            <h2 className="title">لــمــاذا تــخــزيــن؟</h2>
            <div className="content">
                {skills.map((skill, index) => (
                    <div className="card card-rounded" key={index}>
                        <div className="info">
                            <div className="flex flex-wrap gap-2 justify-center text-strong">
                                <div className="text-2xl my-auto">{skill.icon}</div>
                                <h3>{skill.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export const skills = [
    {
        icon: <FaTh/>,
        title: 'خيارات متنوعة',
    },
    {
        icon: <FaComments/>,
        title: 'تواصل مجدي',
    },
    {
        icon: <FaShieldAlt/>,
        title: 'الأمان والحماية',
    },
    {
        icon: <FaClipboardList/>,
        title: 'إدارة المخزون',
    },
    {
        icon: <FaBoxOpen/>,
        title: 'تخزين ملائم',
    },
    {
        icon: <FaHeadset/>,
        title: 'خدمة عملاء فعالة',
    }
];