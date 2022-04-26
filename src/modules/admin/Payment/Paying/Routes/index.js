import PayingTable from '../Views/PayingTable.vue';
import PayingCreate from '../Views/PayingCreate.vue';
import PayingCreate2 from '../Views/PayingCreate2.vue';
import PayingAlquiler from '../Views/PayingAlquiler.vue';

const PayingRoute = [
    {
        path:'',
        component: PayingTable,
        meta: { name: 'Index', group: 'payment', path: 'paying', permission: 'READ' }
    },
    {
        path:'create',
        component: PayingCreate,
        meta: { name: 'PayingCreate', group: 'payment', path: 'paying', permission: 'CREATE' }
    },
	{
        path:'create2',
        component: PayingCreate2,
        meta: { name: 'PayingCreate2', group: 'payment', path: 'paying', permission: 'CREATE' }
    },
    {
        path:'alquiler',
        component: PayingAlquiler,
        meta: { name: 'PayingAlquiler', group: 'payment', path: 'paying', permission: 'CREATE' }
    },
]

export default PayingRoute
