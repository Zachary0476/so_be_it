import { get } from 'axios';

const getData = () => {
	return get('http://jsonplaceholder.typicode.com/posts')
}

export const COUNT_ADD = {
	type: 'COUNT_ADD',
	payload: {}
}

export const getPost = async (dispatch) => {
	const res = await getData()
	dispatch({
		type: 'POST_DATA',
		payload: res.data
	})
}