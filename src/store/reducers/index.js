//state:所有数据信息
const defaultState = {
	inputValue: '123',
	list: [1, 3]
}
//设置state的默认数据:defaultState
export default (state = defaultState, action) => {
	return state;
}