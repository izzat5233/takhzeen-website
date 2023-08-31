import React, {useState} from "react";
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import Focusable from "../../utils/effect/Focusable";
import navbar from "./Navbar.module.css";
import {navbarLinks} from "./navbarLinks";
import {Link} from "react-router-dom";

export default function DropdownNavbar() {
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