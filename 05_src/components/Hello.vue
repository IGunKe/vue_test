<template>
  <div>
    <button @click="isShow = !isShow">显示</button>
    <!-- appear控制刷新是是否显示动画 -->
    <transition-group name='hello' :appear='false'>
        <h2 v-show="isShow" key='001'>hello</h2>
        <h2 v-show="!isShow" key='002'>world</h2>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Hello",
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
.hello-enter-active {
    animation: yidong 1s;
}
.hello-leave-active {
    animation: yidong 1s reverse;
}
@keyframes yidong {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>