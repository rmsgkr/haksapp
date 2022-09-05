import { PageHeader, Table } from "antd";
import React from "react";
import { columns } from "./columns";
import { data } from "./data";
import { TimePicker } from "antd";
// const items1 = ["1", "2", "3"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   }
// );

// test commit
const MainPage = () => {
  const col = columns;
  const dataSource = data;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="일정"
        // breadcrumb={{ routes }}
        // subTitle="This is a subtitle"
      />
      <Table
        columns={col}
        dataSource={dataSource}
        pagination={{ position: ["bottomCenter"] }}
      />
    </>
  );
};
export default MainPage;
