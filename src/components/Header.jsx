import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../features/user/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);
  const navigate = useNavigate();

  // useEffect responsible for redirection
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  // function responsible for signIn & signOut functionality
  const authHandler = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.result);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(userActions.setSignOut());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
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
        <img src="/images/logo.svg" alt="Disney+" />
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
          <SignOut>
            <UserImg src={userPhoto} alt="User-Photo" />
            <DropDown>
              <span onClick={authHandler}>Sign Out</span>
            </DropDown>
          </SignOut>
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

// UserImg styled-component
const UserImg = styled.img`
  height: 100%;
`;

// DropDown styled-component
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  letter-spacing: 2px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  box-shadow: rgba(0 0 0 / 50%) 0px 0px 16px 0px;
  border-radius: 4px;
  padding: 7px 10px;
  cursor: pointer;
  font-size: 14px;
  width: 100px;
  opacity: 0;
`;

// SignOut styled-component
const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
