import React from 'react'
import styled from 'styled-components'
import DefaultLayout from '../layout/Default'
import { Trello, News } from '../components/organisms'

const Col = styled.div`
  @media (min-width: 768px) {
    height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
  }
`

export default () => (
  <DefaultLayout>
    <div className="container-fluid">
      <div className="row">
        <Col className="col-md-7">
          <Trello />
        </Col>
        <Col className="col-md-5">
          <News />
        </Col>
      </div>
    </div>
  </DefaultLayout>
)
