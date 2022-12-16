import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { useNavigate } from "react-router-dom";
import style from './index.scss'
const Sider: React.FC = () => {
const { Sider } = Layout;
const navigate = useNavigate()
const [collapsed, setCollapsed] = useState<boolean>(false);
const onchanges = (path:any)=>{
    navigate(path.key)
}
return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={style['collapsed-icon']}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: style['collapsed-icon'],
            onClick: () => setCollapsed(!collapsed),
          })}
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          onSelect={(item)=>onchanges(item)}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '/home/menu',
              icon: <VideoCameraOutlined />,
              label: '菜单',
            },
            {
              key: '/home/demo',
              icon: <UploadOutlined />,
              label: 'demo',
            },
          ]}
        />
      </Sider>
)
};
export default Sider