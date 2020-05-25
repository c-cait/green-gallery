import React from 'react';
import './Header.css';
import {GiLindenLeaf} from 'react-icons/gi';


//use semantic tags

function Header(props){
    return(
        <header className='header-container'>
            <div className='header-title'>Sprout<GiLindenLeaf className='logo-leaf-icon-header'/></div>
        
            <button className='logout-btn'
            onClick={() =>{props.handleAppClose()}}
            >Logout</button>
        </header>
    )
}

export default Header;