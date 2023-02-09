import React from 'react'
import { Redirect } from "react-router-dom"
import {Container,
  FormWrap,FormContent,NavLogo1,NavLogo2,Form,FormH1,
  FormLabel,FormInput,FormImg,FormButton,Text,Navtext,NavtextLink,ErrorM} from './LoginElements'



export default function LoginForm(data) {

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
 
  const [loggedIn, setLoggedIn] = React.useState(!!localStorage.getItem('emailID'));

   const handleSubmit = async (event) => {
    
      event.preventDefault();
      setErrorMessage("");
      const response = await fetch(`http://127.0.0.1:5000/login`, {
          method: 'POST',
          body: JSON.stringify({email: email, password: password })
      });
      const responseData = await response.json();

      if (responseData['login_status'] === "success") {
          setUsername(responseData['username']);
          setstatus("success");
          localStorage.setItem('emailID', email);
          localStorage.setItem('user', responseData['username']);
          setLoggedIn(true);
      } else if (responseData['login_status'] === "fpassword") {
          setErrorMessage("Email and password do not match");
      } else{
          setErrorMessage("Email is not registered");
      }
      setemail("");
      setpassword("");
  };

  if (loggedIn) {
    //localstorage
    return <Redirect to="/products"/>
  } else {


    return (
      <>

        <Container>
            
          <FormWrap>  
            <FormImg img src='./img/CB.png' alt="CB" /> 
            <FormContent>         
              <Form onSubmit={handleSubmit}>        
                <ErrorM>{errorMessage}</ErrorM>
                <FormH1>Log in to your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                 <FormInput type='text' value={email} required
                onChange={e => setemail(e.target.value)}/>
                 <FormLabel htmlFor='for'>Password</FormLabel>
                 <FormInput type='password' value={password} required 
                  onChange={e => setpassword(e.target.value)}/>
                 <FormButton type='submit'>Sign in</FormButton>

                <Navtext>
                    <NavtextLink to="/Register">Register</NavtextLink>
                </Navtext>

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
