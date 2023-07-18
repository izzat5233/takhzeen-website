import {ExpandedInOutBackground} from "../Animation/Background";
import React from "react";

export function FormPage({children, ...rest}) {
    return (
        <div dir="rtl"
             className="
            min-h-screen relative flex flex-col justify-center
            lg:py-20 lg:px-32 p-0
        ">
            <ExpandedInOutBackground className="bg-gradient-primary"/>
            <div {...rest}>
                {children}
            </div>
        </div>
    );
}
