<template>
	<div></div>
</template>
<script>
export default {
	name: "toString",
	data() {
		return {};
	},
	mounted() {
		/**
		 * 返回一个表示该对象的字符串
		 *
		 * Object.prototype.toString()
		 *
		 * 每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
		 * 默认情况下，toString() 方法被每个 Object 对象继承。
		 *
		 * 如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。以下代码说明了这一点：
		 *
		 * */

		// let isObj = { name: "zhangsan" };
		// let isBoolean = true;
		// let isNumber = new Number(123);
		// let isString = "abc";
		// let isFun = new Function();
		// console.log(isObj.toString()); // [object Object]
		// console.log(isBoolean.toString()); // true
		// console.log(isNumber.toString()); // 123
		// console.log(isString.toString()); // abc
		// console.log(new Date().toString()); // Thu Apr 28 2022 16:37:19 GMT+0800 (中国标准时间)
		// console.log(isFun.toString()); // function anonymous() {}

		/**
		 *
		 * call() 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数，function.call(thisArg, arg1, arg2, ...)
		 *
		 * apply() 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数，unc.apply(thisArg, [argsArray])
		 *
		 * */

		// call基本使用;
		function a() {
			console.log(this);
		}

		function b() {
			console.log(this);
		}
		a.call(b); //		function b() {}
		b.call(a); //		function a() {}
		/**
		 *
		 * 使用 toString() 检测对象类型可以通过 toString() 来获取每个对象的类型。
		 * 为了每个对象都能通过 Object.prototype.toString() 来检测，
		 * 需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为 thisArg。
		 *
		 * 那么 Object.prototype.toString 相当于 原生构造函数的实例化对象isNumber，传参数给Object.prototype.toString执行
		 * 实际上相当于 toString.call(new ***);
		 *
		 * */
		let str = "abc";
		let num = 123;
		let boo = true;
		let undef = undefined;
		let testNull = null;
		let symb = Symbol("user");
		let bigInt = BigInt(9007199254740999);

		// 复杂-引用数据类型
		let arr = [1, 2, 3, 4];
		let func = function () {};
		let obj = {};
		let date1 = new Date();
		function testFun() {}
		let newTest = new testFun();
		let newFun = new Function();
		let setObj1 = new Set();
		let setObj2 = new Set([1, 2, 3]);
		let mapObj = new Map();

		console.log(Object.prototype.toString.apply(new String("sss"))); // [object String]

		console.log(Object.prototype.toString.apply(str)); // [object String]

		console.log(Object.prototype.toString.call(num)); // [object Number]

		console.log(Object.prototype.toString.call(boo)); // [object Boolean]

		console.log(Object.prototype.toString.call(undef)); // [object Undefined]

		console.log(Object.prototype.toString.call(testNull)); // [object Null]

		console.log(Object.prototype.toString.call(symb)); // [object Symbol]

		console.log(Object.prototype.toString.call(Object(bigInt))); // [object BigInt]

		console.log(Object.prototype.toString.call(bigInt)); // [object BigInt]

		console.log(Object.prototype.toString.apply(arr)); // [object Array]

		console.log(Object.prototype.toString.call(func)); // [object Function]

		console.log(Object.prototype.toString.call(obj)); // [object Object]

		console.log(Object.prototype.toString.call(date1)); // [object Date]

		console.log(Object.prototype.toString.call(testFun)); // [object Function]

		console.log(Object.prototype.toString.call(newTest)); // [object Object]

		console.log(Object.prototype.toString.call(newFun)); // [object Function]

		console.log(Object.prototype.toString.call(setObj1)); // [object Set]

		console.log(Object.prototype.toString.call(setObj2)); // [object Set]

		console.log(Object.prototype.toString.call(mapObj)); // [object Map]
	},
};
</script>