import './App.css';
import Navbar from '../navbar/Navbar';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Login from '../../pages/login/Login';
import Footer from '../footer/Footer';
import Owner from '../../pages/owner/Owner';
import NotFound from '../../pages/misc/NotFound';
import Find from '../../pages/find/Find';
import Management from '../../pages/management/Management';
import {Routes, Route, useLocation} from 'react-router-dom';
import Contact from "../../pages/contact/Contact";
import {AnimatePresence} from "framer-motion";
import ComingSoon from "../../pages/misc/ComingSoon";
import Search from "../../pages/search/Search";
import ScrollToTobButton from "../../utils/button/ScrollButton";
import {useEffect} from "react";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navbar/>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='login' element={<Login/>}/>
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

export default App;
