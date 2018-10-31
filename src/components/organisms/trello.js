import React, { useState, useEffect } from 'react'
import { UnauthorizeTrello, TrelloContent, Nav } from '../molecules'
import { setToken } from '../../utils/TrelloAPI'

export default () => {
  const [token, saveToken] = useState('')

  useEffect(
    () => {
      if (window && window.localStorage) {
        const trelloToken = window.localStorage.getItem('trello_token')
        saveToken(trelloToken)
        setToken(trelloToken)
      }
    },
    ['token'],
  )

  return (
    <div>
      <Nav>Trello</Nav>
      <div>{token ? <TrelloContent /> : <UnauthorizeTrello saveToken={saveToken} />}</div>
    </div>
  )
}
