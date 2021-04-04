import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('@/views/ViewHome.vue');

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
