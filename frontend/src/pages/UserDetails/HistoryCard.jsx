import { useState } from "react";
import { Card } from "antd";

const tabListNoTitle = [
  {
    key: "history",
    label: "history",
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

// eslint-disable-next-line react/prop-types
const HistoryCard = ({ style }) => {
  const [activeTabKey2, setActiveTabKey2] = useState("app");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <Card
        style={style}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};
export default HistoryCard;
