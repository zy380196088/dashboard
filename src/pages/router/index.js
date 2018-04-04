/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
// import LineArea from '@/components/LineArea';
import Layout from '@/components/layout/Layout';
import CreateDrill from "@/components//drill/create";

const Routes = [{
  path: '/',
  name: 'Layout',
  component: Layout
},
{
  path: '/drill/create',
  name: 'Drill',
  component: CreateDrill
},
];
Vue.use(Router);

export default new Router({
  routes: Routes
});
