import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';
import Footer from '../Footer/Footer';
import Owner from '../../Pages/Owner/Owner';
import Service from '../../Pages/Service/Service';
import NotFound from '../../Pages/Misc/NotFound/NotFound';
import Find from '../../Pages/Find/Find';
import Management from '../../Pages/Management/Management';
import {Routes, Route} from 'react-router-dom';
import Contact from "../../Pages/Contact/Contact";

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
                <Route path='find/*' element={<Find/>}/>
                <Route path='management/*' element={<Management/>}/>


                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
