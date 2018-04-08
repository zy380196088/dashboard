/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
// import LineArea from '@/components/LineArea';
import Layout from '@/components/layout/Layout';
import Create from "@/components/drill/create";
import Details from "@/components/drill/details";
import Records from "@/components/drill/records";

const Routes = [{
  path: '/details',
  name: 'Details',
  component: Details
},
{
  path: '/create',
  name: 'Create',
  component: Create
},{
  path: '/records',
  name: 'Records',
  component: Records
},
];
Vue.use(Router);

export default new Router({
  routes: Routes
});
