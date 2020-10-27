import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { mainRoutes } from '@/router/index' //引入routerdom

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {mainRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact
                  {...route}
                  render={(routeProps) => {
                    return <route.component {...routeProps} />
                  }}
                ></Route>
              )
            })}
            {/* <Redirect to="/404" /> */}
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
export default App
