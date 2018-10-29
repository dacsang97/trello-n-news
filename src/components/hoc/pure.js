import React, { PureComponent } from 'react'

export default Comp =>
  class extends PureComponent {
    render() {
      return <Comp {...this.props} />
    }
  }
