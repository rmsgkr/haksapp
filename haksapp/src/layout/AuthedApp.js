import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const AuthedApp = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={GNB}
            onClick={onClick}
          /> */}
          <Link to={"/schedule"}>
            <span>{"schedule"}</span>
          </Link>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Layout
            className="site-layout-background"
            style={{
              padding: "24px 0",
            }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                }}
                items={[
                  {
                    key: `1`,
                    icon: React.createElement(UserOutlined),
                    label: <Link to="/">일정</Link>,
                  },
                  {
                    key: `2`,
                    icon: React.createElement(LaptopOutlined),
                    label: <Link to="/schedule">가계부</Link>,
                  },
                ]}
              />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: "100vh",
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <DynamicRoute routes={AuthedRoutes}></DynamicRoute>
              </Suspense>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Created by Hak
        </Footer>
      </Layout>
    </>
  );
};

export { AuthedApp };
