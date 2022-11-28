import React from 'react'
import { Redirect } from "react-router-dom"
import {Container,
	FormWrap,FormContent,NavLogo1,NavLogo2,Form,FormH1,
	FormLabel,FormInput,FormImg,FormButton} from './RegisterElements'


export default function RegisterForm(data) {
  const [username, setusername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [status, setstatus] = React.useState("");

  const handleSubmit = async (event) => {
	 		 event.preventDefault();
       const response = await fetch(`http://127.0.0.1:5000/register`,{
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({username: username, email: email, password: password })
      }).then((response) => response.json());

      if (response['register_status'] === "success") {
      	setstatus("koble");
      } else if (response['register_status'] === "failed") {
      	setstatus("malakia")
      }

      setusername("")
      setpassword("")
      setemail("")
  }


  	if (status === "koble") {
  		return <Redirect to="/login"/>
  	} else {
  		if (status === "malakia") {
  			console.log("asdasd");
  		}
  		return (
				<>
					<Container>
							
						<FormWrap>	
							<FormImg img src='./img/CB.png' alt="CB" />	
							<FormContent>					
								<Form onSubmit={handleSubmit}>
									<FormH1>Register</FormH1>
									<FormLabel htmlFor='for'>Username</FormLabel>
									 <FormInput type='text' value={username} required 
									 onChange={e => setusername(e.target.value)}/>

									 <FormLabel htmlFor='for'>Email</FormLabel>
									 <FormInput type='email' value={email} required
									 onChange={e => setemail(e.target.value)} />

									 <FormLabel htmlFor='for'>Password</FormLabel>
									 <FormInput type='password' value={password} required 
									 onChange={e => setpassword(e.target.value)}/>
									
									 <FormButton type='submit'>Register</FormButton>
								</Form>	
							</FormContent>
						
						</FormWrap>
							<div>
								<NavLogo1  to='/'>Your Digital </NavLogo1>
								<NavLogo2  to='/'> Warehouse</NavLogo2>
							</div>
					</Container>
				</>
			)
  	}
	}

