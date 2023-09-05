import React from "react";
import svg from "./Svg.module.css";

export default function Svg({defs, children, ...rest}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...rest}>
            {defs && <defs>{defs}</defs>}
            {children}
        </svg>
    );
}
