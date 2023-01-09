import React from 'react'
import { Redirect } from 'react-router-dom'
import { Container, FormWrap, FormContent, NavLogo1, NavLogo2, Form, FormH1, FormLabel, FormInput, FormImg, FormButton, ErrorM } from './RegisterElements'

const RegisterFormLayout = ({ handleSubmit, username, setUsername, email, setEmail, password, setPassword, errorMessage }) => (
  <>
    <FormImg img src='./img/CB.png' alt='CB' />
    <FormContent>
      <Form onSubmit={handleSubmit}>
        <ErrorM>{errorMessage}</ErrorM>
        <FormH1>Register</FormH1>
        <FormLabel htmlFor='for'>Username</FormLabel>
        <FormInput type='text' value={username} required onChange={(e) => setUsername(e.target.value)} />
        <FormLabel htmlFor='for'>Email</FormLabel>
        <FormInput type='email' value={email} required onChange={(e) => setEmail(e.target.value)} />
        <FormLabel htmlFor='for'>Password</FormLabel>
        <FormInput type='password' value={password} required onChange={(e) => setPassword(e.target.value)} />
        <FormButton type='submit'>Register</FormButton>
      </Form>
    </FormContent>
  </>
)

const RegisterForm = React.memo(({ data }) => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

    const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(`http://127.0.0.1:5000/register`, {
      method: 'POST',
      body: JSON.stringify({ username: username, email: email, password: password }),
    }).then((response) => response.json())

    if (response['register_status'] === 'success') {
      setStatus('success')
    } else if (response['register_status'] === 'failed') {
      setStatus('failed')
      setErrorMessage('Email already!')
    }

    setUsername('')
    setPassword('')
    setEmail('')
  }

  if (status === 'success') {
    return <Redirect to="/login" />
  } else {
    return (
      <>
        <Container>
          <FormWrap>
            <RegisterFormLayout
              handleSubmit={handleSubmit}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              errorMessage={errorMessage}
            />
         
            <div>
              <NavLogo1 to="/">Your Digital </NavLogo1>
              <NavLogo2 to="/"> Warehouse</NavLogo2>
            </div>
          </FormWrap>
        </Container>
      </>
    )
  }
})

export default RegisterForm

