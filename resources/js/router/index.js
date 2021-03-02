import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/views/ViewHome.vue";
import About from "../components/views/ViewAbout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
