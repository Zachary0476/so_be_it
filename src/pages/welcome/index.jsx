import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from '@ant-design/icons';
import welStyle from './index.less'

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };
    }
    onCollapse(collapsed) {
        this.setState({ collapsed });
    };
    render() {
        return (
            <div className="lp_body">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider className={welStyle.wel_sider}>
                        <div className={welStyle.wel_side_tit}>
                            <div className={this.state.collapsed ? welStyle.logo_area_sc : welStyle.logo_area}>LEAPMOTOR</div>
                        </div>
                        <Menu className={welStyle.menu_box} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item className={welStyle.menu_item} key="1" icon={<PieChartOutlined />}>Time</Menu.Item>
                            <Menu.Item className={welStyle.menu_item} key="2" icon={<DesktopOutlined />}>Option</Menu.Item>
                            <Menu.Item className={welStyle.menu_item} key="3" icon={<FileOutlined />}>Files</Menu.Item>
                        </Menu>
                        <div onClick={() => this.onCollapse(!this.state.collapsed)} className={welStyle.wel_side_bom}>{this.state.collapsed ? <span>&lt;</span> : <span>&gt;</span>}</div>
                    </Sider>
                    <Layout className={welStyle.wel_right}>
                        <Header style={{ padding: 0, height: '.64rem' }} />
                        <Content className={welStyle.wel_content}>
                            Bill is a cat.
                        </Content>
                        <Footer className={welStyle.wel_footer}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}