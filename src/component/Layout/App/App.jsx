import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';
import Footer from '../Footer/Footer';
import Owner from '../../Pages/Owner/Owner';
import NotFound from '../../Pages/Misc/NotFound/NotFound';
import Find from '../../Pages/Find/Find';
import Management from '../../Pages/Management/Management';
import {Routes, Route, useLocation} from 'react-router-dom';
import Contact from "../../Pages/Contact/Contact";
import {AnimatePresence} from "framer-motion";
import ComingSoon from "../../Pages/Misc/ComingSoon/ComingSoon";
import Search from "../../Pages/Search/Search";
import ScrollToTobButton from "../../Util/Button/ScrollButton";

function App() {
    const location = useLocation();

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
