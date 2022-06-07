import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //render: h => h(App),用于残缺的vue
  render(createElement) {
    return createElement(App);
  }
});
//.$mount('#app')