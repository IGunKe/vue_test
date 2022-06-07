<template>
  <div>
    <button @click="getName">获取</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getName() {
      axios.get("http://127.0.0.1/student").then(
        (response) => {
            console.log('请求成功',response.data);
        },
        (error) => {
            console.log(error.message);
        }
      );
    },
  },
};
</script>
