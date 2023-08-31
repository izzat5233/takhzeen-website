import {SyncLoader} from "react-spinners";
import React from "react";

export const DefaultLoader = ({color = "white", size = 14}) => (
    <div className="flex justify-center">
        <SyncLoader color={color} size={size}/>
    </div>
);