/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import LineArea from '@/components/LineArea';
import Layout from '@/components/layout/Layout';
import Drill from "@/pages/drill/index";
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/createdrill',
      name: 'CreateDrill',
      component: CreateDrill
    },
  ]
})
