import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
	background: black;
	height:85px;
	//margin-top: -80px;
	display:flex;
	justify-content:center;
	font-size:1rem;
	position:sticky;
	top:0;
	z-index:10;

	@media screen and (max-width: :960px){
		transition:0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display:flex;
	justify-content:space-between;
	height:80px;
	z-index: 100%;
	width:100%;
	padding:0 0px;
	max-width:1700px;
`;


export const NavLogo1 = styled(LinkR)`
	color:white;
	justify-self:flex-start;
	cursor:pointer;
	font-size:35px;
	display:flex;
	align-items:center;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
`;

export const NavLogo2 = styled(LinkR)`
	color:white;
	justify-self:flex-start;
	cursor:pointer;
	font-size:40px;
	display:flex;
	align-items:center;
	margin-top:-15px;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
`;


export const MobileIcon = styled.div`
	display:none;

	@media screen and (max-width: 870px){
		display:block;
		position:absolute;
		top:0;
		right:0;
		transform: translate(-100%, 60%);
		font-size:1.8rem;
		cursor:pointer;
		color:white;
	}
`;

export const NavMenu = styled.ul`
	display:flex;
	align-items:center;
	list-style:none;
	text-align:center;
	margin-right:-22px;

	@media screen and (max-width: 870px){
		display:none;
	}
`;

export const NavItem = styled.li`
	height:80px;
`
export const NavLinks = styled(LinkR)`
	color: white;
	display:flex;
	align-items:center;
	text-decoration:none;
	padding: 0 1rem;
	height:100%;
	cursor:pointer;
	font-size:30px;

	&.active{
		border-bottom: 3px solid red;
	}

	&:hover{
		transition: all 0.2s ease-in-out;
		color:red;
		
	}
`;

export const User = styled.div`
	color: white;
	display:flex;
	align-items:center;
	text-decoration:none;
	padding: 0 1rem;
	height:100%;
	font-size:30px;

	@media screen and (max-width: 870px){
		display:none;
	}
`;

export const NavBtn =styled.nav`
	display:flex;
	align-items:center;

	@media screen and (max-width: 870px){
		display:none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius:50px;
	background:AliceBlue;
	white-space:nowrap;
	padding:10px 22px;
	color:green;
	font-size:20px;
	outline:none;
	border:none;
	cursor:pointer;
	transition: all 0.2s ease-in-out;
	text-decoration:none;
	font-weight: bold;

	&:hover{
		transition: all 0.2s ease-in-out;
		background: #ff8c1a;
		color:white;
		font-weight: bold;
	}
`
