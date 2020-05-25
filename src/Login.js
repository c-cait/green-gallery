import React from 'react';
import './Login.css';
import {GiLindenLeaf} from 'react-icons/gi';

function Login(props) {
    return (
      <div className="login-container">
       <div className='login-section'>
           <div className='login-title'>
               Sprout<GiLindenLeaf className='logo-leaf-icon-login'/>
           </div>
           <form className='login-form'>
               <input type='text' className='login-input' placeholder='username'></input>
               <input type='password' className='login-input' placeholder='password'></input>
               <button className='login-btn'
                onClick={() => {props.handleAppOpen()}}
               >Login</button>
           </form>
           <div className='sign-up-div'>
               Don't have an account? 
                <a href='#' className='sign-up-btn'>Sign Up</a>
           </div>
       </div>
      </div>
    );
  }
  
  export default Login;
  