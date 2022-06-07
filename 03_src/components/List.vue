<template>
  <div>
    <ul>
      <Item v-for="item in todo" :key="item.id" :item='item'></Item>
    </ul>
  </div>
</template>
<script>
import Item from "./Item.vue";

export default {
  name: "List",
  components: {
    Item,
  },
  data() {
    return {
      todo: [
        { id: "001", name: "德国" },
        { id: "002", name: "美国" },
        { id: "003", name: "日本" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
</style>