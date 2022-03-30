import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectUserPhoto, selectUserName, setUserLoginDetails, setSignOutState } from '../redux/features/userSlice'
import { Link } from 'react-router-dom'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => alert(error.message));
    } else if(userName){
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      }).catch((err) => alert(err.message))
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Nav>
      <Logo>
        <Link to={"/"}>
          <img src="./images/logo.svg" alt="Logo" />
        </Link>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to={"/home"}>
              <img src="./images/home-icon.svg" alt="Home" />
              <span>home</span>
            </Link>
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
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
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

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: rgb(19, 19, 19);
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  width: 100px;
  opacity: 0;
  cursor: pointer;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    ${ DropDown }{
      opacity: 1;
      transition-duration: 1s;
    }
  }

  
`


const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 8px 16px;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: 1px solid transparent;
  }
`

export default Header