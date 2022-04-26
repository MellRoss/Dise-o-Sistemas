import PropertiesTable from '../Views/PropertiesTable.vue'
import PropertiesDetails from '../Views/PropertiesDetails.vue';


const PropertiesRoute = [
    {
        path:'',
        component: PropertiesTable,
        meta: { name: 'Index', group: 'Reports', path: 'properties', permission: 'READ' }
                
    },
    {
        path:'create',
        component: PropertiesDetails,
        meta: { name: 'Index', group: 'Reports', path: 'properties', permission: 'CREATE' }
                
    },
]
export default PropertiesRoute