import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
}
from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import UserDetails from './components/UserDetails';
import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

function App() {
  let[user,setUser] = React.useState(null)
  let auth = getAuth()
  let dispatch = useDispatch()
  React.useEffect(()=>{
    onAuthStateChanged(auth,(AuthUser)=>{
      if(AuthUser){
        setUser(AuthUser)
        console.log('You are logged in!!')
        console.log(AuthUser)
        dispatch({
          type:'SETUSEREMAIL',
          payload:AuthUser
        })
      }
      else{
        setUser(null)
        console.log('You are logged out!!!')
      }
    })
  },[user])
  return (
    <div className="App">
     <BrowserRouter>
       <Header/>  
     {user? <Routes>
        <Route path = '/checkout' element={<Checkout/>}></Route>
        <Route path='/productview' element={<ProductDetail/>}></Route>
       <Route path = '/' element={ <Home/>}></Route>
      </Routes>:<UserDetails/>}
     </BrowserRouter>
    </div>
  );
}

export default App;
