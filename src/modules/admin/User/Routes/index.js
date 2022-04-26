import User from '../User.vue'
import UserTable from '../Views/UserTable.vue';
import UserCreate from '../Views/UserCreate.vue';
import UserUpdate from '../Views/UserUpdate.vue';
import UserDetails from '../Views/UserDetails';

const UserRoute =
    {
        path: '/users',
        meta: {
            name: 'Usuarios'
        },
        component:  User,
        children: [
            {
                path: '',
                component: UserTable,
                meta: { name: 'Index', path: 'users', permission: 'READ' }
            }, {
                path: 'create',
                component: UserCreate,
                meta: { name: 'Crear', path: 'users', permission: 'CREATE' }
            }, {
                path: 'update/:id',
                component: UserUpdate,
                meta: { name: 'Actualizar', path: 'users', permission: 'UPDATE' }
            }, {
                path: 'details/:id',
                component: UserDetails,
                meta: { name: 'Detalles', path: 'users', permission: 'READ' }
            }
        ]
    };

export default UserRoute
