import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'



 export   const Table = styled.table`
	border-collapse: collapse;
	  margin: 25px 0;
	  font-size: 0.9em;
	  min-width: 400px;
	  border-radius: 5px 5px 0 0;
	  overflow: hidden;
	  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	`;

 export const TableHead = styled.thead`
	  background-color: #009879;
	  color: #ffffff;
	  font-size:35px;
	  text-align: center;
	  font-weight: bold;  
`

 export const TableData = styled.td`
	font-size: 3vh;
	border: 1px solid red;
	height: 100%;
	text-align: center;
	vertical-align: middle;
	background:WHITE;
	padding:20px 80px;
`;

 export const TableDataGrey = styled.td`
	font-size: 3vh;
	color: red;
	border: 1px solid LightGrey;
	text-align: center;
	vertical-align: middle;
	background:blue;

`

export const NavBtn =styled.nav`
	display:inline-block;
   	margin-right:5px;
   	margin-top:20px;


	
	

`;

export const NavBtnLink = styled(LinkR)`
	border-radius:50px;
	background:grey;
	white-space:nowrap;
	padding:10px 22px;
	font-size:20px;
	outline:none;
	border:none;
	cursor:pointer;
	transition: all 0.2s ease-in-out;
	text-decoration:none;
	font-weight: bold;
	color:white;
	width:8%;
	margin:px;

	&:hover{
		transition: all 0.2s ease-in-out;
		background: #ff8c1a;
		color:white;
		font-weight: bold;
	}
`
