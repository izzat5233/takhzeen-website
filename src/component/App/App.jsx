import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Owner from '../Owner/Owner';
import Service from '../Service/Service';
import NotFound from '../Misc/NotFound/NotFound';
import Search from '../Search/Search';
import Management from '../Management/Management';
import {Routes, Route} from 'react-router-dom';
import Contact from "../Contact/Contact";

function App() {
    return (
        <>

            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='service' element={<Service/>}/>
                <Route path='owner' element={<Owner/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='management/*' element={<Management/>}/>


                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
