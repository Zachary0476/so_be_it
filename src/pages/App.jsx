import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { mainRoutes, errRoutes } from '@/router/index' //引入routerdom

const rootRouter = errRoutes.concat(mainRoutes)
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback="loading...">
          <Switch>
            {rootRouter.map((route) => {
              return <Route key={route.path} {...route}></Route>
            })}
            <Redirect to="/404" />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}
export default App
