import Dashboard from '../Dashboard'
import DashboardView from '../Views/DashboardView'
import AccessDenied from '@/components/AccessDenied'

const DashboardRoute =
    {
        path: '/',
        meta: {
            name: 'Inicio'
        },
        component: Dashboard,
        children: [
            {
                path: '/',
                component: DashboardView,
                meta: { name: 'Dashboard' }
            },{
                path: '/access-denied',
                component: AccessDenied,
                meta: { name: 'Access denied' }
            }
        ]
    };

export default DashboardRoute
