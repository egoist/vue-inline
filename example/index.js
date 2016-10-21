import Vue from 'vue'
import VueInline from '../src'
import App from './App'

Vue.use(VueInline, {
  data: {
    foo: 'inlined foo!',
    bar: 'inlined bar!'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
