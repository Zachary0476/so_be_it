import React from 'react'
import { AndroidFilled, GithubFilled } from '@ant-design/icons'
/* 固定路由 */
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ `@/pages/login`))
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found/index`))
/* 核心路由 */
const Index = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/index`))
const SysManage = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage`))
const SysMagAuth = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage/auth`))
const SysMagMenu = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage/menu`))
const StatusManage = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/status-manage`))
// ...


/* -----------------------------------------对应以上固定路由 start----------------------------------------------------------------- */
export const mainRoutes = [
	{
		path: '/login',
		component: Login,
		exact: true
	}, {
		path: '/404',
		component: NotFound,
		exact: true
	}
]
/* -----------------------------------------对应以上固定路由 end------------------------------------------------------------------- */

/* =========================================对应以上构建在App组件下的核心路由 start================================================= */
export const adminRoutes = [
	{
		path: '/admin/index',
		component: Index,
		exact: true,
		name: '首页模块',
		key: '0000',
		icon: <AndroidFilled />
	},
	{
		path: '/admin/sys-manage',
		// component: SysManage,
		exact: true,
		name: '管理模块',
		key: '1000',
		icon: <GithubFilled />,
		children: [
			{
				path: '/admin/sys-manage/auth',
				component: SysMagAuth,
				exact: true,
				name: '权限管理',
				key: '10000001',
			},
			{
				path: '/admin/sys-manage/menu',
				component: SysMagMenu,
				exact: true,
				name: '菜单管理',
				key: '10000002'
			}
		]
	},
	{
		path: '/admin/status-manage',
		component: StatusManage,
		exact: true,
		name: '状态管理',
		key: '2000',
		icon: <AndroidFilled />
	},
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
