import React from 'react'
import styled from 'styled-components'
import labelColor from '../../constants/labelColor'
import { Note } from '../atoms'

const CardWrapper = styled(Note)`
  margin-bottom: 10px;
  border-left: ${props => props.label && `3px solid ${labelColor[props.label].color}`};
`

export default ({ name, desc, labels }) => {
  let label = null
  if (labels[0] && labels[0].color) {
    label = labels[0].color
  }
  return (
    <CardWrapper label={label}>
      <div>{name}</div>
      {desc && <p>{desc}</p>}
    </CardWrapper>
  )
}
