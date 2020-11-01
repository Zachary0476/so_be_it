import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
import homeStyle from './index.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className='lp_body'>
        <Layout className={homeStyle.home_container}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={homeStyle.home_logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
            </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={homeStyle.home_content}>
            <Header className={homeStyle.home_header}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: `${homeStyle.home_trigger}`,
                onClick: this.toggle,
              })}
            </Header>
            <Content className={homeStyle.home_body}>
              Content
            </Content>

          </Layout>
        </Layout>
      </div>
    )
  }
}
