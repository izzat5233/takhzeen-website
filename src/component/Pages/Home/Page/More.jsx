import Page from "../../../Util/Page/Page";
import React from "react";
import {FaBoxOpen, FaClipboardList, FaComments, FaHeadset, FaShieldAlt, FaTh} from "react-icons/fa";

const MorePage = ({...rest}) => (
    <Page
        id="features"
        className="bg-gray-50 text-center py-dynamic px-dynamic gap-4"
        {...rest}
    >
        <h2 className="title">لــمــاذا تــخــزيــن؟</h2>
        <div className="content">
            {features.map((skill, index) => (
                <div className="card card-rounded" key={index}>
                    <div className="info">
                        <div className="flex flex-wrap gap-2 justify-center text-strong">
                            <div className="text-2xl my-auto">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                        </div>
                        {/*<p>{skill.description.split('\n').map((item, i) => <span
                                    key={i}>{item}<br/></span>)}</p>*/}
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
        description: ''/*'نساعدك في تنظيم المساحة وترتيب البضائع بطريقة تسمح بتخزين أكبر عدد من السلع في مساحة محدودة.'*/,
    },
    {
        icon: <FaComments/>,
        title: 'تواصل مجدي',
        description: '',
    },
    {
        icon: <FaShieldAlt/>,
        title: 'الأمان والحماية ',
        description: ''
    },
    {
        icon: <FaClipboardList/>,
        title: 'إدارة المخزون',
        description: '',
    },
    {
        icon: <FaBoxOpen/>,
        title: 'تخزين ملائم',
        description: ''
    },
    {
        icon: <FaHeadset/>,
        title: 'خدمة عملاء فعالة',
        description: ''
    }
];