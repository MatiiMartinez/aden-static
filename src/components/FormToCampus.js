import React from "react"
import styled from "styled-components"

import { Button } from "@material-ui/core"

const FormToCampus = props => {
  const { type, id } = props

  return (
    <FormToCampusContainer>
      <Title>¡Regístrate y accede ahora mismo!</Title>
      <Subtitle>Tendrás acceso a miles de recursos libres</Subtitle>
      <ButtonsWrapper>
        <RegisterButton
          variant="contained"
          color="primary"
          size="large"
          href={`https://app.aden.org/auth/registration/${type}/${id}`}
        >
          Crear mi cuenta
        </RegisterButton>
        <LoginButton
          variant="contained"
          color="primary"
          size="large"
          href={`https://app.aden.org/auth/login/${type}/${id}`}
        >
          Ya tengo una cuenta
        </LoginButton>
      </ButtonsWrapper>
    </FormToCampusContainer>
  )
}

export default FormToCampus

const FormToCampusContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 1.25rem;
  color: #b31d15;
`

const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: #616161;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const RegisterButton = styled(Button)`
  text-transform: none;
`

const LoginButton = styled(Button)`
  color: #b31d15;
  background-color: #fff0ef;
  text-transform: none;

  :hover {
    background-color: #ffc1bd;
  }
`
