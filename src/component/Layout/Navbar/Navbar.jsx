import React, {useState} from 'react'
import logo from '../../../assets/logo.png';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <navbar className="
            bg-back z-50 flex
            fixed top-0 left-0 right-0
            justify-between justify-items-center
            md:py-4 md:px-12
            sm:py-2 sm:px-8
            py-0 px-12
        ">
            <div className="
                flex flex-1 justify-start
                justify-items-center
            ">
                <div className="mr-8 pl-12">
                    <img src={logo} alt="logo" className="w-20 h-12"/>
                </div>
            </div>
            <div className="
                hidden lg:flex flex-row-reverse justify-end
                pr-8 justify-items-center
            ">
                <NavbarSignLinks/>
            </div>
            <div className="
                ml-4 flex lg:hidden relative my-auto
            ">
                {toggleMenu
                    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}
                                   className="cursor-pointer"/>
                    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}
                                   className="cursor-pointer"/>}
                {toggleMenu && (
                    <div className="
                        scale-up-center absolute right-0
                        flex flex-col justify-end
                        justify-items-end text-end
                        bg-gradient-primary rounded
                        p-8 top-5 sm:top-10 mt-4 min-w-210
                        shadow-md shadow-gray-950
                      ">
                        <NavbarSignLinks/>
                    </div>
                )}
            </div>
        </navbar>
    );
};

function NavbarSignLinks() {
    return (
        <>
            <NavbarSignLink
                title="الرئيسية"
                to="home"
            />
            <NavbarSignLink
                title="عن تخزين"
                to="about"
            />
            <NavbarSignLink
                title="تواصل معنا"
                to="contact"
            />
            <NavbarSignLink
                title="تسجيل الدخول"
                to="login"
            />
        </>
    )
}

function NavbarSignLink({title, to}) {
    return (
        <p className="
            relative mx-4 cursor-pointer
            text-fore leading-6 capitalize
        ">
            <Link to={to} className="
                before:content-{}
                before:absolute before:-bottom-0 before:left-0 before:w-full before:h-0.5
                before:bg-strong before:text-back
                before:scale-x-0 before:origin-left before:transition before:duration-200 before:ease-out
                hover:before:scale-x-100
            ">
                {title}
            </Link>
        </p>
    );
}