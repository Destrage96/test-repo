import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/removed-users",
    name: "removed-users",
    component: () =>
      import(/* webpackChunkName: "live-verkaufen" */ "@/views/RemovedUsers.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
