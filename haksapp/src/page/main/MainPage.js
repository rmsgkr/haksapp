import { Badge, Calendar, PageHeader, Table } from "antd";
import React from "react";
import { columns } from "./columns";
import { data } from "./data";
// import { TimePicker } from "antd";
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
  // const col = columns;
  // const dataSource = data;
  const getListData = (value) => {
    let listData;

    switch (value.date()) {
      case 8:
        listData = [
          {
            type: "warning",
            content: "This is warning event.",
          },
          {
            type: "success",
            content: "This is usual event.",
          },
        ];
        break;

      case 10:
        listData = [
          {
            type: "warning",
            content: "This is warning event.",
          },
          {
            type: "success",
            content: "This is usual event.",
          },
          {
            type: "error",
            content: "This is error event.",
          },
        ];
        break;

      case 15:
        listData = [
          {
            type: "warning",
            content: "This is warning event",
          },
          {
            type: "success",
            content: "This is very long usual event。。....",
          },
          {
            type: "error",
            content: "This is error event 1.",
          },
          {
            type: "error",
            content: "This is error event 2.",
          },
          {
            type: "error",
            content: "This is error event 3.",
          },
          {
            type: "error",
            content: "This is error event 4.",
          },
        ];
        break;

      default:
    }

    return listData || [];
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="일정"
        // breadcrumb={{ routes }}
        // subTitle="This is a subtitle"
      />
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      ;
      {/* <Table
        columns={col}
        dataSource={dataSource}
        pagination={{ position: ["bottomCenter"] }}
      /> */}
    </>
  );
};
export default MainPage;
