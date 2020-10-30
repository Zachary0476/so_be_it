import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>{this.props.count}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  }
}

export default connect(mapStateToProps)(Home)
