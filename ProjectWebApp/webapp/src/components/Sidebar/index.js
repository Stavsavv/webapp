import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  const history = useHistory()

  const handleSidebarLinkClick = (link) => {
    toggle()
    history.push(link)
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/products" onClick={() => handleSidebarLinkClick('/products')}>
            Products
          </SidebarLink>
          <SidebarLink to="/partners" onClick={() => handleSidebarLinkClick('/partners')}>
            Partners
          </SidebarLink>
          <SidebarLink to="/about" onClick={() => handleSidebarLinkClick('/about')}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login" onClick={() => handleSidebarLinkClick('/login')}>
            Log In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
