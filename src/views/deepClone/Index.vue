<template>
  <div>js数据类型-浅拷贝-深拷贝</div>
</template>
<script>
export default {
  name: "deepClone",
  data() {
    return {
      name: 1,
    };
  },
  components: {},
  created() {
    let userInfo = {
      name: "zhangsan",
      age: "29",
      say: function () {
        console.log("hello");
      },
      child: {
        name: "zhangsan01",
      },
    };

    // // 对象解构赋值...
    // let info = { ...userInfo };
    // info.name = "lisi";
    // info.child.name = "lisi001";
    // info.say();

    // let info = {};
    // Object.assign(info, userInfo);
    // info.name = "lisi";
    // info.child.name = "lisi001";
    // console.log("userInfo", userInfo);
    // console.log("info", info);

    // let info = JSON.parse(JSON.stringify(userInfo));
    // info.name = "lisi";
    // info.child.name = "lisi001";
    // console.log("userInfo", userInfo);
    // console.log("info", info);

    let info = {};
    for (let key in userInfo) {
      info[key] = userInfo[key];
    }
    info.name = "lisi";
    info.child.name = "lisi001";
    console.log("userInfo", userInfo);
    console.log("info", info);
  },
};
</script>