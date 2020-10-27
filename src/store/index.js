import { createStore, compose, applyMiddleware } from 'redux';
// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...[thunk]), // 需要使用的中间件数组
        //这里可以放插件那个WINDOW...的东西
    )
)
export default store