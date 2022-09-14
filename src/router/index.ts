/* eslint-disable prettier/prettier */
import storesPageVue from "@/views/storesPage.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import loginPage from "../views/LoginPage.vue";
import mainPage from "../views/mainPage.vue";
import LeadsPage from "../views/LeadsPage.vue";
import RatingsPage from "../views/RatingsPage.vue"
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "loginPage",
      component: loginPage,
    },
    {
      path: "/mainPage",
      name: "mainPage",
      component: mainPage,
    },
    {
      path: "/stores",
      name: "stores",
      component: storesPageVue,
    },
    {
      path: "/ratings",
      name: "ratings",
      component: RatingsPage,
    },
    {
      path: "/leads",
      name: "Leads",
      component: LeadsPage,
    },
  ],
});

export default router;
