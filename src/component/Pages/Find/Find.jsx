import React from 'react'
import Start from "./Stage/Start";
import {Route, Routes} from "react-router-dom";
import NotFound from "../Misc/NotFound/NotFound";
import Temporary from "./Stage/Temporary/Temporary";
import Partial from "./Stage/Partial/Partial";

export default function Find() {
    return (
        <Routes>
            <Route path="" element={<Start/>}/>
            <Route path="temporary" element={<Temporary/>}/>
            <Route path="partial" element={<Partial/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}
