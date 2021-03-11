import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('@/views/ViewHome.vue');
const About = () => import('@/views/ViewAbout.vue');
const Portfolio = () => import('@/views/ViewPortfolio.vue');
const Contact = () => import('@/views/ViewContact.vue');

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
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
