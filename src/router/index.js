import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/helloWorld/helloWorld.vue'
import First from '@/view/first/first.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: First
    }
  ]
})
