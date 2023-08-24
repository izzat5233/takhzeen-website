import React from 'react'
import {BsArrowRightShort} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import SmallButton from "../../utils/button/SmallButton";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-grow my-auto py-10 text-center bg-primary">
                <p className="text-8xl font-bold tracking-widest">
                    404<br/>
                </p>
                <p className="text-3xl">
                    الصفحة غير موجودة<br/>
                </p>
                <SmallButton
                    label="ارجع"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate("/", {replace: true})}
                />
            </div>
        </div>
    );
}
