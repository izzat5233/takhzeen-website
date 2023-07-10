import React from 'react'
import button from "../Button/Button";
import temporal from "../../assets/time_storage.png";
import partial from "../../assets/Partial_Storage.png"
import management from "../../assets/management_system.png";

export default function Search() {
    return (
        <div className="min-h-screen flex flex-col justify-center text-center">
            <p className="text-5xl my-24">قبل أن نجد مخزنك المثالي</p>
            <div className="flex flex-col xl:flex-row gap-20 justify-center">
                <Option
                    icon={partial}
                    name="partial-storage"
                    description="أرغب في الاستفادة من التخزين الجزئي"
                />
                <Option
                    icon={temporal}
                    name="temporary-storage"
                    description="أرغب في التخزين لفترة قصيرة"
                />
                <Option
                    icon={management}
                    name="storage-management"
                    description="أرغب في أن تتم إدارة مخزني"
                />
            </div>
        </div>
    );
}

function Option({icon, name, description}) {
    return (
        <div className="
            my-20 mx-8 inline-block p-2 rounded-full
            hover:drop-shadow-2xl shadow-gray-400
            bg-gray-200 transition-all
            hover:bg-primary hover:scale-125
        ">
            <button className="
            w-80 h-80 rounded-full p-6
            transition-all
            bg-back
        ">
                <div className="flex flex-col gap-6">
                    <img src={icon} alt={name} className="w-24 mx-auto"/>
                    <p className="text-2xl leading-loose font-bold">
                        {description}
                    </p>
                </div>
            </button>
        </div>
    );
}