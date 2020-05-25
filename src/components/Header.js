import React from 'react';
import './Header.css';


//use semantic tags

function Header(props){
    return(
        <header className='header-container'>
            <div className='header-title'>The Green Gallery</div>
        
            <button className='logout-btn'
            onClick={() =>{props.handleAppClose()}}
            >Logout</button>
        </header>
    )
}

export default Header;