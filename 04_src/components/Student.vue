<template>
    <div class='box'>
        <h2>student: {{name}}</h2>
        <button @click='getStudentName'>打印</button>
        <button @click='unbind'>解绑</button>
    </div>
</template>
<script>
export default {
    name: 'Student',
    
    data() {
        return {
            name: 'xdj'
        }
    },
    methods: {
        getStudentName() {
            //用于触发VC实例上的自定义事件
            this.$emit('dayin', this.name);
        },
        unbind() {
            //解绑一个合适，多个不适应
            //this.$off('dayin');
            this.$off(['dayin', ])
        }
    }
   
}
</script>
<style lang="less" scoped>
.box {
    background-color: pink;
}
</style>