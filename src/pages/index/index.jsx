import React from 'react'
import { connect } from 'react-redux'
import { COUNT_ADD } from '@/store/actions';

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  componentWillDidMount() {
    this.props.dispatch(COUNT_ADD)
    console.log(this.props);
  }
  render() {
    return <div>
      <ul></ul>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.count);
  return {
    count: state.count
  }
}

// export default Index
export default connect(mapStateToProps)(Index)