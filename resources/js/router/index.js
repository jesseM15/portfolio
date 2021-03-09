import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../components/views/ViewHome.vue');
const About = () => import('../components/views/ViewAbout.vue');

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
