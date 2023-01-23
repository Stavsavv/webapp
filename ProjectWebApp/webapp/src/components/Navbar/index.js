import React from 'react';
import {FaBars} from 'react-icons/fa';
import {FaBoxes} from 'react-icons/fa';
import { Redirect, withRouter } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo1, NavLogo2, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const NavbarLayout = ({ toggle, history }) => {
  const logout = () => {
    localStorage.removeItem('emailID');
    history.push('/login');
  }

  return (
    <>
      <div>
        <NavLogo1 >Your Digital</NavLogo1>
        <NavLogo2 > Warehouse<FaBoxes size="50px" /></NavLogo2>
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="products">Products</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/partners">Partners</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/About">About us</NavLinks>
        </NavItem>
                
        )}
      </NavMenu>
       {localStorage.getItem('emailID') ? (
          <NavBtn>
            <NavBtnLink onClick={logout}>Logout</NavBtnLink>
          </NavBtn>
        ) : (
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        )}
    </>
  )
}

const Navbar = React.memo(({ toggle, history }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLayout toggle={toggle} history={history} />
      </NavbarContainer>
    </Nav>
  )
})

export default withRouter(Navbar);
