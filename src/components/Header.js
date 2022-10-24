import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {
    selectUserName,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithPopup } from 'firebase/auth';

function Header() {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }
        })
    }, [dispatch, navigate])
    
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate('/')
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut())
            navigate('/')
        })
    }

    const links = [
        {
            to: '/',
            name: 'Home',
            img: '/images/home-icon.svg',
        },
        {
            to: '/',
            name: 'Originals',
            img: '/images/original-icon.svg',
        },
        {
            to: '/',
            name: 'Movies',
            img: '/images/movie-icon.svg',
        },
        {
            to: '/',
            name: 'Series',
            img: '/images/series-icon.svg',
        },
        {
            to: '/',
            name: 'Watchlist',
            img: '/images/watchlist-icon.svg',
        },
        {
            to: '/',
            name: 'Search',
            img: '/images/search-icon.svg',
        },
    ]
    return (
        <Nav>
            <Link to='/'><Logo src='/movie.png' /></Link>
            {
                !userName ? 
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer> :
            <>
                <NavMenu>
                    {links.map((link) => (
                        <Link to={link.to} key={link.name}>
                            <Img src={link.img} key={link.img} />
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </NavMenu>
                <LoginContainer>
                    <Login onClick={signOut}>Logout</Login>
                </LoginContainer> 
            </>
            }
        </Nav>
    )
}

export default Header;

const Nav = styled.div`
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 50px;
    padding: 10px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 30px;
    padding: 10px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 16px;
        color: white;
        text-decoration: none;
        text-transform: uppercase;

        span {
            position: relative;

            :hover {
                &:after {
                    content: "";
                    height: 2px;
                    background: white;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    width: 70%;
                    margin: auto;
                }
            }
        }
    }
`;

const UserImage = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;