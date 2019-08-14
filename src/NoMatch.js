import React from 'react'

import { Link } from 'react-router-dom'

class NoMatch extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>Uh Oh... Page not found!</div>
        <Link to="/">Click here to go back to the initial page</Link>
      </React.Fragment>
    )
  }
}

export default NoMatch
