import {createRouter, createWebHashHistory} from 'vue-router'
import ViewsHome from "@/views/home/ViewsHome";
import ViewsLogin from "@/views/login/ViewsLogin";
import ViewsRegister from '@/views/register/ViewsRegister'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ViewsHome
    },
    {
        path: '/login',
        name: 'login',
        component: ViewsLogin,
        beforeEnter(to, from, next) {
            const {isLogin} = localStorage;
            isLogin ? next({name: 'home'}) : next();
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: ViewsRegister,
        beforeEnter(to, from, next) {
            const {isLogin} = localStorage;
            isLogin ? next({name: 'login'}) : next();
        }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // to:调到哪里的信息
    // from:从哪里调过来的信息
    const {isLogin} = localStorage;
    const {name} = to;
    const isLoginOrRegister = (name === "login" || name === "Register");
    (isLogin || isLoginOrRegister) ? next() : next({name: 'login'});
})
// router.beforeEach((to, from, next) => {
//     const {isLogin} = localStorage;
//     (isLogin || to.name === "login") ? next() : next({name: 'login'});
// })

export default router
