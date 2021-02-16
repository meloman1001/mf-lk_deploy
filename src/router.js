import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import requestCRM from "@/views/requests/requestCRM";
import requestFMC from "@/views/requests/requestFMC";
import login from "@/views/login/login";
import changePassword from "@/views/login/changePassword";
import notifications from "@/views/notifications";
import viewingCRM from "@/views/requests/viewingCRM/viewingCRM";
import viewingCRM_more from "@/views/requests/viewingCRM/viewingCRM_more";
import viewingFMC from "@/views/requests/viewingFMC/viewingFMC";
import viewingFMC_more from "@/views/requests/viewingFMC/viewingFMC_more";
import viewingAct from "@/views/requests/viewingAct";
import viewing_users from "@/views/create_users/viewing_users";
import viewing_dealers from "@/views/organization/viewing_dealers";
import packages from "@/views/organization/packages";
import tariffs from "@/views/organization/tariffs";

Vue.use( Router )

export default new Router( {
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      }, {
         path: '/request-CRM',
         name: 'requestCRM',
         component: requestCRM
      }, {
         path: '/request-FMC',
         name: 'requestFMC',
         component: requestFMC
      }, {
         path: '/login',
         name: 'login',
         component: login
      }, {
         path: '/change-password',
         name: 'changePassword',
         component: changePassword
      }, {
         path: '/notifications',
         name: 'notifications',
         component: notifications
      }, {
         path: '/viewingCRM',
         name: 'viewingCRM',
         component: viewingCRM
      }, {
         path: '/viewingCRM/more',
         name: 'viewingCRM_more',
         component: viewingCRM_more
      }, {
         path: '/viewingFMC',
         name: 'viewingFMC',
         component: viewingFMC
      }, {
         path: '/viewingFMC/more',
         name: 'viewingFMC_more',
         component: viewingFMC_more
      }, {
         path: '/viewingAct',
         name: 'viewingAct',
         component: viewingAct
      }, {
         path: '/viewing_users',
         name: 'viewing_users',
         component: viewing_users
      }, {
         path: '/viewing_dealers',
         name: 'viewing_dealers',
         component: viewing_dealers
      }, {
         path: '/packages',
         name: 'packages',
         component: packages
      }, {
         path: '/tariffs',
         name: 'tariffs',
         component: tariffs
      }
   ]
} )