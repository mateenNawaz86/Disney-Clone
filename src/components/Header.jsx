import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { userActions } from "../features/user/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = Navigate();
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userPhoto = useSelector((state) => state.user.photo);

  const authHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // function for getting User-Detail
  const setUser = (user) => {
    dispatch(
      userActions.setUserLoginDetail({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={authHandler}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="Home" />
              <span>Home</span>
            </a>
            <a href="/home">
              <img src="./images/search-icon.svg" alt="Search" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="./images/watchlist-icon.svg" alt="Watch" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="./images/original-icon.svg" alt="Orignals" />
              <span>ORIGNALS</span>
            </a>
            <a href="/home">
              <img src="./images/movie-icon.svg" alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="./images/series-icon.svg" alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} alt="User-Photo" />
        </>
      )}
    </Nav>
  );
};

// Nav is responsible for whole header area
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
  letter-spacing: 16px;
`;

// Logo styled component
const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  padding: 0;

  img {
    display: block;
    width: 100%;
  }
`;

// NavMenu styled Component
const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-left: 25px;
  margin-right: auto;
  height: 100%;
  flex-flow: row nowrap;
  position: relative;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      padding: 2px 0;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        position: absolute;
        bottom: -6px;
        height: 2px;
        width: auto;
        right: 0px;
        left: 0px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Login styled Component
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 8px 16px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }

  @media (max-width: 450px) {
    padding: 5px 10px;
  }
`;

// UserImg styled component
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export default Header;
