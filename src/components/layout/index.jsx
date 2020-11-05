import React from 'react'
import { Link } from 'react-router-dom' //引入routerdom
import { Layout, Menu } from 'antd'
const { SubMenu } = Menu

const { Header, Content, Footer, Sider } = Layout
import { adminRoutes } from '@/router/index'

function MyLayout(props) {
  const renderList = (routeList) => {
    return routeList.map((route) => {
      if (route.child && route.child.length > 0) {
        return (
          <SubMenu key={route.key} icon={route.icon} title={route.name}>
            {renderList(route.child)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={route.key} icon={route.icon}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        )
      }
    })
  }

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0000']}>
          {renderList(adminRoutes)}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '.1rem .1rem 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MyLayout
