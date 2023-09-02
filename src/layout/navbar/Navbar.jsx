import React from 'react'
import logo from '../../assets/icons/normal/logo.png';
import logoWithText from '../../assets/icons/normal/logoWithText.png';
import useIsWideScreen from "../../utils/hook/Screen";
import navbar from "./Navbar.module.css";
import DropdownNavbar from "./component/DropdownNavbar";
import NavbarContainer from "./component/NavbarContainer";
import {ExpandedNavbar} from "./component/ExpandedNavbar";

export default function Navbar() {
    const isWideScreen = useIsWideScreen();

    return (
        <NavbarContainer className={navbar.defaultNavbar}>
            <img
                src={isWideScreen ? logoWithText : logo}
                alt="Takhzeen"
                className="justify-start w-auto h-10 lg:h-16"
            />
            <div className="hidden lg:justifying">
                <ExpandedNavbar/>
            </div>
            <div className="lg:hidden justifying">
                <DropdownNavbar/>
            </div>
        </NavbarContainer>
    );
};

export const navbarLinks = [
    {
        title: "الرئيسية",
        to: "/home"
    },
    {
        title: "عن تخزين",
        to: "/about"
    },
    {
        title: "تواصل معنا",
        to: "/contact"
    },
];