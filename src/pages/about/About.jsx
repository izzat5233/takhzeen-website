import React from "react";
import {motion} from "framer-motion";
import ParagraphsSection from "./section/ParagraphsSection";
import FeaturesSection from "./section/FeaturesSection";

export default function About() {
    return (
        <motion.section
            initial={{opacity: 0, x: -10, y: 10}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 10, y: -10}}
            transition={{ease: "easeIn"}}
        >
            <ParagraphsSection/>
            <FeaturesSection/>
        </motion.section>
    );
}