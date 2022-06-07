<template>
    <div class='box'>
        <h2>schoolName: {{name}}</h2>
        <button @click='sendSchoolName'>打印</button>
    </div>
</template>
<script>
export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
        return {
            name: '黑马'
        }
    },
     methods: {
        sendSchoolName() {
            this.getSchoolName(this.name);
        }
    }
}
</script>
<style lang="less" scoped>
.box {
    background-color: skyblue;
}
</style>