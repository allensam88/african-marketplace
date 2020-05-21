import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import UserIdContext from '../contexts/UserIdContext';

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

const NavBar = (props) => {

	const { userId } = useContext(UserIdContext);

	console.log(props)

	return (
		<NavBarStyles>
			<Link to="/"><div className="marketplace-logo"> <img className="marketplace-logo" alt="logo" src={require('./marketplace.png')} /></div></Link>

			<ul className="nav-links">
				<li>
					<Link to="/items" className="links">
						Marketplace
                </Link>
				</li>
				<li>

					<Link to={`/userprofile/${userId}`} className="links">

						Profile
                </Link>
				</li>
				<li>
					<Logout />
				</li>
			</ul>
		</NavBarStyles>
	)
}

export default NavBar;