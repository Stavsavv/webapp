import React from 'react'
import {FaBars} from 'react-icons/fa'
import {FaBoxes} from 'react-icons/fa'


import { Nav,
	NavbarContainer,
	NavLogo1,NavLogo2,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	
	NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<div>
						<NavLogo1 to='/'>Your Digital</NavLogo1>
						<NavLogo2 to='/'> Warehouse<FaBoxes size="50px"/></NavLogo2>

					</div>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='products'>Products</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='/partners'>Partners</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='/partners'>About</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">Log In</NavBtnLink>
					</NavBtn>
					
					
				</NavbarContainer>
			</Nav>
		</>
	
	)
}

export default Navbar