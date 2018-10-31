import React, { useState } from 'react'
import styled from 'styled-components'
import Avatar from 'react-avatar'

const CustomAvatar = styled(Avatar)`
  vertical-align: inherit !important;
  margin-right: 10px;
`

const AvatarWrapper = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin-right: 10px;
  display: inline-block;
  img {
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: ${props => `${props.size / 2}px`};
  }
`

export default ({ src, name, size = 32 }) => {
  const [error, setError] = useState(false)
  return (
    <React.Fragment>
      {error ? (
        <CustomAvatar name={name} size={size} round />
      ) : (
        <AvatarWrapper size={size}>
          <img alt={name} onError={() => setError(true)} src={src} />
        </AvatarWrapper>
      )}
    </React.Fragment>
  )
}
