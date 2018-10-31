import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../atoms'

const User = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    margin-right: 5px;
  }
`

export default ({ user }) => (
  <React.Fragment>
    <div className="col-md-12">
      <User>
        Hello, <Avatar src={`${user.avatarUrl}/50.png`} size={32} />
        <strong>{user.fullName}</strong>
      </User>
    </div>
    <hr />
  </React.Fragment>
)
