import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import Men from '../pages/Gender/Men.vue'
import Women from '../pages/Gender/Women.vue'
import Children from '../pages/Gender/Children.vue'
import Cart from '../pages/Cart.vue'
import Details from '../pages/Details.vue'

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/home',
        name:'Home',
        component:Home,
    },
    {
        path:'/about',
        name:'About',
        component:About,
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
    {
        path:'/men',
        name:'Men',
        component:Men
    },
    {
        path:'/women',
        name:'Women',
        component:Women
    },
    {
        path:'/children',
        name:'Children',
        component:Children
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart
    },
    {
        path:'/details',
        name:'Details',
        component:Details
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router