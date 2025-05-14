import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../Views/Dashboard.vue";
import BWIM from "../Views/BWIM.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/B-WIM", name: "BWIM", component: BWIM },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
