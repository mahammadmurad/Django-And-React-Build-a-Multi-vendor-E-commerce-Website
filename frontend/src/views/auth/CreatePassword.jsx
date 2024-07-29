import { useState } from "react"
import React from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import apiIsntance from "../../utils/axios"

function CreatePassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const otp = searchParams.get("otp")
    const uidb64 = searchParams.get("uidb64")

    const handlePasswordSubmit = async (e) => {
        e.preventDefault()
        if(password!== confirmPassword){
            alert("Passwords do not match!")
        }else{
            const formdata = new FormData()
            formdata.append('password', password)
            formdata.append('otp',otp)
            formdata.append('uidb64',uidb64)

            try {
                await apiIsntance.post('user/password-change', formdata).then((res)=>{
                    console.log(res.data);
                    alert("Password changed successfully");
                    navigate('/login')
                })

            } catch (error) {
                alert('An error occurred while submitting to change password')
            }
        }

    }
    return (
        <div>
            <h1>Create New Password</h1>
            <form >
                <input type="password"
                name=''
                id=''
                placeholder='Enter New Password'
                onChange={(e) => setPassword(e.target.value) } />
                <br /> <br />
                <input type="password"
                name=''
                id=''
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value) } />
                <br />
                <button type='submit'> Save Password</button>
            </form>
        </div>
    ) 
}

export default CreatePassword