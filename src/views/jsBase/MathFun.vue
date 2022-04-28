<template>
  <div>
    <p>Math基础</p>
  </div>
</template>
<script>
export default {
  name: "MathFun",
  data() {
    return {};
  },
  components: {},
  created() {
    /**
     * Math 用于 Number 类型,拥有一些数学常数属性和数学函数方法,Math 不是一个函数对象
     *
     * Math 不是一个构造器。Math 的所有属性与方法都是静态的。引用圆周率的写法是 Math.PI，
     * 调用正余弦函数的写法是 Math.sin(x)，x 是要传入的参数。Math 的常量是使用
     * JavaScript 中的全精度浮点数来定义的。
     *
     * */
    // // 欧拉常数，也是自然对数的底数，约等于 2.718。
    // console.log("Math.E", Math.E);  //  Math.E 2.718281828459045
    // // 2 的自然对数，约等于 0.693。
    // console.log("Math.LN2", Math.LN2);  //  Math.LN2 0.6931471805599453
    // // 10 的自然对数，约等于 2.303。
    // console.log("Math.LN10", Math.LN10);  //  Math.LN10 2.302585092994046
    // // 以 2 为底的 E 的对数，约等于 1.443。
    // console.log("Math.LOG2E", Math.LOG2E);  //  Math.LOG2E 1.4426950408889634
    // // 以 10 为底的 E 的对数，约等于 0.434。
    // console.log("Math.LOG10E", Math.LOG10E);  //  Math.LOG10E 0.4342944819032518
    // // 圆周率，一个圆的周长和直径之比，约等于 3.14159。
    // console.log("Math.PI", Math.PI);  //  Math.PI 3.141592653589793
    // // 计算圆周长
    // function calculateCircumference(radius) {
    //   return 2 * Math.PI * radius;
    // }
    // console.log("calculateCircumference(1)", calculateCircumference(1)); // calculateCircumference(1) 6.283185307179586
    // // 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数  1 2 ，约等于 0.707。
    // console.log("Math.SQRT1_2", Math.SQRT1_2);  //  Math.SQRT1_2 0.7071067811865476
    // // 2 的平方根，约等于 1.414。
    // console.log("Math.SQRT2", Math.SQRT2);  //  Math.SQRT2 1.4142135623730951
    /**
     * math常用方法
     *
     * */
    // Math.abs()  // 指定数字 “x“ 的绝对值
    // Math.abs("-1"); // 1
    // Math.abs(-2); // 2
    // Math.abs(null); // 0
    // Math.abs("string"); // NaN
    // Math.abs(); // NaN

    // // Math.ceil() 返回大于或等于一个给定数字的最小整数。
    // console.log(Math.ceil(0.95));
    // // 1
    // console.log(Math.ceil(4));
    // // 4
    // console.log(Math.ceil(7.004));
    // // 8
    // console.log(Math.ceil(-7.004));
    // // -7
    // // Math.floor() 返回小于或等于一个给定数字的最大整数, Math.floor()为向下取整。
    // Math.floor(45.95);
    // // 45
    // Math.floor(45.05);
    // // 45
    // Math.floor(4);
    // // 4
    // Math.floor(-45.05);
    // // -46
    // Math.floor(-45.95);
    // // -46
    // // Math.max() 返回一组数当中的最大值
    // console.log(Math.max(1, 3, 2));
    // // 3
    // console.log(Math.max(-1, -3, -2));
    // // -1
    // const array1 = [1, -3, 2];
    // console.log(Math.max(...array1));
    // // 3
    // // Math.min() 返回零个或更多个数值的最小值。
    // console.log(Math.min()); // Infinity
    // console.log(Math.min(1, 2, 3, -4)); // -4
    // // 使用 Math.min() 裁剪值（Clipping a value）
    // function f(x) {
    //   if (x > 5) {
    //     return (x = 5);
    //   }
    //   return (x = 6);
    // }
    // var finalMin = Math.min(f(2), 2, 3, 4, 5, 30);
    // console.log("finalMin", finalMin);  // 2

    // // Math.round() 函数返回一个数字四舍五入后最接近的整数。
    // console.log(Math.round(20.49)); //20
    // console.log(Math.round(20.5)); //21
    // console.log(Math.round(-20.5)); //-20
    // console.log(Math.round(-20.51)); //-21

    // // Math.sqrt() 返回一个数的平方根
    // function calcHypotenuse(a, b) {
    //   return Math.sqrt(a * a + b * b);
    // }
    // console.log(calcHypotenuse(3, 4));
    // // 5
    // console.log(calcHypotenuse(5, 12));
    // // 13
    // console.log(calcHypotenuse(0, 0));
    // // 0

    /**
     *
     * Math.random() 函数返回一个浮点数
     * 伪随机数在范围从0到小于1，也就是说，从0（包括0）往上，但是不包括1（排除1），
     * 然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。
     *
     * */

    // console.log(Math.random()); 

    // function getRandomNumber(min, max) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    // }
    // console.log(getRandomNumber(2, 100));
  },
};
</script>