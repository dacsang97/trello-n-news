import styled from 'styled-components'

const Paper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
  margin-bottom: 50px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px 30px;
  transition: all 0.2s ease 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
  }
`

export default Paper
