import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import styled from 'styled-components'
import LoginControl from "./LoginControl";

export default function Header() {
  return (
    <div className='HeaderBox'>
        <Link to ="" style={{ paddingLeft: "100px"}}>
          <img
		        style={{ width: "154px", height: "20px" }}
		        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		        alt="로고"/>
        </Link>  
        <Link to="/Movies" style={{ textDecoration: "none", color: "white", paddingLeft: "30px"}}>영화</Link>
        <Link to="/TV" style={{ textDecoration: "none", color: "white", paddingLeft: "30px"}}>TV프로그램</Link>
        <Link to="Celebrity" style={{ textDecoration: "none", color: "white", paddingLeft: "30px"}}>인물</Link>
        <LoginControl/>
    </div>
  )
}