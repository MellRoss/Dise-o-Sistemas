import SalesTable from '../Views/SalesTable.vue'

const SalesRoute = [
    {
        path:'',
        component: SalesTable,
        meta: { name: 'Index', group: 'Reports', path: 'sales', permission: 'READ' }
                
    },

]
export default SalesRoute