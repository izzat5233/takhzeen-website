import React, {useEffect, useState} from 'react'
import logo from '../../../assets/icons/normal/logo.png';
import logoWithText from '../../../assets/icons/normal/logoWithText.png';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import onClickOutsideHOC from "react-onclickoutside";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const {scrollY} = useScroll();
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024); // lg

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setHidden(latest > prevScrollY);
        setPrevScrollY(latest);
    });

    return (
        <motion.nav
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: -25}
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ease: [0.1, 0.25, 0.3, 1], duration: 0.6}}
            className="
                bg-transparent z-20 flex lg:flex-row-reverse lg:justify-start
                fixed top-0 left-0 right-0
                justify-between justify-items-center
                py-4 px-4 md:px-8
            "
        >
            <img src={isWideScreen ? logoWithText : logo} alt="logo"
                 className={`justify-start w-auto ${isWideScreen ? "h-16" : "h-10"}`}/>
            <div className="hidden lg:flex flex-col justify-center">
                <div className="
                    flex flex-row-reverse justify-end
                    pr-8 justify-items-center
                ">
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
                    <DropdownMenu toggle={setToggleMenu}>
                        <FoldedNavbar toggle={setToggleMenu}/>
                    </DropdownMenu>}
            </div>
        </motion.nav>
    );
};

const navbarLinks = [
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

function ExpandedNavbar() {
    return (
        <div className="flex flex-row-reverse gap-8">
            {navbarLinks.map((link, index) => (
                <Link to={link.to} className="relative text-md" key={index}>
                    <div className="
                        before:content-{}
                        before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5
                        before:bg-strong before:text-back
                        before:scale-x-0 before:origin-left before:transition before:duration-200 before:ease-out
                        hover:before:scale-x-100
                    ">
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
