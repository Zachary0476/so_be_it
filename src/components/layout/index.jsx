import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' //引入routerdom
// import { adminRoutes } from '@/router/index' //引入router
import layStyle from './index.less' //引入router
import { Row, Col } from 'antd';

export default class MyLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Row className={layStyle.container}>
          <Col span={24} className={layStyle.header}></Col>
        </Row>
        <Row >
          <Col span={24} className={layStyle.nav}>
            <Row>
              <Col span={12} offset={6} className={layStyle.nav_item}>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/home">首页</NavLink>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/simple-life">平凡岁月</NavLink>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/ex-technology">技术交流</NavLink>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/blog-message">blog留言</NavLink>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/my-resume">档案</NavLink>
                <NavLink activeClassName={layStyle.nav_selected} to="/my-blog/about-me">关于我的</NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6} className={layStyle.body}>
            {this.props.children}
          </Col>
        </Row>
      </>
    )
  }
}
