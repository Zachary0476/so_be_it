import { app } from './index.less'
import Do from './utils/utils'
// import img from './assets/test.jpg'

console.log(app);
Do.doSomething()

const arr = [1, 2, 3, 4, 5]
arr.includes(5) ? console.log(1) : console.log(2);
console.log(123);

import('./utils/utils').then(res => {
	console.log(res);
})