import React, {useState} from 'react'
import logo from '../../assets/icons/normal/logo.png';
import logoWithText from '../../assets/icons/normal/logoWithText.png';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import useIsWideScreen from "../../utils/hook/Screen";
import navbar from "./Navbar.module.css";
import Focusable from "../../utils/effect/Focusable";

export const navbarLinks = [
    {
        title: "الرئيسية",
        to: "home"
    },
    {
        title: "عن تخزين",
        to: "about"
    },
    {
        title: "تواصل معنا",
        to: "contact"
    },
];

export default function Navbar() {
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
            className={navbar.defaultNavbar}
        >
            <NavbarLogo/>
            <div className="hidden lg:justifying">
                <ExpandedNavbar/>
            </div>
            <div className="lg:hidden flex">
                <DropdownMenuNavbar/>
            </div>
        </motion.nav>
    );
};

function NavbarLogo() {
    const isWideScreen = useIsWideScreen();

    return (
        <img
            src={isWideScreen ? logoWithText : logo}
            alt="logo"
            className="justify-start w-auto h-10 lg:h-16"
        />
    );
}

function ExpandedNavbar() {
    return (
        <div className="flex flex-row justify-end gap-8 justify-items-center">
            {navbarLinks.map((link, index) => (
                <Link to={link.to} className={`relative text-md ${navbar.underlineHoverEffect}`} key={index}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

function DropdownMenuNavbar() {
    const [toggled, setToggled] = useState(false);

    return toggled ? (
        <div className="relative">
            <RiCloseLine
                color="#000"
                size={27}
                onClick={() => setToggled(false)}
                className="cursor-pointer"
            />
            <Focusable setToggled={setToggled} className={`${navbar.dropdownMenu} scale-up-center`}>
                <div className="flex flex-col gap-8 text-xl">
                    {navbarLinks.map(link => (
                        <Link
                            to={link.to}
                            onClick={() => setToggled(false)}
                            className="active:bg-gray-200 rounded text-center py-2 px-4 w-full"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </Focusable>
        </div>
    ) : (
        <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggled(true)}
            className="cursor-pointer"
        />
    );
}
