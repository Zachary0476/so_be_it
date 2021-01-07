import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { adminRoutes } from '@/router' //引入routerdom
import MyLayout from '@/components/layout' //引入routerdom

const swicthComponents = (arr) => {
  return arr.map((route) => {
    if (route.children && route.children.length > 0) {
      return swicthComponents(route.children)
    } else {
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
    }
  })
}

function App() {
  return (
    <MyLayout>
      <Switch>
        {swicthComponents(adminRoutes)}
        <Redirect from="*" to="/404"></Redirect>
      </Switch>
    </MyLayout>
  )
}

export default App
