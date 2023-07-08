import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Owner from '../Owner/Owner';
import Service from '../Service/Service';
import NotFound from '../NotFound/NotFound';
import Search from '../Search/Search';
import Management from '../Management/Management';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

     <Navbar />
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='Home' element={<Home />} />
     <Route path='About' element={<About />}/>
     <Route path='Login' element={<Login />}/>
     <Route path='Service' element={<Service />}/>
     <Route path='Owner' element={<Owner />}/>
     <Route path='Search' element={<Search />}/>
     <Route path='Management' element={<Management />}/>

     
     <Route path='*' element={<NotFound />}/>
     </Routes>
     <Footer />
    </>
  );
}

export default App;
