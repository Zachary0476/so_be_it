const axios = require('axios')
const config = require('../../config');
let uri = ''
switch (process.env.NODE_ENV) {
	case 'development':
		uri = config.dev.BASE_API
		break;
	case 'production':
		uri = config.prod.BASE_API
		break;
}
console.log(uri)
const instance = axios.create({
	baseURL: uri,
	timeout: 60 * 1000,
});
// 为已知需要花费很长时间的请求覆写超时设置
// instance.get('/longRequest', {
// 	timeout: 180 * 1000
// });

// 添加请求拦截器
instance.interceptors.request.use(config => {
	config.params = config.params || {}
	// 在发送请求之前做些什么
	if (config.method === 'get') config.params._t = Date.now()
	if (config.method === 'post') config.data._t = Date.now()
	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
	// 对响应数据做点什么 --一般根据响应状态进行路由跳转
	return response.data;
}, error => {
	// 对响应错误做点什么
	return Promise.reject(error);
});


export default instance