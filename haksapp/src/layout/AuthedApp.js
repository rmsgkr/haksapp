import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const AuthedApp = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              // margin: "24px 16px",
              // padding: 24,
              minHeight: "100vh",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicRoute routes={AuthedRoutes}></DynamicRoute>
            </Suspense>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Created by Hak
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export { AuthedApp };
