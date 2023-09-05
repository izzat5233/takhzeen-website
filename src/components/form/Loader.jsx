import {SyncLoader} from "react-spinners";
import React from "react";

export default function DefaultLoader({color = "white", size = 14}) {
    return (
        <div className="flex justify-center">
            <SyncLoader color={color} size={size}/>
        </div>
    );
}