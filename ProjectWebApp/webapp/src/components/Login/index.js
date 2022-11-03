import React from 'react'
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../Store/appContext";
import {Container,
	FormWrap,FormContent,NavLogo1,NavLogo2,Form,FormH1,
	FormLabel,FormInput,FormImg,FormButton,Text,Navtext,NavtextLink} from './LoginElements'



export default function LoginForm(data) {

	
  const { store, actions } = useContext(Context);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");
  console.log("this is your token", token);  
  

  const handleSubmit = () => {
  		actions.login(email, password)//.then(()=>{
  		//	history.push("/products");
  		//})  
   };

   //if(store.token && store.token!="" && store.token!=undefined) history.push("/");

	return (
		
			
			<Container>
					
				<FormWrap>	
					<FormImg img src='./img/CB.png' alt="CB" />	
					<FormContent>		
						{token && token!="" && token!=undefined ? ("You are logged in with this token" + token):				
						<Form onSubmit={handleSubmit}>
						
							<FormH1>Log in to your account </FormH1>
							<FormLabel htmlFor='for'>Email</FormLabel>
							 <FormInput type='text' value={email} required
							onChange={e => setemail(e.target.value)}/>
							 <FormLabel htmlFor='for'>Password</FormLabel>
							 <FormInput type='password' value={password} required 
							  onChange={e => setpassword(e.target.value)}/>
							 <FormButton type='submit'>Sign in </FormButton>
		

								
							<Navtext>
									<NavtextLink to="/Register">Register</NavtextLink>
							</Navtext>

						</Form>	

					
					 }
					</FormContent>
				
				</FormWrap>
					<div>
						<NavLogo1  to='/'>Your Digital </NavLogo1>
						<NavLogo2  to='/'> Warehouse</NavLogo2>
					</div>
			</Container>
		
	)
}


