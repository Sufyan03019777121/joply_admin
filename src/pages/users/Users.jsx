import React from "react";
import { Table, Tag, Typography, Card } from "antd";
import "./users.css";

const { Title } = Typography;

const data = [
  { key: 1, name: "Ali Khan", email: "ali@example.com", status: "Active" },
  { key: 2, name: "Sara Ahmed", email: "sara@example.com", status: "Blocked" },
  { key: 1, name: "Ali Khan", email: "ali@example.com", status: "Active" },
  { key: 2, name: "Sara Ahmed", email: "sara@example.com", status: "Blocked" },
];

export default function Users() {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="users-container">
      <Title level={4} className="users-title">
        Manage Users
      </Title>
      <Card className="users-card">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          className="custom-table"
        />
      </Card>
    </div>
  );
}
