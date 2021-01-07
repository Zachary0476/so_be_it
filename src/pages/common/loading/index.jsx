import React, { Component } from 'react'
import { Spin, Alert } from 'antd';
import loadStyle from './index.less'


export default class Index extends Component {
    render() {
        return (
            <div className={loadStyle.loading}>
                <Spin tip="遇事莫慌，我马上就好..." className={loadStyle.spin_font}></Spin>
            </div>
        )
    }
}
