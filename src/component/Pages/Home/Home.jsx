import React, {useEffect} from 'react'
import './home.css';
import {motion} from 'framer-motion';
import {ScrollProgressBar} from "../../Util/Animation/ProgressBar";
import WelcomePage from "./Page/Welcome";
import ServicesPage from "./Page/Services";
import MorePage from "./Page/More";
import AboutPage from "./Page/About";

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
            <AboutPage id="aboutSection"/>
            <MorePage id="moreSection"/>
        </motion.div>
    );
}
