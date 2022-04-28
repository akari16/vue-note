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
     * constructor
     *
     * 返回创建实例对象的 构造函数的引用。
     *
     * 注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串
     *
     * 构造函数.prototype.constructor()
     *
     * */

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
    function constructorFn() {
      this.name = "11";
    }
    let con1 = new constructorFn();
    let setObj1 = new Set();
    let setObj2 = new Set([1, 2, 3]);
    let mapObj = new Map();

    // console.log(str.constructor); // String
    // console.log(num.constructor); // Number
    // console.log(boo.constructor); // Boolean
    // // console.log(testUndefined.constructor); // Cannot read property 'constructor' of undefined
    // // console.log(testNull.constructor); // Cannot read property 'constructor' of null
    // console.log(symb.constructor); // Symbol
    // console.log(bigInt.constructor); // BigInt
    // console.log(arr.constructor); // Array
    // console.log(func.constructor); // Function
    // console.log(obj.constructor); // Object
    // console.log(date1.constructor); // Date
    // console.log(constructorFn.constructor); // Function
    // console.log(con1.constructor); // constructorFn
    // console.log(setObj1.constructor); // Set
    // console.log(setObj2.constructor); // Set
    // console.log(mapObj.constructor); // Map

    // /**
    //  *
    //  * 构造函数校验
    //  *
    //  * */

    // console.log(Function.constructor); // Function
    // console.log(Object.constructor); // Function
    // console.log(Array.constructor); // Function
    // console.log(Date.constructor); // Function
  },
};
</script>