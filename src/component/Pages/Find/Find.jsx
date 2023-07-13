import React, {useEffect} from 'react'
import Start from "./Stage/Start";
import {Route, Routes} from "react-router-dom";
import NotFound from "../Misc/NotFound/NotFound";
import TempForm from "./Stage/TempForm";
import PartialForm from "./Stage/PartialForm";

export default function Find() {
    return (
        <Routes>
            <Route path="" element={<Start/>}/>
            <Route path="temporary" element={<TempForm/>}/>
            <Route path="partial" element={<PartialForm/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}
