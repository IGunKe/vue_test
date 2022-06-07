<template>
    <div class="box_header">
        <input type="text" name="" id="" placeholder="请输入内容">
    </div>
</template>
<script>
export default {
    name: 'MyHeader'
}
</script>
<style lang="less" scoped>
.box_header {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}
input {
    height: 100%;
}
</style>