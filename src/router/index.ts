import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import AuthRegister from "@/views/Auth/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/auth/register",
        name: "AuthRegister",
        component: AuthRegister
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
