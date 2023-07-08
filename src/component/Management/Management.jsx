import React from 'react'
import icon from "../../assets/management_system.png";
import Form from "./Form/Form";
import Field from "./Form/Field";
import Button from "./Form/Button";
import {BsArrowLeftShort} from "react-icons/bs";

export default function Management() {
    return (
        <div dir="rtl" className="
            pt-24 bg-back
            flex flex-col items-center justify-center min-h-screen
        ">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex flex-row gap-10 mb-5 md:mb-10">
                        <img
                            src={icon}
                            alt="Management Logo"
                            className="w-24 md:w-40"
                        />
                        <h1 className="
                            font-bold text-4xl md:text-6xl bg-gradient-primary bg-clip-text my-auto
                        ">ادارة المخازن
                        </h1>
                    </div>
                    <p className="mx-auto mb-20 text-2xl">
                        يمكننا الآن مساعدتك في الاشراف على مخازنك
                    </p>
                </div>
                <div className="z-10 mx-auto">
                    <Form
                        title="عرفنا عن نفسك"
                        onSubmit={() => {
                        }}
                    >
                        <Field label="الاسم" type="text"/>
                        <Field label="رقم الهاتف" type="tel"/>
                        <Field label="البريد الاكتروني" type="email"/>
                        <Field label="اسم الشركة" type="text"/>
                        <Field label="عنوان الموقع الاكتروني" type="url"/>
                        <Button
                            label="ابدأ"
                            icon={<BsArrowLeftShort/>}
                            onClick={() => {
                            }}
                        />
                    </Form>
                </div>
            </div>
            <TriangleShape/>
        </div>
    );
}

function TriangleShape() {
    return (
        <div className="sticky bottom-0 left-0 w-full overflow-hidden rotate-180 ">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                 preserveAspectRatio="none" className="relative block w-full h-40 lg:h-80 transform scale-x-[-1]">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="fill-primary"></path>
            </svg>
        </div>
    );
}
