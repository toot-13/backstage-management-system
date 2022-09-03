import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./../components/Home.vue"
import Welcom from "./../components/Welcom.vue"
import Login from "./../components/Login.vue"

const routes = [{
    name: "Home",
    path: '/',
    component: Home,
    redirect: '/welcom',
    children: [
        { name: 'Welcom', path: '/welcom', component: Welcom },
        { name: 'Login', path: '/login', component: Login }
    ]
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router