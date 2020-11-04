import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { mainRoutes, errRoutes } from '@/router/index' //引入routerdom
import Loading from '@/pages/loading'

const rootRouter = errRoutes.concat(mainRoutes)
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact={true} from="/" to="/login" />
            {rootRouter.map((route) => {
              if (route.children && route.children.length > 0) {
                return (
                  <Route
                    path="/home/:path"
                    exact={true}
                    key={route.path}
                    component={() => <route.component />}
                  ></Route>
                )
              }
              return <Route key={route.path} {...route}></Route>
            })}
            <Route component={errRoutes[1].component}></Route>
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}
export default App
