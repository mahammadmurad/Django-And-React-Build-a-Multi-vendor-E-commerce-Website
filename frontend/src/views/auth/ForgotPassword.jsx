import React from 'react';
import { useState } from 'react';
import apiIsntance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            await apiIsntance.get("user/password-reset/${email}/").then((res) => {
            alert('An Email Has been sent to you');
        })
    } catch(error){
        alert('Email does not exist');
    }
    }

    return (
        <div>
            <h1>ForgotPassword</h1>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='Enter Email'
            name=''
            id=''/>
            <br /> <br />
            <button onClick={handleSubmit} type="submit">Reset Password</button>
        </div>
    )
}

export default ForgotPassword;