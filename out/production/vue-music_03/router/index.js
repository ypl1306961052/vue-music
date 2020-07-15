import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/main.vue"
import Recommend from "../views/Recommend.vue"
import Singer from "../views/singer/Singer.vue"
import Rank from "../views/Rank.vue"
import Search from "../views/Search.vue"
// import VuewAwesomeSiwper from 'vue-awesome-swiper'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(VuewAwesomeSiwper)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: "",
        name: "推荐", component: Recommend
      },
      {
        path: "recommend",
        name: "推荐", component: Recommend
      },
      {
        path: "singer",
        name: "歌手", component: Singer
      },
      {
        path: "rank",
        name: "排行", component: Rank
      },
      {
        path: "search",
        name: "搜索", component: Search
      },
    ]

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
