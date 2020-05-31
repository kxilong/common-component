import Vue from 'vue'
import Router from 'vue-router'
import Splitpane from '@/components/Splitpane'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splitpane',
      component: Splitpane
    }
  ]
})
