import { createWebHistory, createRouter } from "vue-router";
const Home = () => import('../components/views/ViewHome.vue');
const About = () => import('../components/views/ViewAbout.vue');
const Portfolio = () => import('../components/views/ViewPortfolio.vue');
const Contact = () => import('../components/views/ViewContact.vue');

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
