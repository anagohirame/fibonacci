'use strict';
const dp = new Map();
dp.set(0, 0);
dp.set(1, 1);
function fib(n) {
	if (dp.has(n)) {
		return dp.get(n);
	}
	const value = fib(n-1) + fib(n-2);
	dp.set(n, value);
	return value;
}
const length = 40;
for (let i = 0; i <= length; ++i) console.log(fib(i));
