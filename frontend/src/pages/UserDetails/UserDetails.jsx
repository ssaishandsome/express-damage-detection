import UserCard from "./UserCard";
import HistoryCard from "./HistoryCard";
import { Row, Col } from "antd";
export default function UserDetails() {
  return (
    <div style={{ margin: "24px 24px" }}>
      <Row gutter={24}>
        <Col flex={1}>
          <UserCard style={{ width: "100%", marginBottom: 24 }} />
        </Col>

        <Col flex={3}>
          <HistoryCard />
        </Col>
      </Row>
    </div>
  );
}
