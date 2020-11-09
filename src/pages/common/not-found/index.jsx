import React from 'react'
import NFStyle from './index.less'

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <div className={NFStyle.notFound}></div>
  }
}
