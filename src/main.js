// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ionic from '@ionic/vue';



// require('ionicons/dist/css/ionicons.min.css');
require('@ionic/core/css/ionic.bundle.css');

import LineChart from './components/charts/Line';
import BarChart from './components/charts/Bar';

Vue.component('LineChart', LineChart);
Vue.component('BarChart', BarChart);

Vue.use(Ionic);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
