import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'

function Header() {
    let auth = getAuth()
    let{furnitures,user} = useSelector((state)=>state.realestateReducer)
  return (
    <Container>
        <Link to={`/`}>
        <img src='/Images/logo.png'/>
        </Link>
         <NavLinks>
             <li><a href=''>Home</a></li>
             <li><a href=''>Blog</a></li>
             <li><a href=''>Contact</a></li>
         </NavLinks>
         <Links>
           <h2>Hello {user.email}</h2>
           <button onClick={()=>auth.signOut()}>LOGOUT</button>
           <Link to={`/checkout`}><FontAwesomeIcon icon={faShoppingCart} className='Basket'/>
           <span>{furnitures.length?furnitures.length:'?'}</span></Link>
         </Links>
    </Container>
  )
}

export default Header
let Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 0;
  box-shadow:3px 3px 9px #333;
  z-index:50;
  background-color:#fff;
  img{
      margin: 0 10px;
  }
  top:0;
  left:0;
  position:fixed;
  width:100%;
`
let NavLinks =styled.div`
  display:flex;
  li{
      list-style:none;
      position:relative;
      padding:8px 12px;
      a{
          font-size:20px;
          color:black;
          text-decoration:none;
      }
      ::after{
          content:'';
          width:0;
          height:2px;
          background-color:#000;
          display:block;
          margin:auto;
          transition:0.5s;
          cursor:pointer;
      }
      :hover::after{
          width:100%;
      }
  }
`
let Links = styled.div`
 display:flex;
 align-items:center;
 h2{
     font-weight:500;
 }
 margin: 0 20px;
 button{
     background:transparent;
     border:none;
     outline:none;
     cursor:pointer;
     padding: 9px 30px;
     font-weight:400;
     font-size:20px;
 }
 .Basket{
     top:10px;
     position:relative;
     font-size:23px;
 }
 span{
     background-color:#000;
     color:#fff;
     display:block;
     padding:4px 7px;
     border-radius:50%;
     bottom:30px;
     right:-20px;
     position:relative;
 }
`