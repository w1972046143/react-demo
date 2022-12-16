import React from 'react';
import { Layout, theme } from 'antd';
import Sider from './Sider/index'
import {Outlet} from 'react-router-dom'
import style from './index.module.scss'
const { Header, Content } = Layout;
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  return (
    <Layout className={style['ant-layout']}>
      <Sider/>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;