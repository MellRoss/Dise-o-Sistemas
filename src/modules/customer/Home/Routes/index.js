import Home from '../Home'
import HomeView from '../Views/HomeView'
import AccessDenied from '@/components/AccessDenied'

const HomeRoute =
    {
        path: '/',
        meta: {
            name: 'Inicio'
        },
        component: Home,
        children: [
            {
                path: '/',
                component: HomeView,
                meta: { name: 'Home' }
            },{
                path: '/access-denied',
                component: AccessDenied,
                meta: { name: 'Access denied' }
            }
        ]
    };

export default HomeRoute
