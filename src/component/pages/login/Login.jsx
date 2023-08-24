import React, { useState } from "react";
import './login.css';
import { useNavigate, Link } from 'react-router-dom';

import { IoPersonCircle , IoKey  } from "react-icons/io5";
import login from '../../../assets/designs/about.png'
const Login = () => {

    const [email,setEmail]=useState(''  )
    const [password,setPassword]=useState('')

    async function handleSubmit(e){
        e.preventDefault();
        // Perform any necessary login/authentication logic here
       
    }
    return (
            <div className="box">
                <img src={login}></img>
                <div className="container">
                    <form onChange={handleSubmit}>
                    <div className="top">
                        <header>تـسـجـيـل الـدخـول</header>
                    </div>
                    <div className="input-field">
                        <input type="email" 
                        className="input" 
                        placeholder="ايميل المستخدم" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <IoPersonCircle className="login-icon"/>
                    </div>
                    <div className="input-field">
                        <input type="Password" 
                        className="input" 
                        placeholder="كلمة المرور" 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <IoKey  className="login-icon" />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="submit" defaultValue="تسجيل الدخول" id ><Link to="/dashboard">دخــول</Link></button>

                    </div>

                    </form>
                </div>
                <div className="space"></div>
            </div>
    );
}

export default Login
