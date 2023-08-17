import Page from "../../../Util/Page/Page";
import React from "react";
import {FaBoxOpen, FaClipboardList, FaComments, FaHeadset, FaShieldAlt, FaTh} from "react-icons/fa";
import Svg, {SineWavePath} from "../../../Util/Page/Svg";

const MorePage = ({...rest}) => (
    <Page className="bg-gray-100 text-center py-dynamic px-dynamic gap-4"{...rest}>
        <Svg viewBox="0 0 900 50" className="svg-layer -top-0.5 right-0 rotate-180">
            <SineWavePath fill="#ffffff" stroke="#ffffff"/>
        </Svg>
        <h2 className="title">لــمــاذا تــخــزيــن؟</h2>
        <div className="content">
            {features.map((skill, index) => (
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
    </Page>
);

export default MorePage;

const features = [
    {
        icon: <FaTh/>,
        title: ' خيارات متنوعة',
    },
    {
        icon: <FaComments/>,
        title: 'تواصل مجدي',
    },
    {
        icon: <FaShieldAlt/>,
        title: 'الأمان والحماية ',
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