import React, { useState, useEffect } from "react";
import {
  Card,
  Upload,
  Button,
  Typography,
  Image,
  Spin,
  message,
} from "antd";
import { UploadOutlined, ReloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "./joplyLogo.css";

const { Title, Text } = Typography;

export default function JoplayLogo() {
  const [file, setFile] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // ✅ Use Ant Design message instance (safe version)
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    fetchLogo();

    // ✅ Cleanup (safe message destroy if available)
    return () => {
      if (message.destroy) message.destroy();
    };
  }, []);

  // ✅ Fetch existing logo from backend
  const fetchLogo = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://joply-backend.onrender.com./api/logo");
      const data = await res.json();
      if (data.url) setLogo("https://joply-backend.onrender.com" + data.url);
      else setLogo(null);
    } catch (err) {
      messageApi.error("Failed to fetch logo 😕");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Upload new logo
  const handleUpload = async () => {
    if (!file) return messageApi.warning("Please select a file first.");

    const formData = new FormData();
    formData.append("logo", file);
    setUploading(true);

    try {
      const res = await fetch("https://joply-backend.onrender.com./api/logo/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        messageApi.success("Logo uploaded successfully ✅");
        setFile(null);
        fetchLogo();
      } else {
        messageApi.error(data.message || "Something went wrong 😕");
      }
    } catch (err) {
      messageApi.error("Server connection failed 😓");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="joplay-logo-container"
      >
        <Card className="joplay-logo-card">
          <Title level={3} className="joplay-logo-title">
            🖼️ Joplay Logo Manager
          </Title>

          {loading ? (
            <Spin tip="Loading logo..." />
          ) : logo ? (
            <Image
              src={logo}
              alt="Logo"
              className="joplay-logo-image"
              preview={false}
            />
          ) : (
            <Text type="secondary">No logo uploaded yet.</Text>
          )}

          <div className="joplay-logo-upload-section">
            <Upload
              beforeUpload={(file) => {
                setFile(file);
                return false;
              }}
              showUploadList={false}
              accept="image/*"
            >
              <Button
                icon={<UploadOutlined />}
                className="joplay-logo-select-btn"
              >
                Select File
              </Button>
            </Upload>

            {file && (
              <div className="joplay-logo-preview-container">
                <Text>Preview:</Text>
                <div className="joplay-logo-preview-box">
                  <img src={URL.createObjectURL(file)} alt="Preview" />
                </div>
              </div>
            )}

            <Button
              type="primary"
              onClick={handleUpload}
              loading={uploading}
              className="joplay-logo-upload-btn"
            >
              {uploading ? "Uploading..." : "Upload Logo"}
            </Button>

            <Button
              icon={<ReloadOutlined />}
              onClick={fetchLogo}
              className="joplay-logo-refresh-btn"
            >
              Refresh
            </Button>
          </div>
        </Card>
      </motion.div>
    </>
  );
}
