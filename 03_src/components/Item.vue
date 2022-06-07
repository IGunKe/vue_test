<template>
    <li>
        <label for="">
            <input type="checkbox" name="" id="">
            <span v-text="item.name">xxx</span>
        </label>
        <button>删除</button>
    </li>
</template>
<script>
export default {
    name: 'Item',
    props: ['item']
}
</script>
<style lang="less" scoped>

li {
    list-style: none;
}
</style>