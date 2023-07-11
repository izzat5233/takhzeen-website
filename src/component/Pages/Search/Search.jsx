import React, {useEffect, useState} from 'react'
import Start from "./Stage/Start";
import {Route, Routes, useNavigate} from "react-router-dom";
import NotFound from "../Misc/NotFound/NotFound";
import TempForm from "./Stage/TempForm";
import PartialForm from "./Stage/PartialForm";

export default function Search() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('start');
    }, []);

    return (
        <Routes>
            <Route path="start" element={<Start navigate={navigate}/>}/>
            <Route path="temporary" element={<TempForm/>}/>
            <Route path="partial" element={<PartialForm/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}
