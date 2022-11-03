import React from 'react'
import {SidebarContainer,
		Icon,
		CloseIcon,
		SidebarWrapper,
		SidebarLink,
		SidebarMenu,
		SidebarRoute,
		SideBtnWrap} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (

		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>		
					<SidebarLink to="/Products">Products</SidebarLink>
					<SidebarLink to="/partners">Partners</SidebarLink>
					<SidebarLink to="/about">About</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/login'>Log In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>

	)
}

export default Sidebar