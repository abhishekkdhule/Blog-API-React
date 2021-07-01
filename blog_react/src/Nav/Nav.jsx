import React,{useState,useContext} from 'react'
import CustomModal from '../modal/CustomModal'
import axios from "axios";
import  Cookies  from  'js-cookie';
import { sessionContext } from '../App';
import './nav.css'


const custAxios=axios.create({
  baseURL:"http://localhost:8000/",
  headers:{
      'X-CSRFToken':Cookies.get('csrftoken'),
  },
  withCredentials:true,
  credentials:true
})

function Nav() {
    const sessionC=useContext(sessionContext)
    const logout=()=>{
        custAxios.get('logout/')
        .then(()=>{
          sessionC.setLog(false)
        })
    }
    return (
      

        <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor:'rgb(228, 228, 244)'}}>
        <div className="container-fluid">
        {
          sessionC.isLog ? 
          <a className="navbar-brand" href="#">Hello {sessionC.user}!</a>
          :
          <a className="navbar-brand" href="#">Hello !</a>
        }
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                { sessionC.isLog ?
                <>
                <li className="nav-item">
                  <a className="nav-link navtext" href="#"><CustomModal heading="Add Article" type="AA"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navtext" href="#" onClick={()=>logout()}>Logout</a>
                </li>
                  </>
                  : 
                  <>
                  <li className="nav-item">
                    <a className="nav-link navtext" href="#"><CustomModal heading="SignUp" type="SU"/></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navtext" href="#"><CustomModal heading="SignIn" type="SI" /></a>
                  </li>
                  </>
                }
            </ul>
          </div>
        </div>
      </nav>
      
    )
}

export default Nav
