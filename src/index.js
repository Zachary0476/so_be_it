import React from 'react'
import ReactDom from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { mainRoutes } from '@/router/index' //引入router
// 样式初始化
import 'normalize.css';
// icon
import '@/assets/fonts/iconfont.css';
// store
import { Provider } from 'react-redux';
import store from './store';
// moment --被官网的插件替换掉了
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');
// antd
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import 'antd/dist/antd.css'; // 已使用插件引入
// App
import './styles/global.css';
import App from '@/pages/App';
import Loading from '@/pages/common/loading'
import http from '@/utils/http'


// 通过Provider连接react和redux
ReactDom.render(<Provider store={store}>
	<ConfigProvider locale={zhCN}>
		<HashRouter>
			<React.Suspense fallback={<Loading />}>
				<Switch>
					<Route
						path="/my-blog"
						render={(routeProps) => <App {...routeProps} />}
					></Route>
					{mainRoutes.map((route) => {
						return (
							<Route
								path={route.path}
								key={route.path}
								exact={true}
								component={route.component}
							></Route>
						)
					})}
					<Redirect exact={true} from="/" to="/my-blog/home" />
					<Redirect to="/404" />
				</Switch>
			</React.Suspense>
		</HashRouter>
	</ConfigProvider>
</Provider >, document.getElementById('app'));




