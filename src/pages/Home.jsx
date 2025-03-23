import "../styles/home.scss";
import Button from "../components/Button";
import "../styles/Text.scss";

function Home() {
  return (
    <>
      <div className="button-container">
        <div className="text" style={{ marginRight: "80px" }}>
          순간을 4컷에 담아,
        </div>
        <div className="text" style={{ marginLeft: "100px" }}>
          가장 나다운 기록
        </div>
        <Button title="START" />
      </div>
    </>
  );
}

export default Home;
