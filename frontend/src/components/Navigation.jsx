// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { UserOutlined, BankTwoTone } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "开始",
    key: "start",
    // icon: <MailOutlined />,
  },
  {
    label: "关于我们",
    key: "about",
    // icon: <MailOutlined />,
  },
  {
    label: "用户",
    key: "user",
    icon: <UserOutlined />,

    children: [
      {
        label: "用户信息",
        key: "details",
      },
      {
        label: "登录/注册 ",
        key: "signIn",
      },
      {
        label: "历史记录",
        key: "history",
      },
    ],
  },
];

const Navigation = () => {
  const [current, setCurrent] = useState("mail");
  let navigate = useNavigate();

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <BankTwoTone
        key="home"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: 25,
          marginTop: 22,
          marginLeft: 20,
        }}
        onClick={() => {
          navigate("/home");
          setCurrent("home");
        }}
      />
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          width: "100%",
          justifyContent: "flex-end",
        }}
        onSelect={({ key, keyPath }) => {
          if (keyPath.length === 1) {
            console.log({ key });
            navigate(`/${key}`);
          } else {
            navigate(`/user/${key}`);
          }
        }}
      />
    </>
  );
};
export default Navigation;
