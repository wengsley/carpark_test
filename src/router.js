import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>import("@/pages/Home")
    },
    {
        path: "*",
        name: "error",
        component: () =>
            import(/* webpackChunkName: "error" */ "@/pages/Error")
    }
];


const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});


export default router;