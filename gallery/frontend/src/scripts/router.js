
// root 경로로 들어올때는 컴포넌트를 home으로 연결해라
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart},
    {path: '/orders', component: Orders},
    {path: '/order', component: Order}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;