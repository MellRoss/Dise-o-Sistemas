import ClosingTable from '../Views/ClosingTable.vue';
import ClosingDetails from '../Views/ClosingDetails.vue';

const ClosingRoute = [
    {
        path:'',
        component: ClosingTable,
        meta: { name: 'Index', group: 'payment', path: 'closing', permission: 'READ' }
    },
    {
        path:'details',
        component: ClosingDetails,
        meta: { name: 'ClosingDetails', group: 'payment', path: 'closing', permission: 'READ' }
    },
]

export default ClosingRoute
