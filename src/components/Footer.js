import React from 'react';
import './Footer.css';
import {RiCopyrightLine} from 'react-icons/ri'

//use semantic tags
function Footer(){
    return (
        <footer className='footer-container'>
           <div className='copyright-footer'> 
          <span className='copy-icon'><RiCopyrightLine /> </span> 
           2020 Caitlin Ciaramella </div>
        </footer>
    )
}

export default Footer;