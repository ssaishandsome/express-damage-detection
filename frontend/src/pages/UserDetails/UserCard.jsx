import { useState } from "react";
import { Avatar, Card, Skeleton } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

// eslint-disable-next-line react/prop-types
const UserCard = ({ style }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Card
        title="Profile:"
        style={style}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};
export default UserCard;
