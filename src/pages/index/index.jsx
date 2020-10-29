import React from 'react'
import { connect } from 'react-redux'
import { COUNT_ADD } from '@/store/actions'
import store from '@/store'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  add() {
    this.props.dispatch(COUNT_ADD)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.add()}>+1</button>
        <div>{this.props.count}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  }
}

export default connect(mapStateToProps)(Index)
