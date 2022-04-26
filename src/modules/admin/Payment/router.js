import NotFound from '@/components/NotFound';
import PaymentView from './Payment';
import Closing from './Closing/Closing'
import ClosingRoute from './Closing/Routes';
import Paying from './Paying/Paying'
import PayingRoute from './Paying/Routes';
import Stocktaking from './Stocktaking/Stocktaking'
import StocktakingRoute from './Stocktaking/Routes';

const PaymentRoute = {

    path: '/payment',
    meta: {
        name: 'Pagos'
    },
    component: PaymentView,
    children:[
        {
            path: '/',
            component: NotFound,
        },{
            path: 'closing',
            meta: { name: 'Cierre de caja' },
            component: Closing,
            children: ClosingRoute
        }
		,{
            path: 'paying',
            meta: { name: 'Registrar pago' },
            component: Paying,
            children: PayingRoute
        }
        ,{
            path: 'stocktaking',
            meta: { name: 'Registrar entrada-salida' },
            component: Stocktaking,
            children: StocktakingRoute
        }
    ]
};

export default PaymentRoute
