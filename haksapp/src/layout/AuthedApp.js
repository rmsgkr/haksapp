import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { Suspense, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DynamicRoute } from "./DynamicRoute";
import { AuthedRoutes } from "./routes";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

const AuthedApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  // const router = useNavigate();
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
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
            items={[
              {
                key: "/",
                icon: <UserOutlined />,
                label: <Link to="/">일정</Link>,
              },
              {
                key: "/schedule",
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
                  <div className="userName">
                    <FormattedMessage
                      id="Message.Logout.Hello"
                      values={{ user: <span>{"이근학"}</span> }}
                    />
                  </div>
                </div>
                <div className="setupLogin">
                  {/* <div className="label"> */}
                  <Link to="/signOut">logout</Link>
                  {/* </div> */}
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
          {/* <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#002140",
            }}
          >
            Created by Hak
          </Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export { AuthedApp };
