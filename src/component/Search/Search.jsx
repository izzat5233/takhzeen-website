import React, {useState} from 'react'
import button from "../Button/Button";
import temporal from "../../assets/icons/black/time_storage.png";
import partial from "../../assets/icons/black/Partial_Storage.png"
import management from "../../assets/icons/black/management_system.png";
import {ContinueButton} from "../Util/Button";

export default function Search() {
    return (
        <div className="min-h-screen flex flex-col justify-center text-center">
            <div className="my-24 flex flex-col gap-10">
                <p className="text-5xl">قبل أن نجد مخزنك المثالي</p>
                <ContinueButton
                    label="ابدأ"
                    onClick={() => {
                    }}
                />
            </div>

            <div className="flex flex-col xl:flex-row gap-20 justify-center">
                <Option
                    icon={partial}
                    name="partial-storage"
                    description="أرغب في الاستفادة من التخزين الجزئي"
                    bgClassName="bg-accent2"
                />
                <Option
                    icon={temporal}
                    name="temporary-storage"
                    description="أرغب في التخزين لفترة قصيرة"
                    bgClassName="bg-accent3"
                />
                <Option
                    icon={management}
                    name="storage-management"
                    description="أرغب في أن تتم إدارة مخزني"
                    bgClassName="bg-accent4"
                />
            </div>
        </div>
    );
}

function Option({icon, name, description, bgClassName = "bg-back"}) {
    const [checked, setChecked] = useState(false);

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
                    ${checked ? "bg-gradient-orange" : bgClassName}
                `}
                onClick={() => setChecked(!checked)}
            >
                <div className={`
                    flex flex-col gap-6 transition-opacity hover:opacity-100
                    ${checked ? "rotate-0 opacity-100" : "-rotate-45 opacity-80"}
                `}>
                    <img src={icon} alt={name} className="w-24 mx-auto"/>
                    <p className="text-2xl leading-loose font-bold transition-none">
                        {description}
                    </p>
                </div>
            </button>
        </div>
    );
}