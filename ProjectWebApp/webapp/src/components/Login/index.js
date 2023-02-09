import React from 'react'
import { Redirect } from "react-router-dom"
import {Container,
  FormWrap,FormContent,NavLogo1,NavLogo2,Form,FormH1,
  FormLabel,FormInput,FormImg,FormButton,Text,Navtext,NavtextLink,ErrorM} from './LoginElements'



export default function LoginForm(data) {

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
 
  //check local storage if it has a value
  const [loggedIn, setLoggedIn] = React.useState(!!localStorage.getItem('emailID'));

   const handleSubmit = async (event) => {
       event.preventDefault();
       setErrorMessage("");
       const response = await fetch(`http://127.0.0.1:5000/login`,{
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({email: email, password: password })
      }).then((response) => response.json());
     
      if (response['login_status'] === "success") {
        setstatus("succuess");
        localStorage.setItem('emailID', email);
        setLoggedIn(true);
      } else if (response['login_status'] === "fpassword") {
        setErrorMessage("Email and password do not match");
      } else{
        setErrorMessage("Email is not registered");
      }

      setstatus(response);
      setemail("");
      setpassword("");
  } 

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
