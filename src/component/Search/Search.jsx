import React, {useEffect, useState} from 'react'
import Start from "./Stage/Start";
import {Route, Routes, useNavigate} from "react-router-dom";
import NotFound from "../Misc/NotFound/NotFound";
import Storage from "./Stage/Storage";

export default function Search() {
    const [checkboxes, setCheckboxes] = useState({
        partialChecked: false,
        temporalChecked: false,
        managementChecked: false,
    });

    const navigate = useNavigate();

    useEffect(() => {
        navigate('start');
    }, []);

    return (
        <Routes>
            <Route
                path="start"
                element={
                    <Start
                        checkboxes={checkboxes}
                        onCheckboxesChange={(name) => {
                            setCheckboxes({
                                ...checkboxes,
                                [name]: !checkboxes[name],
                            });
                        }}
                        onSubmit={() => navigate('storage')}
                    />
                }
            />
            <Route
                path="storage"
                element={<Storage/>}
            />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}
