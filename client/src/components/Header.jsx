import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginControl from "./LoginControl";

const Header = () => {
    return (
        <div className="header">
            <Link to="/home">
            <img
		        style={{ width: "154px", height: "20px" }} 
		        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		        alt="로고"
            />
            </Link>
            <div className="header_link">
            <Link to="/movies"><div className="white_font">영화</div></Link>
            <Link to="/tv"><div className="white_font">TV 프로그램</div></Link>
            <Link to="/celebrity"><div className="white_font">인물</div></Link>
            </div>
            <LoginControl/>
        </div>
    )
}

export default Header