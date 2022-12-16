import { Navigate } from "react-router-dom";
import React, { lazy } from 'react'
import NotFound from '@/pages/NotFound'
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
    return (
        <React.Suspense fallback={<h1>加载中...</h1>}>
            <Component></Component>
        </React.Suspense>
    )
}
export const router = [
    {
        path: "/home",
        label: '首页',
        element: lazyLoad(lazy(() => import('../layout/index'))),
        children: [
            {
                label: '首页',
                index: true,
                element: lazyLoad(lazy(() => import('../pages/home'))),
            },
            {
                path: '/home/menu',
                label: '菜单',
                element: lazyLoad(lazy(() => import('../pages/menu'))),
            },
            {
                path: '/home/demo',
                label: '示例',
                element: lazyLoad(lazy(() => import('../pages/demo'))),
            },
        ]
    },
    {
        //配置默认路由
        path: "/",
        element: <Navigate to="/home" />, //重定向页面
    },
    {
        //404
        path: "/404",
        element: <NotFound/>,
    },
    {
        path: '*',
        element: <Navigate to="/404" />,
    }
]
export default router; //导出配置好的路由数组
