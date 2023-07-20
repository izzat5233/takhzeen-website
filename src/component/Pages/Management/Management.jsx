import React, {useState} from 'react';
import Start from "./Stage/Start";
import Fill from "./Stage/Fill";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import Page from "../../Util/Page/Page";

export default function Management() {
    const [stage, setStage] = useState(1);
    const navigate = useNavigate();

    return (
        <Page background={<TriangleShape/>}>
            {stage === 2 &&
                <Fill
                    onSubmit={() => navigate("/comingsoon")}
                    onBack={() => setStage(1)}
                />}
            {stage === 1 && <Start onSubmit={() => setStage(2)}/>}
        </Page>
    );
}

function TriangleShape() {
    return (
        <motion.div
            initial={{translateY: 500}}
            animate={{translateY: 0}}
            transition={{duration: 1, ease: "anticipate"}}
            className="absolute bottom-0 left-0 w-full h-full -z-10"
        >
            <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none" className="relative block w-full h-40 lg:h-80 transform scale-x-[-1]">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="fill-primary"></path>
                </svg>
            </div>
        </motion.div>
    );
}
