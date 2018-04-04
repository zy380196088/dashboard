/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
// import LineArea from '@/components/LineArea';
import Layout from '@/components/layout/Layout';
import Create from "@/components/drill/create";
import Details from "@/components/drill/details"
const Routes = [{
  path: '/details',
  name: 'Details',
  component: Details
},
{
  path: '/create',
  name: 'Create',
  component: Create
},
];
Vue.use(Router);

export default new Router({
  routes: Routes
});
