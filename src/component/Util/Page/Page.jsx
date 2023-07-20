import {ExpandedInOutBackground} from "../Animation/Background";
import React from "react";

export default function Page({children, background, className, ...rest}) {
    return (
        <div
            dir="rtl"
            className="
                min-h-screen relative flex flex-col justify-center
                lg:py-20 lg:px-32 px-0 py-4
            "
            {...rest}
        >
            {background}
            <div className={`w-full mx-auto ${className}`}>
                {children}
            </div>
        </div>
    );
}

export function FormPage({children, ...rest}) {
    return (
        <Page
            className="lg:w-fit"
            background={<ExpandedInOutBackground className="bg-gradient-primary"/>}
            {...rest}
        >
            {children}
        </Page>
    );
}