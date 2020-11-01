import React from 'react'
import ReactDom from 'react-dom';
// 样式初始化
import 'normalize.css';
// icon
import '@/assets/fonts/iconfont.css';
// store
import { Provider } from 'react-redux';
import store from './store';
// moment
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// antd
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import 'antd/dist/antd.css';
// App
import './styles/global.css';
import App from './pages/App';

// 通过Provider连接react和redux
ReactDom.render(<Provider store={store}>
	<ConfigProvider locale={zhCN}>
		<App></App>
	</ConfigProvider>
</Provider >, document.getElementById('app'));

