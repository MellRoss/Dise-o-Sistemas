import Property from '../Property.vue'
import PropertyTable from '../Views/PropertyTable.vue';
import PropertyCreate from '../Views/PropertyCreate.vue';
import PropertyUpdate from '../Views/PropertyUpdate.vue';
import PropertiesDetails from '../Views/PropertyDetails.vue';

const PropertyRoute =
    {
        path: '/properties',
        meta: {
            name: 'Propiedades'
        },
        component:  Property,
        children: [
            {
                path: '',
                component: PropertyTable,
                meta: { name: 'Index', path: 'properties', permission: 'READ' }
            }, {
                path: 'create',
                component: PropertyCreate,
                meta: { name: 'Crear', path: 'properties', permission: 'CREATE' }
            }, {
                path: 'update/:id',
                component: PropertyUpdate,
                meta: { name: 'Editar', path: 'properties', permission: 'READ' }
            }, {
                path: 'details/:id',
                component: PropertiesDetails,
                meta: { name: 'Detalles', path: 'properties', permission: 'READ' }
            },
        ]
    };

export default PropertyRoute
