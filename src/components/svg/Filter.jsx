import React from "react";

export function ShadowFilter({id, offset}) {
    return (
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
            <feOffset dx="0" dy={offset} result="offsetblur"/>
            <feFlood floodColor="black" floodOpacity="0.5"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    );
}