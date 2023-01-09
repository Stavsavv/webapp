import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
	min-height:692px;
	position:fixed;
	display:flex;
	justify-content:center;
	align-items:center;
	bottom:0;
	right:0;
	left:0;
	top:0;
	z-index:0;
	overflow:hidden;
	background: #ff8c1a;
	padding:30px;



	@media screen and (max-width: 780px){
		padding:5px;
		
	}
`

export const ErrorM = styled.p`
	padding:10px 20px 10px 20px;
	background-repeat:no-repeat;
	background-position: 100px center;
	margin-top: -20px;
	font-size: 22px;
	font-weight:bold;
	color:white;
	background-color:#e63900;
	text-align:center;
`


export const FormWrap = styled.div`
	width:800px;
	height:692px;
	background:white;
	color:blue;
	display:grid;
	grid-template-columns: 1fr 6fr;
	position:relative;
	
	border-radius:10px;


	@media screen and (max-width: 980px){
		height:95%;
		padding:50px;


	}

	@media screen and (max-width: 720px){
		height:90%;
		padding-left:95px;
	}
`
export const NavLogo1 = styled(LinkR)`
	color:white;
	justify-self: right;
	cursor:pointer;
	font-size:60px;
	display:flex;
	align-items:right;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
	text-align:left;
	width:20%;


	

	@media screen and (max-width: 720px){
	color:white;
	justify-self:flex-start;
	cursor:pointer;
	font-size:35px;
	display:flex;
	align-items:center;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
	height:80%;
	}

	@media screen and (max-width: 600px){
		display:none;

	}

	`

export const NavLogo2 = styled(LinkR)`
	color:white;
	justify-self: center;
	cursor:pointer;
	font-size:65px;
	display:flex;
	align-items:center;
	margin-top:-15px;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
	width:20%;
	

	
	@media screen and (max-width: 720px){
	color:white;
	justify-self:flex-start;
	cursor:pointer;
	font-size:35px;
	display:flex;
	align-items:center;
	margin-left:24px;
	font-weight:bold;
	text-decoration:none;
	height:80%;
	}

	@media screen and (max-width: 600px){
		display:none;
	}

`;


export const FormContent= styled.div`
	height:100%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	padding:10px;

	@media screen and (max-width: 1000px){
		padding:50px;

	}
`

export const Form = styled.form`
	background:#e63900;
	max-width:900px;
	height:auto;
	width:100%;
	z-index:1;
	display:grid;
	margin:0 auto;
	padding:80px 32px;
	border-radius:4px;
	box-shadow:0 1px 3px rgba(0,0,0,0.9);

	 @media screen and (max-width: 1000px){
	 	width:350px;
		padding-bottom:40px;
		height:auto;
		justify-self: center;
	}
`

export const FormH1 = styled.h1`
	margin-bottom:40px;
	color:white;
	font-size:23px;
	font-weight:400;
	text-align:center;
	opacity: 0.5;
	font-weight: bold;

`

export const FormLabel = styled.label`
	margin-bottom:8px;
	font-size:18px;
	color:black;
`

export const FormInput = styled.input`
	padding:16px 16px;
	margin-bottom:32px;
	border:none;
	border-radius:4px;
	font-size:18px;
`

export const FormButton = styled.button`
	background:black;
	padding:16px 0;
	border:none;
	border-radius:4px;
	color:white;
	font-size:20px;
	cursor:pointer;
`

export const Text = styled.span`
	text-align:center;
	margin-top:24px;
	color:black;
	font-size:14px;
`

export const NavLink = styled.span`
	text-align:center;
	color:black;
	font-size:20px;
	margin-top:24px;
`


export const FormImg = styled.img`
	position:relative;
	width:350px;
	height:auto;
	padding:10px;
	margin-top:85%;

	@media screen and (max-width: 1000px){
		
		display:none;
	}

`

export const Navtext =styled.nav`
  position: absolute;
  width: 100%;
  bottom: 60px;
  left:180px;
  text-align: center;
`

export const NavtextLink = styled(LinkR)`
	font-weight: bold;
	color:white;
	font-size:20px;

	 

	&:hover{
		transition: all 0.2s ease-in-out;
		border-radius: 20px;
		background: #ff8c1a;
		color:white;
		font-weight: bold;
		padding:10px;
	}
`