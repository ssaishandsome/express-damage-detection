import Texty from "rc-texty";
import "rc-texty/assets/index.css";
// import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Texty
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            // backgroundImage:
            //   "linear-gradient(90deg, rgba(10,54,116,0.8894058355764181) 0%, rgba(91,204,227,0.7129352473411239) 86%)",
            color: "#b6b6c1",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          EXPRESS DAMAGE DETECION
        </Texty>
        {/* <QueueAnim delay={300} className="queue-simple">
        <div key="a">Queue Demo</div>
        <div key="b">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
      </QueueAnim> */}
      </div>
      <Button
        style={{
          display: "block",
          margin: "80px auto",
          transform: "scale(3)",
        }}
        ghost
        onClick={() => {
          navigate("/start");
        }}
      >
        start
      </Button>
    </>
  );
}

export default Home;
