import React from 'react'

export default () => {
  const onClick = () => {
    if (window && window.Trello) {
      window.Trello.authorize({
        type: 'popup',
        name: 'Trello & News',
        scope: {
          read: 'true',
        },
        expiration: 'never',
        success(result) {
          console.log(result)
        },
        error() {
          console.log('error')
        },
      })
    }
  }
  return (
    <button type="button" onClick={onClick}>
      Login
    </button>
  )
}
