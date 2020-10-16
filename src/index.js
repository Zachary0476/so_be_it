import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import App from './views/App';
// import store from './store/index'

ReactDom.render(<App />, document.getElementById('app'));
// ReactDom.render(<Provider store={store}>
// 	<App />
// </Provider>, document.getElementById('app'));