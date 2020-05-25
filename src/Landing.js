import React from 'react';
import './Landing.css'
import Login from './Login'


function Landing(props) {
    return (
      <div>
        < Login handleAppOpen={props.handleAppOpen}/>
        <ul className='slideshow'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    );
  }
  
  export default Landing;