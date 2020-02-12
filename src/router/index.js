import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login';
import Meetings from '../views/Meetings';
import Register from '../views/Register';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/meetings',
        name: 'meetings',
        component: Meetings,
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    routes,
});

export default router;
