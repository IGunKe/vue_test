<template>
    <div>
        <div class='wrap'>
            <div class='wrap_header'>
                <MyHeader/>
            </div>
            <div class='wrap_List'>
                <List/>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";
import Item from "./components/Item.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    List,
    Item,
    MyFooter,
  },
};
</script>

<style lang="less" scoped>
.wrap {
    height: 400px;
    width: 400px;
    background-color: pink;
    margin: 20px auto;
    padding: 5px;
}
.wrap_header {
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.wrap_List {
    margin-top: 5px;
    height: 250px;
    width: 100%;
    background-color: #fff;
}

</style>