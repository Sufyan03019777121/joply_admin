import React from "react";
import { Table, Typography } from "antd";
const { Title } = Typography;

const data = [
  { key: 1, agent: "Ali Khan", amount: "20,000", status: "Paid" },
  { key: 2, agent: "Sara Ahmed", amount: "15,000", status: "Pending" },
];

export default function Payments() {
  return (
    <>
      <Title level={2}>💰 Payments Control</Title>
      <Table
        dataSource={data}
        columns={[
          { title: "Agent", dataIndex: "agent" },
          { title: "Amount", dataIndex: "amount" },
          { title: "Status", dataIndex: "status" },
        ]}
      />
    </>
  );
}
