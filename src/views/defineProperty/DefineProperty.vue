<template>
  <div>
    <p>Object.defineProperty</p>
    <p>
      <span style="cursor: pointer; color: red" @click="handleUser"
        >点击修改不在data状态下的值</span
      >
    </p>
    <p>
      <span style="cursor: pointer; color: red" @click="handleSet"
        >点击$set修改属性值</span
      >
    </p>
    <p>用户信息: name {{ defaultUser.name }}, age: {{ defaultUser.age }}</p>
    <p>通过$set修改的值：{{ setData.name }}</p>
  </div>
</template>
<script>
import testData from "./test.json";
export default {
  name: "deepClone",
  data() {
    return {
      defaultUser: {
        name: "张三",
      },
      setData: {},
    };
  },
  components: {},
  created() {
    // 基本使用
    /*
     * obj: 要在其上定义属性的对象
     * prop: 要定义或修改的属性的名称或Symbol
     * descriptor: 定义或修改的属性的描述符
     * Object.defineProperty(obj, prop, descriptor)
     *
     * @descriptor
     *
     * configurable	为 true 时，属性才能重新被定义（再写一次Object.defineProperty()）。默认为 false。
     * enumerable	为 true 时，该属性才能够出现在对象的枚举属性中，即可以使用for in循环访问。默认为 false。
     * writable	为 true 时，value属性值才能被修改。默认为 false，value属性值是只读的。
     * value	该属性对应的初始值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
     * get	一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行。默认为 undefined。
     * set	一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。默认为 undefined。
     * get 和 set 它们与value和writable是互斥的。一旦使用它们，则这个属性就没有保存属性值的能力
     *
     *
     */
    let userInfo = {
      age: "11",
    };
    // console.log("初始userInfo：", userInfo);
    // // Object.defineProperty新增对象属性
    // Object.defineProperty(userInfo, "name", {
    //   value: "zhangsan",
    //   enumerable: false, //将enumerable设为true 才能够出现在对象的枚举属性
    // });
    // console.log("设置name后的userInfo:", userInfo);
    // console.log("设置name后的userInfo属性:", Object.keys(userInfo));

    // 使用Object.defineProperty修改和监听属性值的变化
    let initAge = null;
    Object.defineProperty(userInfo, "age", {
      enumerable: true,
      configurable: true,
      get: function () {
        console.log("get属性方法,当前对象：", this);
        return initAge;
      },
      set: function (newValue) {
        console.log("set属性方法", newValue);
        initAge = newValue;
      },
    });
    userInfo.age = "30";
    console.log("userInfo", userInfo);
  },

  methods: {
    handleUser() {
      this.defaultUser.age = "23";
      console.log("数据已经发生更改，但是视图没有发生更新", this.defaultUser);
    },
    handleSet() {
      this.$set(this.setData, "name", "张三");
    },
  },
};
</script>