import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { columns } from "./columns";
import { data } from "./data";
const { Header, Content, Footer, Sider } = Layout;
// const items1 = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const MainPage = () => {
  const col = columns;
  const dataSource = data;
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
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
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
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                }}
                items={items2}
              />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: "100vh",
              }}
            >
              <Table columns={col} dataSource={dataSource} />
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
export default MainPage;
