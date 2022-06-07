<template>
  <div>
      <!-- 通过绑定函数，实现子给父传参数 -->
    <School :getSchoolName='getSchoolName'/>
    <!-- 自定义事件传值 -->
    <!-- <Student v-on:dayin='getStudentName'/> -->

    <!-- ref传值 -->
    <Student ref='student'/>
  </div>
</template>
<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  methods: {
      getSchoolName(name) {
          console.log('school: ' + name);
      },
      getStudentName(name) {
          console.log('student: '+ name);
      }
  },
  mounted() {
      //this.$refs.student获取ref所在的VC实例对象
      this.$refs.student.$on('dayin', this.getStudentName);
  }
};
</script>
