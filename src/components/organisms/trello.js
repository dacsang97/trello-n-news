import React, { useState, useEffect } from 'react'
import { H1 } from '../atoms/heading'
import { UnauthorizeTrello, TrelloContent } from '../molecules'
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
      <H1>Trello</H1>
      {token ? <TrelloContent /> : <UnauthorizeTrello saveToken={saveToken} />}
    </div>
  )
}
