import React from 'react'
import DefaultLayout from '../src/layout/Default'
import { Trello, News } from '../src/components/organisms'

export default () => (
  <DefaultLayout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <Trello />
        </div>
        <div className="col-md-5">
          <News />
        </div>
      </div>
    </div>
  </DefaultLayout>
)
