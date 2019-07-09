import React from 'react';
import logo from '../logo.png';

function Header(props) {
    return (
      <div >
        <header className="navbar navbar-light d-flex justify-content-sm-center" style={{background:'#ffffff'}} >
            <img src={logo} className="img-fluid" style={{width:'100px', height:'100px'}} alt="logo" />
            <h1 className="navbar-brand text-dark display-4" style={{fontSize:'2em'}} href="#">{props.titulo}</h1>
        </header>
      </div>
    );
  }

  export default Header;
