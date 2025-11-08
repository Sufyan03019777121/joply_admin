import React from "react";
import { Table, Typography, Button } from "antd";
const { Title } = Typography;

const data = [
  { key: 1, zone: "Punjab", city: "Lahore", fee: "5%" },
  { key: 2, zone: "Sindh", city: "Karachi", fee: "7%" },
];

export default function ZonesCities() {
  return (
    <>
      <Title level={2}>🌍 Zones / Cities Management</Title>
      <Table
        dataSource={data}
        columns={[
          { title: "Zone", dataIndex: "zone" },
          { title: "City", dataIndex: "city" },
          { title: "Fee", dataIndex: "fee" },
          {
            title: "Action",
            render: () => <Button type="primary">Edit</Button>,
          },
        ]}
      />
    </>
  );
}
