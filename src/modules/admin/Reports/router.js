import NotFound from '@/components/NotFound';
import Reports from './Reports';
import Customers from './Clientes/Customers';
import CustomersRoute from './Clientes/Routes';
import Rentals from './Rentals/Rentals';
import RentalsRoute from './Rentals/Routes';
import Sales from './Sales/Sales';
import SalesRoute from './Sales/Routes';
import Properties from './Properties/Properties';
import PropertiesRoute from './Properties/Routes';

const ReportsRoute = {

    path: '/reports',
    meta: {
        name: 'Reportes'
    },
    component: Reports,
    children:[
        {
            path: '/',
            component: NotFound,
        },
        {
            path: 'sales',
            meta: { name: 'Ventas' },
            component: Sales,
            children: SalesRoute
        },
        {
            path: 'rentals',
            meta: { name: 'Alquileres' },
            component: Rentals,
            children: RentalsRoute
        },
        {
            path: 'customers',
            meta: { name: 'Clientes' },
            component: Customers,
            children: CustomersRoute
        },
        {
            path: 'properties',
            meta: { name: 'Propiedades' },
            component: Properties,
            children: PropertiesRoute
        }
    ]    
};

export default ReportsRoute
