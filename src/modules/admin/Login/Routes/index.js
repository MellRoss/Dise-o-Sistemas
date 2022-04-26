import LoginForm from '../Views/LoginForm';

const LoginRoute =
    [
        {
            path: '',
            name: 'Index',
            component: LoginForm,
        },
        {
            path: '*',
            name: 'IndexWildCard',
            component: LoginForm,
        },
    ]

export default LoginRoute
