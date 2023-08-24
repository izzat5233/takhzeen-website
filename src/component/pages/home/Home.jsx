import React from 'react'
import './home.css';
import {motion} from 'framer-motion';
import {ScrollProgressBar} from "../../utils/animation/ProgressBar";
import WelcomePage from "./page/Welcome";
import ServicesPage from "./page/Services";
import MorePage from "./page/More";

export default function Home() {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
        >
            <ScrollProgressBar/>
            <WelcomePage id="welcomeSection"/>
            <ServicesPage id="serviceSection"/>
            <MorePage id="moreSection"/>
        </motion.div>
    );
}
