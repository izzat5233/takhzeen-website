import Button from "../../Util/Button";
import {BsArrowRightShort} from "react-icons/bs";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function ComingSoon({onBack}) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-grow my-auto py-10 text-center bg-primary">
                <p className="text-5xl sm:text-7xl font-bold">
                    قيد التطوير<br/>
                </p>
                <Button
                    label="ارجع"
                    icon={<BsArrowRightShort/>}
                    onClick={() => navigate("../")}
                />
            </div>
        </div>
    );
}