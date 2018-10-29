import React from 'react'
import { login } from '../utils/TrelloAPI'

export default () => {
  const onClick = () => {
    login(() => {
      console.log('Login Success')
    })
  }
  return (
    <button type="button" onClick={onClick}>
      Login
    </button>
  )
}
