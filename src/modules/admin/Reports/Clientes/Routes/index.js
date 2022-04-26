//importo mis componentes
import CustomerTable from '../Views/CustomerTable';

const CustomersRoute = [
    {
        path:'',
        component: CustomerTable,
        meta: { name: 'Index', group: 'Reports', path: 'customers', permission: 'READ' }
                
    },

]
export default CustomersRoute
