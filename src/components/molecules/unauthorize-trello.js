import React from 'react'
import styled from 'styled-components'
import { Paper, Button } from '../atoms'
import { H2 } from '../atoms/heading'
import { login } from '../../utils/TrelloAPI'

import teemoImg from '../../assets/images/teemo.png'

const Wrapper = styled(Paper)`
  margin: 5rem auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 30%;
    margin-bottom: 15px;
  }
`

export default ({ saveToken }) => {
  function loginTrello() {
    login(token => {
      saveToken(token)
    })
  }

  return (
    <Wrapper>
      <H2>Login Trello to use</H2>
      <img src={teemoImg} alt="oops" />
      <Button onClick={loginTrello}>
        <i className="fab fa-trello" /> Login Trello
      </Button>
    </Wrapper>
  )
}
