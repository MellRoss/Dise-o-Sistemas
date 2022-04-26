import Vue from 'vue'
import Router from 'vue-router'
import Base from './views/Base.vue'
import ModulesRouter from '../modules/main.router.js'
import Login from '#/admin/Login/Login';
import LoginRoute from '#/admin/Login/Routes';
import NotFound from './components/NotFound'
import store from '../store'
import Constants from '@/plugins/constants';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            meta: { requiresAuth: true, name: 'Base' },
            component: Base,
            children: ModulesRouter,
        }, {
            path: '/login',
            meta: { name: 'login' },
            component: Login,
            children: LoginRoute
        }, {
            path: '*',
            meta: { requiresAuth: true, name: 'Base' },
            component: Base,
            children: [
                {
                    path: '',
                    component: NotFound
                }
            ],
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && !store.state.commons.login && Constants.APP == 'admin') {
        next({path: '/login', query: {redirect: to.fullPath}})
    } else {
        next()
    }
})

export default router
