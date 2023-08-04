import React from "react";

export function UniformWaveSvg({fill = "#ffffff", shadowOffset = "5"}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 50" preserveAspectRatio="none">
            <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
                    <feOffset dx="0" dy={shadowOffset} result="offsetblur"/>
                    <feFlood floodColor="black" floodOpacity="0.5"/>
                    <feComposite in2="offsetblur" operator="in"/>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path fill={fill} filter="url(#shadow)" stroke={fill}
                  d="M 0 25 Q 50 50 100 25 Q 150 0 200 25 Q 250 50 300 25 Q 350 0 400 25 Q 450 50 500 25 Q 550 0 600 25 Q 650 50 700 25 Q 750 0 800 25 Q 850 50 900 50 L 900 50 L 0 50 Z"/>
        </svg>
    );
}