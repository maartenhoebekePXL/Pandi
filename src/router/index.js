import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('../views/ProductView.vue'),
        },
        {
            path: '/productDetail/:id', // Updated path to include a dynamic parameter ':id'
            name: 'productDetail',
            component: () => import('../views/ProductDetailView.vue'),
        },
        {
            path: '/shoppingCart',
            name: 'shoppingCart',
            component: () => import('../views/ShoppingCartView.vue'),
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import('../views/CheckoutView.vue'),
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: () => import('../views/ConfirmationView.vue'),
        },
    ],
});

export default router;