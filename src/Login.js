import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Header from "./Header"
function Login() {
    const [{},dispatch]=useStateValue();

    const signIn=()=>{
      auth
          .signInWithPopup(provider)
          .then((result)=>{
            dispatch({
              type:actionTypes.SET_USER,
              user:result.user,
            })
          })
          .catch((error)=>alert(error.message));
    };

  return (
    <div className='login'>
        <Header/>
        <div className="login__container">
        <img className="login__logo"
            src="https://i.ibb.co/J3pkqQj/bitsathy-chat.png" alt=""/>
    <div className="login__text">
        <p>Welcome to Bitsathy Chat!</p>
    </div>
    <Button onClick={signIn}>
        Login with Google
    </Button>
    </div>
    </div>
  );
}

export default Login