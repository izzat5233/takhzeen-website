import {Link} from "react-router-dom";
import navbar from "../Navbar.module.css";
import React from "react";
import {navbarLinks} from "../Navbar";

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