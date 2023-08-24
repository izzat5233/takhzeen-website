import {BsArrowRightShort} from "react-icons/bs";
import React from "react";
import {useNavigate} from "react-router-dom";
import SmallButton from "../../utils/button/SmallButton";

export default function ComingSoon() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-grow my-auto py-10 text-center bg-primary">
                <p className="text-5xl sm:text-7xl font-bold">
                    قيد التطوير<br/>
                </p>
                <SmallButton
                    label="ارجع"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate(-1)}
                />
            </div>
        </div>
    );
}