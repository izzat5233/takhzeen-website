import React from 'react'
import {BsArrowRightShort} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import LabelButton from "../../components/button/Button";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="page">
            <div className="py-10 text-center bg-primary flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-lg-dynamic font-bold tracking-widest">
                        404<br/>
                    </p>
                    <p className="text-sm-dynamic">
                        الصفحة غير موجودة<br/>
                    </p>
                </div>
                <LabelButton
                    label="ارجع"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate("/", {replace: true})}
                />
            </div>
        </section>
    );
}
