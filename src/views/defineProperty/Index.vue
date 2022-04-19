<template>
  <div>
    <p>对象操作</p>
    <DefineProperty />
    <!-- <ProxyBase /> -->
  </div>
</template>
<script>
import DefineProperty from "./DefineProperty.vue";
import ProxyBase from "./ProxyBase.vue";
export default {
  name: "ObjectOpration",
  data() {
    return {};
  },
  components: {
    DefineProperty,
    ProxyBase,
  },
  created() {},
};
</script>