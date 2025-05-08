// 题目
/*
const first = () =>
	new Promise((resolve, reject) => {
		console.log(3);
		let p = new Promise((resolve, reject) => {
			console.log(7);
			setTimeout(() => {
				console.log(1);
			}, 0);
			setTimeout(() => {
				console.log(2);
				resolve(3);
			}, 0);
			resolve(4);
		});
		resolve(2);
		p.then((arg) => {
			console.log(arg, 5);
		});
		setTimeout(() => {
			console.log(6);
		}, 0);
	});
first().then((arg) => {
	console.log(arg, 7);
	setTimeout(() => {
		console.log(8);
	}, 0);
});
setTimeout(() => {
	console.log(9);
}, 0);
console.log(10);

*/

/*

3
7
10
4 5
2 7
1
2
6
9
8
*/
