import {useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";
import {motion} from "framer-motion";

export default function NavbarContainer({...rest}) {
    const [navbarHidden, setNavbarHidden] = useState(false);
    const {scrollY} = useScroll();
    const [prevScrollY, setPrevScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setNavbarHidden(latest > 30 && latest > prevScrollY);
        setPrevScrollY(latest);
    });

    return (
        <motion.nav
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: -25}
            }}
            animate={navbarHidden ? "hidden" : "visible"}
            transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}
            {...rest}
        />
    );
}