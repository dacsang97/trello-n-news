import React, { useState } from 'react'
import LoginButton from '../src/components/LoginButton'
import { getToken } from '../src/utils/TrelloAPI'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={() => console.log(getToken())}>
        Log Token
      </button>
      <LoginButton />
    </React.Fragment>
  )
}
