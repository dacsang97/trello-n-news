import React, { useState } from 'react'
import LoginButton from '../src/components/LoginButton'
import Daily from '../src/utils/News'

export default () => {
  const [count, setCount] = useState(0)
  const getData = () => {
    // Trello.instance.listCards('5bd68f65526cab83406b19be').then(res => {
    //   console.log(res)
    // })
    Daily.instance.publications().then(res => {
      console.log(res)
    })
  }
  return (
    <React.Fragment>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={getData}>
        Log Token
      </button>
      <LoginButton />
    </React.Fragment>
  )
}
