import {BsArrowRightShort} from "react-icons/bs";
import React from "react";
import {useNavigate} from "react-router-dom";
import LabelButton from "../../components/button/Button";

export default function ComingSoon() {
    const navigate = useNavigate();

    return (
        <section className="page">
            <div className="flex flex-col gap-8 py-10 text-center bg-primary font-bold">
                <p className="text-lg-dynamic">
                    قيد التطوير<br/>
                </p>
                <LabelButton
                    label="ارجع"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate(-1)}
                />
            </div>
        </section>
    );
}