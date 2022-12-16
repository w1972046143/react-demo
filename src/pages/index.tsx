
// import React, { lazy } from 'react'
// import { useRoutes } from 'react-router-dom'
// import { HomeOutlined, AppstoreOutlined, SettingOutlined, EnvironmentOutlined, FileProtectOutlined, ShopOutlined } from '@ant-design/icons';

// // HashRouter
// // 路由懒加载
// const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
//     return (
//         <React.Suspense fallback={<h1>加载中...</h1>}>
//             <Component></Component>
//         </React.Suspense>
//     )
// }
// export const router = [
//     {
//         path: '/',
//         label: '首页',
//         redirect: '/home',
//         element: lazyLoad(lazy(() => import('../Layouts/index'))),
//         key: 'keys',
//         children: [
//             {
//                 path: 'home',
//                 label: '首页',
//                 icon: <HomeOutlined />,
//                 key: 'home',
//                 element: lazyLoad(lazy(() => import('../pages/Home/Home'))),
//             },
//             {
//                 path: 'demo',
//                 label: '模板',
//                 key: 'demo',
//                 icon: <AppstoreOutlined />,
//                 element: lazyLoad(lazy(() => import('../pages/Demo/Demo')))
//             },
//             {
//                 path: 'product',
//                 label: '产品',
//                 key: 'product',
//                 icon: <EnvironmentOutlined />,
//                 element: lazyLoad(lazy(() => import('../pages/Product/Product')))
//             }, {
//                 path: 'contract',
//                 label: '合同',
//                 key: 'contract',
//                 icon: <FileProtectOutlined />,
//                 element: lazyLoad(lazy(() => import('../pages/Contract/Contract')))
//             }, {
//                 path: 'my',
//                 label: '我的',
//                 key: 'my',
//                 icon: <ShopOutlined />,
//                 element: lazyLoad(lazy(() => import('../pages/My/My')))
//             }, {
//                 path: 'config',
//                 label: '配置',
//                 key: 'config',
//                 icon: <SettingOutlined />,
//                 element: lazyLoad(lazy(() => import('../pages/Config/Config')))
//             },
//         ]
//     },
//     {
//         path: '/login',
//         label: '登录',
//         key: 'login',
//         element: lazyLoad(lazy(() => import('../pages/Login/Login')))
//     },
// ]

// const GetRoutes = () => {
//     return useRoutes(router)
// }
// export default GetRoutes
export default{
    
}