import { Card, List, PageHeader } from "antd";
import React from "react";
import { data } from "./data";

const ListPage = () => {
  const dataSource = data;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="가계부"
        // breadcrumb={{ routes }}
        // subTitle="This is a subtitle"
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </>
  );
};
export default ListPage;
