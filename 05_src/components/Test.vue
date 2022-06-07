<template>
  <div>
    <button @click="isShow = !isShow">显示</button>
    <!-- appear控制刷新是是否显示动画 -->
    <transition-group 
        name="animate__animated animate__bounce" 
        enter-active-class='animate__backInDown'
        leave-active-class='animate__backOutUp'
        :appear="false">
      <h2 v-show="isShow" key="001">hello</h2>
    </transition-group>
  </div>
</template>
<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
<style lang="less" scoped>
h2 {
  width: 500px;
  height: 200px;
  background-color: pink;
}
</style>