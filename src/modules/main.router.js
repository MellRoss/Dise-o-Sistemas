import Constants from '@/plugins/constants'

import DashboardRoute from './admin/Dashboard/Routes'
import AppointmentRoute from './admin/Appointment/Routes';
import PaymentRoute from '#/admin/Payment/router';
import UserRoute from '#/admin/User/Routes';
import PropertyRoute from '#/admin/Property/Routes';
import ReportsRoute from '#/admin/Reports/router'
import HomeRoute from '#/customer/Home/Routes';
import CatalogRoute from '#/customer/Catalog/Routes';
import PropertyDetailsRoute from '#/customer/PropertyDetails/Routes';

const ModulesRouter = []

const AdminRouter = [
    DashboardRoute,
    AppointmentRoute,
    PaymentRoute,
    UserRoute,
    PropertyRoute,
    ReportsRoute,
    
    
]
const CustomerRouter = [
    HomeRoute,
    CatalogRoute,
    PropertyDetailsRoute
]


ModulesRouter.push(...Constants.APP == 'admin' ? AdminRouter : CustomerRouter)

export default ModulesRouter;
