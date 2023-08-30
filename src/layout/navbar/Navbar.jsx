import React, {useState} from 'react'
import logo from '../../assets/icons/normal/logo.png';
import logoWithText from '../../assets/icons/normal/logoWithText.png';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import useIsWideScreen from "../../utils/hook/Screen";
import navbar from "./Navbar.module.css";
import DropdownMenu from "./DropdownMenu";

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
    const [toggleMenu, setToggleMenu] = useState(false);
    const [navbarHidden, setNavbarHidden] = useState(false);
    const isWideScreen = useIsWideScreen();

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
            <img src={isWideScreen ? logoWithText : logo} alt="logo"
                 className={`justify-start w-auto ${isWideScreen ? "h-16" : "h-10"}`}/>
            <div className="hidden lg:flex flex-col justify-center">
                <div className="flex flex-row-reverse justify-end pr-8 justify-items-center">
                    <ExpandedNavbar/>
                </div>
            </div>
            <div className="ml-4 flex lg:hidden relative my-auto">
                {toggleMenu
                    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}
                                   className="cursor-pointer"/>
                    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}
                                   className="cursor-pointer"/>}
                {toggleMenu &&
                    <DropdownMenu setToggled={setToggleMenu} className={`${navbar.dropdownMenu} scale-up-center`}>
                        <FoldedNavbar toggle={setToggleMenu}/>
                    </DropdownMenu>}
            </div>
        </motion.nav>
    );
};

function ExpandedNavbar() {
    return (
        <div className="flex flex-row gap-8">
            {navbarLinks.map((link, index) => (
                <Link to={link.to} className="relative text-md" key={index}>
                    <div className={navbar.titleHover}>
                        {link.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

function FoldedNavbar({toggle}) {
    return (
        <button className="flex flex-col gap-8 text-xl">
            {navbarLinks.map(link => (
                <Link
                    to={link.to}
                    onClick={() => toggle(false)}
                    className="active:bg-gray-200 rounded text-center py-2 px-4 w-full"
                >
                    {link.title}
                </Link>
            ))}
        </button>
    );
}
