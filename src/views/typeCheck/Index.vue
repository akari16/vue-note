<template>
  <div>
    <div>JavaScript数据类型校验</div>
    <toString />
    <constructor />
  </div>
</template>
<script>
import toString from "./toString.vue";
import constructor from "./constructor.vue";
export default {
	name: "typeCheck",
	data() {
		return {};
	},
	components: { toString, constructor },
	created() {
		// 基本数据类型
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
		let setObj1 = new Set();
		let setObj2 = new Set([1, 2, 3]);
		let mapObj = new Map();
		/**
		 * typeof 操作符
		 *
		 * 返回一个字符串，表示未经计算的操作数的类型。
		 *
		 * */
		// console.log(typeof str); //  string
		// console.log(typeof num); //  number
		// console.log(typeof boo); //  boolean
		// console.log(typeof undef); //  undefined
		// console.log(typeof testNull); //  object
		// console.log(typeof symb); //  symbol
		// console.log(typeof bigInt); //  bigint
		// console.log(typeof Object(bigInt)); // object
		// console.log(typeof arr); //  object
		// console.log(typeof func); //  function
		// console.log(typeof obj); //  object
		// console.log(typeof date1); //  object
		// console.log(typeof setObj1); //  object
		// console.log(typeof setObj2); //  object
		// console.log(typeof mapObj); //  object
		/**
		 *
		 * instanceof
		 *
		 * 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
		 *
		 * */
		// console.log(str instanceof String); // false
		// console.log(new String("abc") instanceof String); // true
		// console.log(num instanceof Number); // false
		// console.log(new Number(123) instanceof Number); // true
		// console.log(boo instanceof Boolean); // false
		// console.log(new Boolean(true) instanceof Boolean); // false
		// console.log(undef instanceof undefined);
		// Uncaught TypeError: Right-hand side of 'instanceof' is not an object
		// console.log(testNull instanceof null);
		// Uncaught TypeError: Right-hand side of 'instanceof' is not an object
		// console.log(symb instanceof Symbol); // false Symbol不是构造函数，没有new操作符
		// console.log(bigInt instanceof BigInt); // false
		// console.log(Object(BigInt("22")) instanceof Object); // true
		// console.log(Object(BigInt("22")) instanceof BigInt); // true
		// console.log(arr instanceof Array); // true
		// console.log(arr instanceof Object); // true
		// console.log(func instanceof Function); // true
		// console.log(func instanceof Object); // true
		// console.log(obj instanceof Object); // true
		// console.log(obj instanceof Function); // false
		// console.log(null instanceof Object); // false
		// console.log(date1 instanceof Object); // true
		// console.log(setObj1 instanceof Object); //  true
		// console.log(setObj2 instanceof Object); //  true
		// console.log(mapObj instanceof Object); //  true
		// console.log(setObj1 instanceof Array); //  false
		// console.log(setObj2 instanceof Array); //  false
		// console.log(mapObj instanceof Array); //  false

		/**
		 *
		 * 自定义构造函数
		 *
		 * */
		// function testFun(){};
		// let newFun = new testFun();
		// console.log(testFun instanceof Function); // true
		// console.log(testFun instanceof Object); // true
		// console.log(newFun instanceof testFun); // true
		// console.log(newFun instanceof Function); // false
		// console.log(newFun instanceof Object); // true

		/**
		 *
		 * 更多操作方法
		 *
		 * */
		console.log(Array.isArray([1, 2]));
		// // 判断空对象
		function isEmptyObj(obj) {
		  for (name in obj) {
		    console.log(name);
		    return false; // 不是空对象
		  }
		  return true;
		}
		console.log(isEmptyObj({}));  // true
	},
};
</script>