import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`
const CategoryLink = styled(Link)`
text-decoration: none;
&:hover{
  cursor: pointer;
  .menu-footer{
    animation: appearing 0.5s ease-in-out 0s 1 normal forwards;
  }
}
`
function HomeComponent() {
  return(
    
    <div>
    <div className="main-img">
      <div className="main-navbar">
        <div className="main-navbar-left">Ilian Bounaceur</div>
        <div className="main-navbar-right">
          <StyledLink to="/about">Ilian Bounaceur</StyledLink>
          <StyledLink to="/portfolio/1">TRAVAUX</StyledLink>
          <StyledLink to="https://www.instagram.com/ilian_art/?hl=fr"><i class="fa-brands fa-instagram"></i></StyledLink>
          <div>FR</div>
        </div>
      </div>
    </div>

    <div className="main-menu">

    <CategoryLink className="menu-1" to='/portfolio/3'>
      <div >
        <div className="menu-footer">
          <p >LOGOS</p>
        </div>
      </div>
      </CategoryLink>


      <CategoryLink className="menu-2" to='/portfolio/2'>
      <div >
        <div className="menu-footer">
          <p >SKETCHES</p>
        </div>
      </div>
      </CategoryLink>

      <CategoryLink className="menu-3" to='/portfolio/4'>
      <div >
        <div className="menu-footer">
          <p >DIGITAL ILLUSTRATION</p>
        </div>
      </div>
      </CategoryLink>
    </div>
  </div>
  )    

}

export default HomeComponent