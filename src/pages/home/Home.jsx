import React from 'react'
import './home.css';
import {motion} from 'framer-motion';
import HeroSection from "./section/HeroSection";
import ServicesSection from "./section/ServicesSection";
import SkillsSection from "./section/SkillsSection";

export default function Home() {
    return (
        <motion.div
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
        >
            <HeroSection/>
            <ServicesSection/>
            <SkillsSection/>
        </motion.div>
    );
}
