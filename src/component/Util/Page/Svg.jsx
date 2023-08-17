import React from "react";

function Svg({defs, children, ...props}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            {defs && <defs>{defs}</defs>}
            {children}
        </svg>
    );
}

function ShadowFilter({id, offset}) {
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

export function SineWaveSvg({fill = "#ffffff", shadowOffset = "5"}) {
    return (
        <Svg
            viewBox="0 0 900 50"
            preserveAspectRatio="none"
            defs={<ShadowFilter id="shadow" offset={shadowOffset}/>}
        >
            <path fill={fill} filter="url(#shadow)" stroke={fill}
                  d="M 0 25 Q 50 50 100 25 Q 150 0 200 25 Q 250 50 300 25 Q 350 0 400 25 Q 450 50 500 25 Q 550 0 600 25 Q 650 50 700 25 Q 750 0 800 25 Q 850 50 900 50 L 900 50 L 0 50 Z"/>
        </Svg>
    );
}

export function SimpleWaveSvg({fill = "#ff684c", shadowOffset = "2"}) {
    return (
        <Svg viewBox="0 0 1600 450" defs={<ShadowFilter id="shadow" offset={shadowOffset}/>}>
            <path fill={fill} strokeLinecap="round" strokeLinejoin="miter" filter="url(#shadow)"
                  d="M0 363L133.3 361.7C266.7 360.3 533.3 357.7 800 321.2C1066.7 284.7 1333.3 214.3 1466.7 179.2L1600 144L1600 451L1466.7 451C1333.3 451 1066.7 451 800 451C533.3 451 266.7 451 133.3 451L0 451Z"/>
        </Svg>
    );
}