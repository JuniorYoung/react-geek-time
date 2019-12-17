export default {
    plugins: [
        ['umi-plugin-react', {
            dva: true,
            antd: true,
        }]
    ],
    routes: [
        {
            path: '/login', component: './login',
        },
        {
            path: '/', component: '../layouts/index',
            routes: [
                {
                    path: '/users', component: './users/index'
                },
                {
                    path: '/about', component: './about'
                }
            ],
        }
    ]
}