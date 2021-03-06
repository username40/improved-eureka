import Vue from 'vue'
import App from './App.vue'
import BuyModalComponent from '@/components/shared/BuyModal'
import store from './store/index'
import router from './router'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.component('app-buy-modal', BuyModalComponent)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: function () {
    fb.initializeApp({
      apiKey: 'AIzaSyCr3cCybD5v6zvtewwyTCfplfOBSKbhT9E',
      authDomain: 'rve-ads.firebaseapp.com',
      databaseURL: 'https://rve-ads.firebaseio.com',
      projectId: 'rve-ads',
      storageBucket: 'rve-ads.appspot.com',
      messagingSenderId: '929529328530',
      appId: '1:929529328530:web:df769ee614a1b6bb2a474b',
      measurementId: 'G-TCCL3ZCXP0'
    });
    fb.auth().onAuthStateChanged(user => {
      this.$store.dispatch('autoLoginUser', user)
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
