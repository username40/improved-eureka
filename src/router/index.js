import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import Adlist from '@/components/Ads/Adlist'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: Adlist,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'new',
      component: NewAd,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})

export default router
