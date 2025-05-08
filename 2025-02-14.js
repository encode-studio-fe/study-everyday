
// 题目
/*
请手写一个instanceof
*/


function myInstanceof(target, origin) {
	// 非object直接返回false
	if (typeof target !== 'object' || target === null) return false;

	var proto = Object.getPrototypeOf(target);
	while (proto) {
		if (proto === origin.prototype) {
			return true
		}
		proto = Object.getPrototypeOf(proto);
	}
	return false
}