import Navbar from '../navbar/Navbar';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Footer from '../footer/Footer';
import Owner from '../../pages/owner/Owner';
import NotFound from '../../pages/misc/NotFound';
import Find from '../../pages/find/Find';
import Management from '../../pages/management/Management';
import {Route, Routes, useLocation} from 'react-router-dom';
import Contact from "../../pages/contact/Contact";
import {AnimatePresence} from "framer-motion";
import ComingSoon from "../../pages/misc/ComingSoon";
import Search from "../../pages/search/Search";
import React, {useEffect} from "react";
import ScrollToTobButton from "./component/ScrollButton";
import withScrollBar from "./component/ScrollBar";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navbar/>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={withScrollBar(<Home/>)}/>
                    <Route path='home' element={withScrollBar(<Home/>)}/>
                    <Route path='about' element={withScrollBar(<About/>)}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='owner' element={<Owner/>}/>
                    <Route path='find/*' element={<Find/>}/>
                    <Route path='search' element={<Search/>}/>
                    <Route path='management' element={<Management/>}/>
                    <Route path='comingsoon' element={<ComingSoon/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </AnimatePresence>
            <ScrollToTobButton/>
            <Footer/>
        </>
    );
}
