import React, { useState } from "react";
import { Table, Button, Tag, Typography, Space, Card } from "antd";
import "./agents.css";

const { Title } = Typography;

export default function Agents() {
  const [agents, setAgents] = useState([
    { key: 1, name: "Ahmad", cnic: "35202-1234567-1", status: "Pending" },
    { key: 2, name: "Rashid", cnic: "35201-9876543-2", status: "Verified" },
  ]);

  const handleVerify = (id) => {
    setAgents((prev) =>
      prev.map((a) => (a.key === id ? { ...a, status: "Verified" } : a))
    );
  };

  return (
    <div className="agents-container">
      <Title level={4} className="agents-title">
        📝 Agent Verification
      </Title>

      <Card className="agents-card">
        <Table
          dataSource={agents}
          pagination={false}
          columns={[
            { title: "Name", dataIndex: "name" },
            { title: "CNIC", dataIndex: "cnic" },
            {
              title: "Status",
              dataIndex: "status",
              render: (s) => (
                <Tag
                  color={s === "Verified" ? "green" : s === "Pending" ? "orange" : "red"}
                >
                  {s}
                </Tag>
              ),
            },
            {
              title: "Action",
              render: (_, record) => (
                <Space>
                  <Button
                    type="primary"
                    size="small"
                    disabled={record.status === "Verified"}
                    onClick={() => handleVerify(record.key)}
                  >
                    Verify
                  </Button>
                  <Button size="small" danger>
                    Block
                  </Button>
                </Space>
              ),
            },
          ]}
          className="agents-table"
        />
      </Card>
    </div>
  );
}
