import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { mainRoutes } from '@/router/index' //引入routerdom
import Home from '@/pages/index/home' //引入routerdom
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>我是app组件</h1>
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
            <Redirect to="/404" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
export default App
