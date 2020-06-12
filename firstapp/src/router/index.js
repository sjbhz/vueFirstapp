import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NameList from '@/components/NameList'
import Appp from '@/components/demo/Appp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/name',
      name: 'NameList',
      component: NameList
    },
    {
      path: '/Appp',
      name: 'Appp',
      component: Appp
    }
  ]
})
