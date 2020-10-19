import React from 'react'
import { mainRoutes } from '../router/index'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router>
        <Switch>
          {mainRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                {...route}
                render={(routeProps) => {
                  return <route.Component {...routeProps} />
                }}
              />
            )
          })}
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}
export default App
