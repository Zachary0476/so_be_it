import React from 'react'

class App extends React.Component {
  constructor() {
    super()
  }
  clickMe() {
    console.log(123)
  }
  render() {
    return (
      <div>
        <div onClick={() => this.clickMe()}>click me!!!</div>
      </div>
    )
  }
}
export default App
