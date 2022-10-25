import React from "react";
import mainImg from "./static/img/img05.jpg";
import Confetti from "react-confetti";
import KakaoShare from "./components/KakaoShare";
import WeddingDate from "./components/WeddingDate";
import "./static/css/App.css";
import TopNavigator from "./components/TopNavigator";
import KakaoMap from "./components/KakaoMap";
import FamilyProfile from "./components/FamilyProfile";
import WomanIcon from "./static/img/icon/womanIcon.png";
import ManIcon from "./static/img/icon/manIcon.png";

function App() {
  const nameStyle = {
    "font-weight": "bold",
    "font-size": "18px",
  };
  return (
    <div className="App">
      <Confetti
        height={2000}
        numberOfPieces="50"
        friction={0.96}
        initialVelocityX={60}
        // colors={['#FF0000']}
        opacity={0.4}
      />
      <TopNavigator />
      <img src={mainImg} className="main-image" id="main" alt="logo" />
      <div className="greetingMessage">
        <span>
          2023년 첫 달, 우리들의 세 번째 겨울
          <br />
          문은비 그리고 윤상렬 결혼합니다.
          <br />
          <br />
          새로운 해가 시작되는 1월
          <br />
          둘이 함께 나아가는 첫걸음을 <br />
          여러분들의 축하와 함께 한발 내디디려 합니다.
          <br />
          저희 둘의 첫 시작을 함게 축복해 주세요.
        </span>
      </div>
      <hr
        style={{
          width: 280,
          height: 1,
          borderWidth: 0,
          backgroundColor: "gray",
        }}
      />
      <div className="parentsName">
        <p>
          <img src={ManIcon} className="prefixIcon" />
          <span className="name">윤재순, 최옥자</span>의 아들{" "}
          <span className="name">상렬</span>
        </p>
        <p>
          <img src={WomanIcon} className="prefixIcon" />
          <span className="name">문기현, 한은경</span>의 딸{" "}
          <span className="name">은비</span>
        </p>
      </div>
      <WeddingDate />
      <KakaoMap />
      <FamilyProfile />
      <KakaoShare />
    </div>
  );
}

export default App;
