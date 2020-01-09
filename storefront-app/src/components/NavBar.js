import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavBarStyles = styled.nav`
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
background-color: #fe6c61;
color: white;
height: 6rem;
width: 100%;
`

const NavBar = () => {
    return (
        <NavBarStyles>
            <div className="marketplace-logo"> <img className="marketplace-logo" src={require('./marketplace.png')} /></div>

            <ul className="nav-links">
                <li>
                <Link to="/" className="links">
                    Marketplace
                </Link>
                </li>
                <li>
                <Link to="" className="links">
                    Profile
                </Link>
                </li>
                <li>
                    <Link to="/login" className="links">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="links">
                        Register
                    </Link>
                </li>
                <li>
                    <Logout/>
                </li>
            </ul>
        </NavBarStyles>
    )
}

export default NavBar;