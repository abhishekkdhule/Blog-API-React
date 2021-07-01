import { useContext,useState } from 'react';
import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Articles from './Articles/Articles';

export const sessionContext=React.createContext()

function App() {
  const [isLoggedIn,setisLoggedIn]=useState(false)
  return (
    <>
    <sessionContext.Provider value={{isLog:isLoggedIn,setLog:setisLoggedIn}}>
    <Nav/>
    <Articles/>
    </sessionContext.Provider>
    </>
  );
}

export default App;
