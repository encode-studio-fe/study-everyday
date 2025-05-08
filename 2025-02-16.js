
// 题目
/*
请实现一个 Promise.all
*/


function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		// 转为数组处理字符串等可迭代对象
		const promiseArray = Array.from(promises);
		// 初始化结果数组
		const results = new Array(promiseArray.length);
		let completedCount = 0;
		// 处理空数组直接 resolve
		if (promiseArray.length === 0) {
			resolve(results);
			return;
		}
		// 遍历处理每个 Promise
		for (let i = 0; i < promiseArray.length; i++) {
			Promise.resolve(promiseArray[i])
				.then((result) => {
					results[i] = result; // 按索引存储结果
					completedCount++;
					// 全部完成时 resolve
					if (completedCount === promiseArray.length) {
						resolve(results);
					}
				})
				.catch(reject); // 任一失败则整体 reject
		}
	});
}
