import React from 'react'
import logo from '../../assets/icons/normal/logo.png';
import logoWithText from '../../assets/icons/normal/logoWithText.png';
import useIsWideScreen from "../../utils/hook/Screen";
import navbar from "./Navbar.module.css";
import DropdownNavbar from "./component/DropdownNavbar";
import NavbarContainer from "./component/NavbarContainer";
import {ExpandedNavbar} from "./component/ExpandedNavbar";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const isWideScreen = useIsWideScreen();
    const { t } = useTranslation();

    return (
        <NavbarContainer className={navbar.defaultNavbar}>
            <img
                src={isWideScreen ? logoWithText : logo}
                alt="Takhzeen"
                className="justify-start w-auto h-10 lg:h-16"
            />
            <div className="hidden lg:flex lg:items-center lg:gap-8">
                <ExpandedNavbar/>
                <LanguageSwitcher/>
            </div>
            <div className="lg:hidden flex items-center gap-4">
                <LanguageSwitcher/>
                <DropdownNavbar/>
            </div>
        </NavbarContainer>
    );
};

export const getNavbarLinks = (t) => [
    {
        title: t('navbar.home'),
        to: "/home"
    },
    {
        title: t('navbar.about'),
        to: "/about"
    },
    {
        title: t('navbar.contact'),
        to: "/contact"
    },
];

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