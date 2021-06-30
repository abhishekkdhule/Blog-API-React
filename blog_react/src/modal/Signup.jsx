import React, { useState } from 'react'
import './auth.css'
function Signup() {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');

    console.log(username,email,password,confPassword)
    return (
        <div className="container">
        <div className="row mt-1">
                <div className=" rounded m-1 p-1 ">
                <h3 className="text-center">Sign up</h3>
                <label for="username" className="form-label m-0 mt-2">Username</label>
                <input type="text" id="username" className="form-control" onChange={(e)=>setUsername(e.target.value)}  name="name" value={username}/>

                <label for="email" className="form-label m-0 mt-2">Email</label>
                <input type="email" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} name="email" value={email}/>

                <label for="password" className="form-label m-0 mt-2">Password</label>
                <input type="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}  name="password" value={password}/>

                <label for="confirmpassword" className="form-label m-0 mt-2">Confirm Password</label>
                <input type="password" id="confirmpassword" className="form-control" onChange={(e)=>setConfPassword(e.target.value)} name="confirmpassword" value={confPassword}/>

                <button className="btn btn-primary w-100 mt-3">Sign up</button>
                
                </div>
            </div>
        </div>
    
    )
}

export default Signup
