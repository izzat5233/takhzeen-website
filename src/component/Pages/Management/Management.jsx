import React, {useEffect} from 'react';
import Start from "./Stage/Start";
import Continue from "./Stage/Continue";
import {Route, Routes, useNavigate} from "react-router-dom";
import ComingSoon from "../Misc/ComingSoon/ComingSoon";
import NotFound from "../Misc/NotFound/NotFound";

export default function Management() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('start');
    }, []);

    return (
        <Routes>
            <Route
                path="start"
                element={
                    <Wrapper>
                        <Start onSubmit={() => navigate('fill1')}/>
                    </Wrapper>
                }
            />
            <Route
                path="fill1"
                element={
                    <Wrapper>
                        <Continue
                            onSubmit={() => navigate('fill2')}
                            onBack={() => navigate('start')}
                        />
                    </Wrapper>
                }
            />
            <Route
                path="fill2"
                element={<ComingSoon/>}
            />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

function Wrapper({children}) {
    return (
        <div dir="rtl" className="pt-24 bg-back min-h-screen flex flex-col items-center justify-center">
            <div className="z-10">
                {children}
            </div>
            <TriangleShape/>
        </div>
    );
}

function TriangleShape() {
    return (
        <div className="sticky bottom-0 left-0 w-full overflow-hidden rotate-180 ">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                 preserveAspectRatio="none" className="relative block w-full h-40 lg:h-80 transform scale-x-[-1]">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="fill-primary"></path>
            </svg>
        </div>
    );
}
