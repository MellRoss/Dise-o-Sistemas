import Catalog from '../Catalog.vue'
import ListSearch from '../Views/ListSearch.vue';

const CatalogRoute =
    {
        path: '/list',
        meta: {
            name: 'Catálogo'
        },
        component:  Catalog,
        children: [
            {
                path: '',
                component: ListSearch,
                meta: { name: 'Index', path: 'catalog', permission: 'READ' }
            }
        ]
    };

export default CatalogRoute
