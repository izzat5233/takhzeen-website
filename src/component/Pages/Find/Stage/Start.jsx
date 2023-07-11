import partial from "../../../../assets/icons/black/partial.png";
import temporal from "../../../../assets/icons/black/temporary.png";
import React from "react";

export default function Start({navigate}) {
    return (
        <div className="min-h-screen flex flex-col justify-center text-center">
            <div className="flex flex-col xl:flex-row xl:gap-36 justify-center">
                <Option
                    icon={partial}
                    description="أرغب في الاستفادة من التخزين الجزئي"
                    bgColor="bg-accent2"
                    onClick={() => navigate('temporary')}
                />
                <Option
                    icon={temporal}
                    description="أرغب في التخزين لفترة قصيرة"
                    bgColor="bg-accent3"
                    onClick={() => navigate('partial')}
                />
            </div>
        </div>
    );
}

function Option({icon, description, bgColor, onClick, checked = false}) {
    return (
        <div className={`
            my-20 mx-auto xl:mx-8 w-80 h-80 p-2
            inline-block rounded-2xl
            transition-all duration-300 hover:z-10
            hover:bg-black hover:scale-125 shadow-gray-400
            ${checked ? "bg-gradient-orange shadow-xl rotate-0" : "bg-gray-200 rotate-45"}
        `}>
            <button
                className={`
                    w-full h-full p-6 rounded-2xl
                    transition-all duration-300
                    ${checked ? "bg-gradient-orange" : bgColor}
                `}
                onClick={() => onClick()}
            >
                <div className={`
                    flex flex-col gap-6 transition-opacity hover:opacity-100
                    ${checked ? "rotate-0 opacity-100" : "-rotate-45 opacity-80"}
                `}>
                    <img src={icon} alt={description} className="w-24 mx-auto"/>
                    <p className="text-2xl leading-loose font-bold transition-none">
                        {description}
                    </p>
                </div>
            </button>
        </div>
    );
}