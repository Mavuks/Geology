import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.config.productionTip = false
Vue.use(VueFilterDateFormat);

Vue.component('paginate', Paginate);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
