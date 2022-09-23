import { Badge, Calendar, PageHeader, Table } from "antd";
// import locale from "antd/es/calendar/locale/ko_KR";
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

// TODO: 일정(캘린더) 로직 구현
const MainPage = () => {
  // const col = columns;
  // const dataSource = data;
  const getListData = (value) => {
    let listData;
    console.log("value.localeData()", value.localeData());
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
      default:
    }

    return listData || [];
  };

  // const getMonthData = (value) => {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  // };
  // const monthCellRender = (value) => {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    console.log("listData", listData);
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
  // console.log("locale", locale);
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="일정"
        // breadcrumb={{ routes }}
        // subTitle="This is a subtitle"
      />
      <Calendar
        // locale={locale}
        dateCellRender={dateCellRender}
        // onSelect={onSelectDateCell}
        // monthCellRender={monthCellRender}
      />

      {/* <Table
        columns={col}
        dataSource={dataSource}
        pagination={{ position: ["bottomCenter"] }}
      /> */}
    </>
  );
};
export default MainPage;
