import React from 'react'
import styled from 'styled-components'
import labelColor from '../../constants/labelColor'
import { Note } from '../atoms'

const CardWrapper = styled(Note)`
  margin-bottom: 10px;
  border-left: ${props => props.label && `3px solid ${labelColor[props.label].color}`};
  cursor: pointer;
  .card-name {
    transition: color 0.2s ease-out;
    color: #111;
  }
  &:hover {
    > .card-name {
      color: ${props => props.label && labelColor[props.label].color};
    }
  }
`

export default ({ name, desc, labels, url }) => {
  let label = null
  if (labels[0] && labels[0].color) {
    label = labels[0].color
  }
  return (
    <CardWrapper label={label}>
      <a target="_blank" rel="noopener noreferrer" href={url} className="card-name">
        {name}
      </a>
      {desc && <p style={{ color: '#999' }}>{desc}</p>}
    </CardWrapper>
  )
}
