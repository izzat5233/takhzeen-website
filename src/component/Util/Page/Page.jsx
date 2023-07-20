import {ExpandedInOutBackground} from "../Animation/Background";
import React from "react";

export function FormPage({children, background, ...rest}) {
    return (
        <div dir="rtl"
             className="
            min-h-screen relative flex flex-col justify-center
            lg:py-20 lg:px-32 px-0 py-4
        ">
            {background ? background : <ExpandedInOutBackground className="bg-gradient-primary"/>}
            <div className="w-full lg:w-fit mx-auto" {...rest}>
                {children}
            </div>
        </div>
    );
}