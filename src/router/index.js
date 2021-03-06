import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index.vue";
import login from "../components/auth/login.vue";
import register from "../components/auth/register.vue";
import resetPassword from "../components/auth/resetPassword.vue";
// import modal from "../components/modal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/resetPassword",
    name: "resetPassword",
    component: resetPassword,
  },
  // {
  //   path: "/modal",
  //   name: "modal",
  //   component: modal,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
