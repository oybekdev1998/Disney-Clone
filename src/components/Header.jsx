import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="Logo" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="./images/home-icon.svg" alt="Home" />
          <span>home</span>
        </a>
        <a href="/search">
          <img src="./images/search-icon.svg" alt="Search" />
          <span>search</span>
        </a>
        <a href="/watchlist">
          <img src="./images/watchlist-icon.svg" alt="Watchlist" />
          <span>watchlist</span>
        </a>
        <a href="/originals">
          <img src="./images/original-icon.svg" alt="Originals" />
          <span>originals</span>
        </a>
        <a href="/movies">
          <img src="./images/movie-icon.svg" alt="Movies" />
          <span>movies</span>
        </a>
        <a href="/series">
          <img src="./images/series-icon.svg" alt="Series" />
          <span>series</span>
        </a>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100%;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.a`
  padding: 0;
  max-width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
 
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin-right: auto;
  margin-left: 25px;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
      margin-right: 3px;
    }
  
    span {
      text-transform: uppercase;
      color rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
    
      &:before {
        content: '';
        bottom: -6px;
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
        visability: hidden;
        wight: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visability: visible;
        opacity: 1;
      }
    }
    
  }


  
  
  
  
  @media (max-width: 768px){
    display: none;
  }
`;

export default Header