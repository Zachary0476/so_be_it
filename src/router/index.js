import React from 'react'
import { AndroidFilled, GithubFilled } from '@ant-design/icons'
/* 固定路由 */
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ `@/pages/login`))
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found`))
/* 核心路由 */
const Index = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/index`))
const SysManage = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage`))
const SysMagAuth = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage/auth`))
const SysMagMenu = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/admin/sys-manage/menu`))
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
		component: SysManage,
		exact: true,
		name: '管理模块',
		key: '1000',
		icon: <GithubFilled />,
		child: [
			{
				path: '/admin/sys-manage/auth',
				component: SysMagAuth,
				exact: true,
				name: '权限管理',
				key: '1001',
				child: [
					{
						path: '/admin/sys-manage/auth/hah1',
						component: SysMagAuth,
						exact: true,
						name: '哈哈权限1',
						key: '1001001',
					},
					{
						path: '/admin/sys-manage/auth/hah2',
						component: SysMagAuth,
						exact: true,
						name: '哈哈权限2',
						key: '1001002',
					}
				]
			},
			{
				path: '/admin/sys-manage/menu',
				component: SysMagMenu,
				exact: true,
				name: '菜单管理',
				key: '1002'
			}
		]
	}
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
