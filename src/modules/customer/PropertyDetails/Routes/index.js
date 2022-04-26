import PropertyDetails from '../PropertyDetails.vue'
import DetailsView from '../Views/DetailsView.vue';

const PropertyDetailsRoute =
    {
        path: '/details',
        meta: {
            name: 'Detalles'
        },
        component:  PropertyDetails,
        children: [
            {
                path: '',
                component: DetailsView,
                meta: { name: 'Index', path: 'details', permission: 'READ' }
            }
        ]
    };

export default PropertyDetailsRoute
