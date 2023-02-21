import React from 'react';
import darkImg from './static/images/icon-moon.svg'; 
import lightImg from './static/images/icon-sun.svg'; 

const Header = () => {
    const changeTheme = ()=>{
        const app = document.getElementById("app")
        app.classList.toggle("dark")
    }
  return (
      <div className="header padding-container">

          <div className="wrapper">
          <h1 class="fw-700">TODO</h1>
            <div onClick={changeTheme} class="theme-icon pointer">
              <img id="light-toggle" src={darkImg} alt=""/>
              <img id="dark-toggle" src={lightImg} alt=""/>

            </div>

          </div>

      </div>

  )
}

export default Header;
