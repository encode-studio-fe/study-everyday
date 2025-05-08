// 题目
/*
new Promise((resolve, reject) => {
		reject(1);
		console.log(2);
		resolve(3);
		console.log(4);
}).then((res) => { console.log(res) })
		.catch(res => { console.log('reject1') })
try {
		new Promise((resolve, reject) => {
				throw 'error'
		}).then((res) => { console.log(res) })
				.catch(res => { console.log('reject2') })
} catch (err) {
		console.log(err)
}

*/

/*
2
4
reject1
reject2

*/
