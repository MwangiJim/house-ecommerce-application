import React from 'react'
import styled from 'styled-components'
import {getAuth,createUserWithEmailAndPassword,SignInWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { db } from '../firebase'

function UserDetails() {
    let auth = getAuth()
    let[Form,setForm] = React.useState({
        email:'',
        password:'',
        checked:false
    })
    const HandleInput=(event)=>{
        let{type,checked,value,name} = event.target
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    let[RegForm,setRegForm] = React.useState({
        username:'',
        email:'',
        password:'',
        checked:false
    })
    const HandleRegInput=(event)=>{
        let{type,checked,value,name} = event.target
        setRegForm((prevstate)=>{
            return{
                ...prevstate,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    const HandleForm=(e)=>{
        e.preventDefault()
        if(Form.email,Form.password){
            signInWithEmailAndPassword(auth,Form.email,Form.password)
            .catch((error)=>{
                alert(error.message)
            })
        }
    }
    const HandleRegForm = (e)=>{
        e.preventDefault()
        if(RegForm.username,RegForm.email,RegForm.password){
            console.log(RegForm)
            createUserWithEmailAndPassword(auth,RegForm.email,RegForm.password)
            .then((AuthUser)=>{
                return AuthUser.user.updateProfile({
                    displayName:RegForm.username
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
    }
    let styles ={
        display:Form.checked === true?'block':'none'
    }
    let twostyles ={
        display:RegForm.checked?'block':'none'
    }
  return (
    <Container>
        <LoginPad>
            <h2>Login</h2>
            <hr/>
            <button>Sign In With Google</button>
            <button>
                <img src='/Images/facebook.png'/>
                Sign In With Facebook
            </button>
          <form onSubmit={HandleForm}>
          <label>Email</label>
            <br/>
            <input
             type='email'
             placeholder='Enter Email'
             onChange={HandleInput}
             name='email'
             value={Form.email}
             className='input'
            />
            <br/>
            <p>We'll never Share your Email-Address with anyone</p>
            <br/>
            <label>Password</label>
            <br/>
            <input
             type='password'
             placeholder='Enter Password'
             onChange={HandleInput}
             name='password'
             value={Form.password}
             className='input'
            />
            <br/>
            <input
             type='checkbox'
             onChange={HandleInput}
             name='checked'
             value={Form.checked}
            />
            <label>I Agree with the Terms and Conditions set By Property Limited</label>
            <br/>
            <button style={styles}>Login</button>
          </form>
        </LoginPad>
        <RegistrationPad>
              <h2>Register</h2>
              <hr/>
              <button>Sign In With Google</button>
              <button>
                <img src='/Images/facebook.png'/>
                Sign In With Facebook
              </button>
              <form onSubmit={HandleRegForm}>
              <label>Username</label>
              <br/>
              <input
               type='text'
               placeholder="Enter Username"
               value={RegForm.username}
               name='username'
               className='input'
               onChange={HandleRegInput}
              />
              <br/>
              <label>Email</label>
              <br/>
              <input
               type='email'
               placeholder='Enter Email'
               value={RegForm.email}
               name='email'
               onChange={HandleRegInput}
               className='input'
              />
              <br/>
              <label>We'll never Share Your E-mail Address with Anyone</label>
              <br/>
              <label>Password</label>
              <br/>
              <input
               type='password'
               placeholder="Enter Password"
               value={RegForm.password}
               name='password'
               onChange={HandleRegInput}
               className='input'
              />
              <br/>
              <input
               type='checkbox'
               onChange={HandleRegInput}
               name="checked"
               value={RegForm.checked}
              />
               <label>I Agree with the Terms and Conditions set By Property Limited</label>
              <br/>
              <button style={twostyles}>Create Account</button>
              </form>
        </RegistrationPad>
    </Container>
  )
}

export default UserDetails
let Container = styled.div`
 width:100%;
 height:100vh;
 background-color:rgba(77,76,76,0.3);
 backdrop-filter:blur(10px);
 -webkit-backdrop-filter:blur(10px);
 z-index:100;
 top:0;
 left:0;
 position:fixed;
 display:flex;
 justify-content:space-between;
 align-items:center;
`
let LoginPad = styled.div`
  height:450px;
  width:400px;
  background-color:#fff;
  border-radius:5px;
  margin: 0 5%;
  padding:20px 12px;
  h2{
      margin:5px 7px;
  }
  hr{
      width:100%;
  }
  button{
      width:100%;
      height:43px;
      border-radius:5px;
      color:#fff;
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#000;
      img{
          filter:invert(1);
          height:14px;
          width:12px;
      }
      border:none;
      outline:none;
      margin:10px 0;
  }
  label{
      text-align:left;
  }
  .input{
      width:90%;
      height:42px;
      padding:0 15px;
      border-radius:5px;
      border:2px solid #000;
      margin:6px 0;
  }
`
let RegistrationPad = styled.div`
  height:550px;
  padding:20px 12px;
  margin: 0 5%;
  width:500px;
  background-color:#fff;
  border-radius:5px;
  h2{
    margin:5px 7px;
}
hr{
    width:100%;
}
button{
    width:100%;
    height:43px;
    border-radius:5px;
    color:#fff;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#000;
    img{
        filter:invert(1);
        height:14px;
        width:12px;
    }
    border:none;
    outline:none;
    margin:20px 0;
}
label{
    text-align:left;
}
.input{
    width:92%;
    border-radius:5px;
    height:42px;
    padding:0 15px;
    border:2px solid #000;
    margin:10px 0;
}
`