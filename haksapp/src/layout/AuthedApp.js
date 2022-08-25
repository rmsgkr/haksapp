import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const AuthedApp = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/">일정</Link>,
              },
              {
                key: "2",
                icon: <LaptopOutlined />,
                label: <Link to="/schedule">가계부</Link>,
              },
              // {
              //   key: "3",
              //   icon: <UploadOutlined />,
              //   label: "nav 3",
              // },
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
            <div id="header">
              <div className="headerIn">
                <div className="noticeName">
                  {/* <div className="quickNotice"></div> */}
                  <div className="userName">이근학</div>
                </div>
                <div className="setupLogin">
                  <Link to="/signOut">logout</Link>
                </div>
              </div>
            </div>
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
