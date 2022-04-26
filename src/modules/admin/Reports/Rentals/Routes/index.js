import RentalsTable from '../Views/RentalsTable.vue'

const RentalsRoute = [
    {
        path:'',
        component: RentalsTable,
        meta: { name: 'Index', group: 'Reports', path: 'rentals', permission: 'READ' }
                
    },

]
export default RentalsRoute