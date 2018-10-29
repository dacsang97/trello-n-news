import React, { useState } from 'react'
import LoginButton from '../src/components/LoginButton'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <LoginButton />
    </React.Fragment>
  )
}
