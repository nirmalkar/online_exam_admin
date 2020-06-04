import React from "react";
import { Menu } from "antd";

import { FileTextOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const SideBarContent = () => {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <SubMenu key="sub1" icon={<FileTextOutlined />} title="Questions">
          <Menu.Item key="3">Create Questions</Menu.Item>
          <Menu.Item key="4">View QUestions</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SideBarContent;
