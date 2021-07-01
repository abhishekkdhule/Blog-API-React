import axios from 'axios'
import React,{useEffect, useState,useContext} from 'react'
import  Cookies  from  'js-cookie';
import './auth.css'


const custAxios=axios.create({
    baseURL:"http://localhost:8000/",
    headers:{
        'X-CSRFToken':Cookies.get('csrftoken'),
    },
    withCredentials:true,
    credentials:true
})

function Signin() {
    // const isLoggedIn=useContext(logInContext)
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    // const history=useHistory()
    const [errors,setErrors]=useState(null)

    const Login=()=>{
        custAxios.post('login/',{"username":username,"password":password})   
        .then(response=>{
            console.log(response.data)
            window.location.reload()
            
        })
        .catch(error=>{
            console.log(error)
            setErrors("Invalid Credentials!")
        })
    }


    // useEffect(()=>{
    //     axios.post('http://127.0.0.1:8000/auth/login/',{"username":username,"password":password})   
    //     .then(response=>{
    //         console.log(response)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // })

    console.log(username,password)
    return (<>
        
        <div className="container">
        <div className="row mt-1 mb-4">
            
                <div className="rounded">
                    {
                        errors && <div class="alert alert-danger p-2 mt-2 text-center" role="alert">
                        {errors}
                        </div>
                    }
                    <h3 className="text-center">Sign in</h3>
                    
                    <label htmlFor="username" className="form-label m-0 mt-2">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e)=>setusername(e.target.value)} name="username"/>

                    <label htmlFor="password" className="form-label m-0 mt-2">Password</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"/>

                    <button className="btn btn-primary w-100 mt-3" onClick={Login}>Sign in</button>
                </div>
            </div>
        </div>
    
  
    </>
    )
}

export default Signin
