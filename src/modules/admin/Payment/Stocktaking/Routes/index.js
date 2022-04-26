import StocktakingTable from '../Views/StocktakingTable.vue';
import StocktakingCreate from '../Views/StocktakingCreate.vue';

const StocktakingRoute = [
    {
        path:'',
        component: StocktakingTable,
        meta: { name: 'Index', group: 'payment', path: 'stocktaking', permission: 'READ' }
    },
    {
        path:'create',
        component: StocktakingCreate,
        meta: { name: 'StocktakingCreate', group: 'payment', path: 'stocktaking', permission: 'CREATE' }
    },
]

export default StocktakingRoute
