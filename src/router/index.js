import React from 'react'
/* 固定路由 */
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found/index`))
/* 核心路由 */
const Home = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/home`))
const AboutMe = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/about-me`))
const MyResume = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/my-resume`))
const BlogMessage = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/blog-message`))
const ExTechnology = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/ex-technology`))
const SimpleLife = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/simple-life`))
// ...

/* -----------------------------------------对应以上固定路由 start----------------------------------------------------------------- */
export const mainRoutes = [
	{
		path: '/404',
		component: NotFound,
		exact: true
	}
]
/* -----------------------------------------对应以上固定路由 end------------------------------------------------------------------- */

/* =========================================对应以上构建在App组件下的核心路由 start================================================= */
export const adminRoutes = [
	{
		path: '/my-blog/home',
		component: Home,
		exact: true,
		name: '首页模块',
		key: '0000',
		icon: ''
	},
	{
		path: '/my-blog/about-me',
		component: AboutMe,
		exact: true,
		name: '我的简历',
		key: '1000',
		icon: ''
	},
	{
		path: '/my-blog/my-resume',
		component: MyResume,
		exact: true,
		name: '我的简历',
		key: '1000',
		icon: ''
	},
	{
		path: '/my-blog/blog-message',
		component: BlogMessage,
		exact: true,
		name: '我的简历',
		key: '1000',
		icon: ''
	},
	{
		path: '/my-blog/ex-technology',
		component: ExTechnology,
		exact: true,
		name: '我的简历',
		key: '1000',
		icon: ''
	},
	{
		path: '/my-blog/simple-life',
		component: SimpleLife,
		exact: true,
		name: '我的简历',
		key: '1000',
		icon: ''
	},
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
