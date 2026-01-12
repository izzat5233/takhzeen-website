import {Link} from "react-router-dom";
import navbar from "../Navbar.module.css";
import React from "react";
import { useTranslation } from 'react-i18next';
import { getNavbarLinks } from "../Navbar";

export function ExpandedNavbar() {
    const { t } = useTranslation();
    const navbarLinks = getNavbarLinks(t);
    
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