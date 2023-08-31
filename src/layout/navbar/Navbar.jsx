import React, {useState} from 'react'
import logo from '../../assets/icons/normal/logo.png';
import logoWithText from '../../assets/icons/normal/logoWithText.png';
import {Link} from 'react-router-dom';
import useIsWideScreen from "../../utils/hook/Screen";
import navbar from "./Navbar.module.css";
import {navbarLinks} from "./navbarLinks";
import DropdownNavbar from "./DropdownNavbar";
import NavbarContainer from "./NavbarContainer";

export default function Navbar() {
    return (
        <NavbarContainer className={navbar.defaultNavbar}>
            <NavbarLogo/>
            <div className="hidden lg:justifying">
                <ExpandedNavbar/>
            </div>
            <div className="lg:hidden justifying">
                <DropdownNavbar/>
            </div>
        </NavbarContainer>
    );
};

export function NavbarLogo() {
    const isWideScreen = useIsWideScreen();

    return (
        <img
            src={isWideScreen ? logoWithText : logo}
            alt="logo"
            className="justify-start w-auto h-10 lg:h-16"
        />
    );
}

export function ExpandedNavbar() {
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
