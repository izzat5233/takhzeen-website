import React, { Component, useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { IoPersonCircle , IoKey  } from "react-icons/io5";

const Login = () => {
   

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit(e){
        e.preventDefault();
        handleSubmit();
    }
    return (
            <div className="box">
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
                        <button type="submit" className="submit" defaultValue="تسجيل الدخول" id >دخــول
                        </button>
                    </div>
                            
                       
                    <div className="one-col">
                        <div className="two">
                            <label><Link to="#">نسيت كلمة المرور ؟</Link></label>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
    );
}

export default Login
