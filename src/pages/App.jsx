import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom' //引入routerdom
import { adminRoutes } from '@/router/index' //引入routerdom
import MyLayout from '@/components/layout'

function App() {
  return (
    <MyLayout>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />
              }}
            />
          )
        })}
        {/* <Redirect to="/404" /> */}
      </Switch>
    </MyLayout>
  )
}

export default withRouter(App)
