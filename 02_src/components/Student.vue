<template>
  <div class='demo'>
    <h2 @click="showName">姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: "xdj",
      age: 12,
    };
  },
  //混入复用配置,要用【】接收
  mixins: [mixin]
  //scoped可以限定作用域，防止不同组件样式类名冲突
};
</script>
<style lang="less" scoped>
    .demo {
        background-color: pink;
    }
</style>

