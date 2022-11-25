import React from 'react'
import "./Header.css"
import { InfoOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__main">
        <div>
            <a href="/">
                <div className="home__nav">
                    <img src="https://i.ibb.co/J3pkqQj/bitsathy-chat.png" alt="home"/>
                    <p>Bitsathy Chat!</p>
                </div>
            </a>        
        </div>
        <div className="about__nav">
        <InfoOutlined/>
            <a href="/about">
                <div className="about__nav">About</div>
            </a>
        </div>
    </div>
  )
}

export default Header;