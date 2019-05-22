import Vue from 'vue'
import Router from 'vue-router'

// 路由组件
import Home from './components/HelloWorld.vue'
import SystemManage from './components/content/systemManage/SystemManage'
  import UserManage from './components/content/systemManage/userManage/UserManage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/systemManage',
          name: 'systemManage',
          component: SystemManage,
          children: [
            {
              path: '/home/systemManage/userManage',
              name: 'userManage',
              component: UserManage
            }
          ]
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
