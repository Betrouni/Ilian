import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Header() {
  return (
   <div>
    <div className="gallery-navbar">
        <div className="main-navbar">
          <div
            className="main-navbar-left"
          >
            <StyledLink to="/">Ilian Bounaceur</StyledLink>
          </div>
          <div className="main-navbar-right">
            
              <StyledLink to="/about">À PROPOS</StyledLink>
            
         <StyledLink to="/portfolio/1">TRAVAUX</StyledLink>
            <StyledLink to="https://www.instagram.com/ilian_art/?hl=fr"><i class="fa-brands fa-instagram"></i></StyledLink>
            <div>FR</div>
          </div>
        </div>
      </div>
      </div>
  )
}

