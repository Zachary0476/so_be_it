import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' //引入routerdom
import { Layout, Menu } from 'antd'
import { adminRoutes } from '@/router/index' //引入router
import layStyle from './index.less' //引入router

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

export default class MyLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  renderList(routeList) {
    return routeList.map((route) => {
      if (route.children && route.children.length > 0) {
        return (
          <SubMenu key={route.key} icon={route.icon} title={route.name}>
            {this.renderList(route.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={route.key} icon={route.icon}>
            <NavLink to={route.path} replace>
              {route.name}
            </NavLink>
          </Menu.Item>
        )
      }
    })
  }
  onCollapse(collapsed) {
    this.setState({ collapsed })
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => this.onCollapse(!this.state.collapsed)}
        >
          <div className={layStyle.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {this.renderList(adminRoutes)}
          </Menu>
        </Sider>
        <Layout className={layStyle.white_background}>
          <Header
            className={layStyle.white_background}
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '0 16px' }}>
            <div
              className={layStyle.white_background}
              style={{ padding: 24, minHeight: 360 }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
