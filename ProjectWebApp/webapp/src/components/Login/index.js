import React, { useState, useEffect, useReducer, useCallback, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  FormWrap,
  FormContent,
  NavLogo1,
  NavLogo2,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormImg,
  FormButton,
  Text,
  Navtext,
  NavtextLink,
  ErrorM,
} from './LoginElements';

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    }
    case 'success': {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case 'error': {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function handleSubmit(event, email, password, dispatch) {
  event.preventDefault();
  dispatch({ type: 'login' });
  axios
    .post('http://127.0.0.1:5000/login', { email, password })
    .then((response) => {
      const { login_status } = response.data;
      if (login_status === 'success') {
        dispatch({ type: 'success' });
        localStorage.setItem('emailID', email);
      } else if (login_status === 'fpassword') {
        dispatch({
          type: 'error',
          errorMessage: 'Email and password do not match!',
        });
      } else {
        dispatch({
          type: 'error',
          errorMessage: 'Email do not exist!',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: 'error',
        errorMessage: 'Something went wrong. Please try again later.',
      });
    });
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, {
    email: '',
    password: '',
    isLoading: false,
    isLoggedIn: false,
    errorMessage: '',
  });
  const { email, password, isLoading, isLoggedIn, errorMessage } = state;

  useEffect(() => {
    if (isLoggedIn) {
      // Reset form after successful login
      dispatch({ type: 'field', fieldName: 'email', fieldValue: '' });
      dispatch({ type: 'field', fieldName: 'password',fieldValue: '' });
      localStorage.setItem('emailID', email);
}
}, [isLoggedIn]);

const handleEmailChange = useCallback((event) => {
dispatch({
type: 'field',
fieldName: 'email',
fieldValue: event.target.value,
});
}, []);

const handlePasswordChange = useCallback((event) => {
dispatch({
type: 'field',
fieldName: 'password',
fieldValue: event.target.value,
});
}, []);

const handleSubmitClick = useCallback(
(event) => handleSubmit(event, email, password, dispatch),
[email, password]
);

const redirectElement = useMemo(
() =>
isLoggedIn ? (
<Redirect to="/products" />
) : (
<Form onSubmit={handleSubmitClick}>
<ErrorM>{errorMessage}</ErrorM>
<FormH1>Log in to your account</FormH1>
<FormLabel htmlFor="for">Email</FormLabel>
<FormInput
         type="text"
         value={email}
         required
         onChange={handleEmailChange}
       />
<FormLabel htmlFor="for">Password</FormLabel>
<FormInput
         type="password"
         value={password}
         required
         onChange={handlePasswordChange}
       />
<FormButton type="submit">Sign in</FormButton>
<Navtext>
<NavtextLink to="/Register">Register</NavtextLink>
</Navtext>
</Form>
),
[isLoggedIn, errorMessage, email, password, handleEmailChange, handlePasswordChange, handleSubmitClick]
);

return (
<Container>
<FormWrap>
<FormImg img src="./img/CB.png" alt="CB" />
<FormContent>{isLoading ? 'Loading...' : redirectElement}</FormContent>
</FormWrap>
<div>
<NavLogo1 to="/">Your Digital </NavLogo1>
<NavLogo2 to="/"> Warehouse</NavLogo2>
</div>
</Container>
);
}