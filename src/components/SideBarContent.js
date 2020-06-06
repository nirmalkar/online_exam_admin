import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { QuestionOutlined, DashboardOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const SideBarContent = () => {
  return (
    <>
      <Menu theme="dark" mode="inline">
        <SubMenu key="sub1" title="Dashboard" icon={<DashboardOutlined />}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Questions" icon={<QuestionOutlined />}>
          <Menu.Item key="3">
            <Link to="/dashboard/create-question">Create Questions</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/dashboard/view-question">View QUestions</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SideBarContent;
