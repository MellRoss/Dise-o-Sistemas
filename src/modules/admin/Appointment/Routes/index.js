import Appointment from '../Appointment.vue'
import AppointmentTable from '../Views/AppointmentTable.vue';
import AppointmentCreate from '../Views/AppointmentCreate.vue';
import AppointmentUpdate from '../Views/AppointmentUpdate.vue';
import AppointmentDetails from '../Views/AppointmentDetails';

const AppointmentRoute =
    {
        path: '/appointments',
        meta: {
            name: 'Citas'
        },
        component:  Appointment,
        children: [
            {
                path: '',
                component: AppointmentTable,
                meta: { name: 'Index', path: 'appointments', permission: 'READ' }
            }, {
                path: 'create',
                component: AppointmentCreate,
                meta: { name: 'Crear', path: 'appointments', permission: 'CREATE' }
            }, {
                path: 'create/:id',
                component: AppointmentCreate,
                meta: { name: 'Asignar', path: 'appointments', permission: 'CREATE' }
            }, {
                path: 'update/:id',
                component: AppointmentUpdate,
                meta: { name: 'Editar', path: 'appointments', permission: 'READ' }
            }, {
                path: 'details/:id',
                component: AppointmentDetails,
                meta: { name: 'Detalles', path: 'appointments', permission: 'READ' }
            }
        ]
    };

export default AppointmentRoute
