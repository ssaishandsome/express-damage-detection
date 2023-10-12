import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, Navigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const SiderTab = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState("photographed");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["photographed"]}
          items={[
            {
              key: "photographed",
              icon: <VideoCameraOutlined />,
              label: "拍摄",
            },
            {
              key: "upload",
              icon: <UploadOutlined />,
              label: "上传文件",
            },
          ]}
          onSelect={({ key }) => {
            setSelectedKeys(`${key}`);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            height: 50,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "14px 12px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {selectedKeys === "photographed" && (
            <Navigate to="/start/photographed" />
          )}
          {selectedKeys === "upload" && <Navigate to="/start/upload" />}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default SiderTab;
