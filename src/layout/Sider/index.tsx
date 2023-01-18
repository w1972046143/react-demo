import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import style from './index.module.scss'
const Sider: React.FC = () => {
  const { Sider } = Layout;
  const navigate = useNavigate()
  const currentRoute = useLocation()
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // const [openKeys,setOpenKeys] = useState("")
  const menuList = [
    {
      key: '/home',
      icon: <UserOutlined />,
      label: '首页',
    },
    {
      key: '/home/menu',
      icon: <VideoCameraOutlined />,
      label: '菜单',
    },
    {
      key: '1',
      icon: <UploadOutlined />,
      label: 'demo测试',             
      children: [
        {
          key: "/home/demo",
          label: '个人信息',
        }
      ]
    },
  ]
  // useEffect(()=>{
  //   findOpen()
  // },[])
  // const findOpen=()=>{
  //   menuList.map(item=>{
  //     if(item.children && item.children.length>0){
  //       if(item.children.find(v=>v.key === currentRoute.pathname)){
  //         console.log(item,"有相等的",item.key)
  //         setOpenKeys(item.key)
  //       }
  //     }
  //   })
  // }
  const onchanges = (path: any) => {
    navigate(path.key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="page">
      <div className={style['icon-box']}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: style['collapsed-icon'],
          onClick: () => setCollapsed(!collapsed),
        })}
      </div>
      {/* defaultOpenKeys={[openKeys]}
        openKeys={[openKeys]} */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentRoute.pathname]}
        onSelect={(item) => onchanges(item)}
        items={menuList}
      />
    </Sider>
  )
};
export default Sider