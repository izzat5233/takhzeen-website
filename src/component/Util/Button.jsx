import React from "react";
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

export default function Button({label, icon, onClick}) {
    return (
        <div className="
            flex flex-row gap-4
            mt-8 justify-center
        ">
            {label && <p className="text-2xl my-auto">{label}</p>}
            <button
                onClick={onClick}
                className="
                text-6xl rounded-full
                border-2 border-gray-800
                hover:bg-primary hover:text-white hover:border-primary transition-all
                "
            >
                {icon}
            </button>
        </div>
    );
}

export function ContinueButton({label, onClick}) {
    return (
        <Button
            label={label}
            icon={<BsArrowLeftShort/>}
            onClick={() => onClick()}
        />
    );
}

export function BackButton({label, onClick}) {
    return (
        <Button
            label={label}
            icon={<BsArrowRightShort/>}
            onClick={() => onClick()}
        />
    );
}
