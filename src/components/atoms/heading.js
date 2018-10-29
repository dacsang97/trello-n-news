import styled from 'styled-components'

const H1 = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;

  &.inverted {
    color: white;
  }
`

const H2 = styled.h2`
  font-weight: 400;
  font-size: 24px;

  &.inverted {
    color: white;
  }
`

export { H1, H2 }

export default {
  H1,
  H2,
}
