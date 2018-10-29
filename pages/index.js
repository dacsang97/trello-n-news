import React, { useState } from 'react'
import DefaultLayout from '../src/layout/Default'
import { Button, Paper } from '../src/components/atoms'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <DefaultLayout>
      <h1>Counter: {count}</h1>
      <Paper>
        <Button invert onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </Paper>
    </DefaultLayout>
  )
}
